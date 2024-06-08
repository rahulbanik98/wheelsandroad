"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children, NavBar }: any) {
  return (
    <Provider store={store}>
      {children} {NavBar}
    </Provider>
  );
}
