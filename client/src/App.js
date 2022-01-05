import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet/>
    </>
  );
}

export default App;
