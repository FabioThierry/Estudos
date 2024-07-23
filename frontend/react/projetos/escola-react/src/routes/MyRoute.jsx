import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({
  component: Component,
  isClosed = false,
  ...rest
}) {
  const isLoogedId = false;

  if (isClosed && !isLoogedId) {
    return (
      <Redirect
        to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isClosed: PropTypes.bool,
};
