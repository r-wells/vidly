import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { email: "", name: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Email"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    //Call the server, save changes
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
