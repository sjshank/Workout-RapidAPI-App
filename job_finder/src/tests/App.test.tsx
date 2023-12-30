import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";

describe("Test suite for App", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Job Spotter")).toBeDefined();
    const filters = screen.getAllByTestId("filter");
    expect(filters).toHaveLength(4);
    expect(screen.getByTestId("footer")).toBeDefined();
  });
});
