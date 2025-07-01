import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path={"shop/*"} element={<Shop />} />
        <Route path={"sign-in"} element={<SignIn />} />
        <Route path={"checkout"} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
