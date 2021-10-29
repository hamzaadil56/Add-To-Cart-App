import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import Login from "./Login";
import Logout from "./Logout";
const Home = () => {
  const { isLoading } = useAuth0();
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="App">
      <h1>Welcome to Cart Application</h1>
      <section className="login-container">
        <h2>Login to Cart</h2>
        <Login />
        <Logout />
      </section>
    </div>
  );
};
export default Home;
