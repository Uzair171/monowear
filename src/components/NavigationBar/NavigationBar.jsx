import { Outlet } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <h2>This is a navigation bar</h2>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
