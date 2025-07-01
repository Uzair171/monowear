import FormInput from "../Form-input/FormInput";
import Button from "../Button/Button";
import "./sign-in.style.scss";

import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    try {
      const result = await signInWithGooglePopup();
      console.log("✅ Google sign-in successful:", result.user);
    } catch (error) {
      console.error("❌ Google sign-in error:", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log("✅ Email sign-in successful:", user);
      setFormFields(defaultFormFields);
    } catch (error) {
      console.error("❌ Email sign-in error:", error);

      if (error.code === "auth/user-not-found") {
        alert("No user associated with this email");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else {
        alert("Failed to sign in: " + error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="button">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
