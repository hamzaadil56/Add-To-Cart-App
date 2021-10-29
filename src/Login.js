import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./Redux/action/action";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  let history = useHistory();
  const { loginWithRedirect } = useAuth0();
  if (isAuthenticated) {
    // history.push("/cart");
    dispatch(login());
    return <Redirect push to="/cart" />;
  }
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Login;
