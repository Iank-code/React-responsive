import React from "react";
import "./login.css";
import { notifications } from "@mantine/notifications";

export default function Login() {
  function loginFunc(event) {
    event.preventDefault();
    notifications.show({
      title: "Login Successful",
      message: "You have successfully logged in",
      color: "red",
    });
  }

  return (
    <div>
      <form className="form" onSubmit={loginFunc}>
        {/* For username */}
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />

        {/* For password */}
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        {/* Submit Button */}
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
