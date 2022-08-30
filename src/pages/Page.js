import { useContext } from "react";
import { AppContext } from "../App";
import Home from "../components/Home";
import Town from "../components/Town";

const Page = () => {
  const { btn } = useContext(AppContext);
  return <>{btn === "Home" ? <Home /> : <Town />}</>;
};

export default Page;
