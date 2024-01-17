import React from "react";
import SignUpForm from "./form";

const SignUpPage = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold tracking-tight">Sign Up</h2>
      <section className="mt-6 lg:mt-8">
        <SignUpForm></SignUpForm>
      </section>
    </div>
  );
};

export default SignUpPage;
