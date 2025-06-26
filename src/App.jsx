import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Shop from "./pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
