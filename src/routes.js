import React, { lazy, Suspense, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// import Loader from './components/Loader';

const LoginPage = lazy(() => {
  const Structure = import("./pages/Authentication");
  return Promise.all([
    Structure,
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const DashboardPage = lazy(() => {
  const Structure = import("./pages/Dashboard");
  return Promise.all([
    Structure,
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const Cart = lazy(() => {
  const Structure = import("./pages/Cart");
  return Promise.all([
    Structure,
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const OrderConfirmation = lazy(() => {
  const Structure = import("./pages/OrderConfirmation");
  return Promise.all([
    Structure,
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localAuthUser: "pending",
    };
  }
  render() {
    return (
      <Fragment>
        <Switch>
          {defaultRoutes.map((routeDetail) => (
            <Route
              key={routeDetail?.id}
              path={routeDetail?.path}
              exact
              render={(props) => (
                <Suspense fallback={<div>Loading ...</div>}>
                  <routeDetail.component {...props} />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </Fragment>
    );
  }
}
const defaultRoutes = [
  { id: 1, path: "/order-confirmation", component: OrderConfirmation },
  { id: 2, path: "/login", component: LoginPage },
  { id: 3, path: "/cart", component: Cart },
  { id: 4, path: "/", component: DashboardPage },
];

export default Routes;
