import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path={"shop"} element={<Shop />} />
        <Route path={"sign-in"} element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
