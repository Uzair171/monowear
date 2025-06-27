import { useState } from "react";

const SignUpForm = () => {
  const SignUpForm = () => {
    const defaultFormFields = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted:", formFields);

      setFormFields(defaultFormFields);
    };
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>
          Display Name:
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
