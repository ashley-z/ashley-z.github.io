import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { CaseStudy } from "./components/CaseStudy";
import { Resources } from "./components/Resources";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "case-study/:id", Component: CaseStudy },
      { path: "resources", Component: Resources },
    ],
  },
]);
