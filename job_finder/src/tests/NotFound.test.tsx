import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";
import NotFound from "../pages/NotFound";

describe("Test suite for NotFound", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("not-found")).toBeDefined();
  });
});
