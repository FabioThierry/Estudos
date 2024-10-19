import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function MyRoute({
  component: Component,
  isClosed = false,
  ...rest
}) {
  const isLoogedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoogedIn) {
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
