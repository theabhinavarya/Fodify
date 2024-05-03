import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render Header Component with a Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        {" "}
        <Header />{" "}
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});
