import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Navbar = lazy(() => {
  return System.import("@fabio-milheiro/navbar").then((module) => {
    return module.getNavbar();
  });
});

export default function Root(props) {
  return (
    <div style={{ border: "1px solid #000" }}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route
            path="/products"
            render={() => <div>All products</div>}
            exact
          />
          <Route
            path="/products/:id"
            render={(props) => <div>Product {props.match.params.id}</div>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
