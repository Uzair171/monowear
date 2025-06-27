import "./button.styles.scss";

const buttonTypesClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ type, children, buttonType, onClick }) => {
  return (
    <button
      type={type}
      className={`button-container ${buttonTypesClasses[buttonType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
