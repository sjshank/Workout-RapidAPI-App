import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";
import Home from "../pages/Home";
import fetchMock from "jest-fetch-mock";

const fakeData = [
  {
    salary: "0120000",
    title: "hello",
    type: "Full Time",
    id: 16,
  },
];

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("Test suite for Home", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const home = screen.getByTestId("home");
    expect(home).toBeDefined();
    expect(screen.getByText("Open Jobs")).toBeDefined();
    // expect(screen.getByTestId("job-list")).toBeDefined();
  });

  test("it renders Job List", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ jobs: fakeData }));
    // fetchMock.mockReject(() => Promise.reject("API is down"));
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const jobList = await waitFor(() => screen.getByTestId("job-list"));
    expect(jobList).toBeDefined();
  });
});
