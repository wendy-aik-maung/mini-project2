import { useState, createContext } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Page from "./pages/Page";

export const AppContext = createContext();

const App = () => {
  const CounterProvider = (props) => {
    const defaultTownCounts = 50;
    const defaultHomeCounts = 0;

    const [btn, setBtn] = useState("Town");

    const [townData, setTownData] = useState({
      food: {
        dry: defaultTownCounts,
        canned: defaultTownCounts,
        wet: defaultTownCounts,
        meat: defaultTownCounts,
      },
      toys: {
        bone: defaultTownCounts,
        dispenser: defaultTownCounts,
        ball: defaultTownCounts,
      },
    });
    const [homeData, setHomeData] = useState({
      food: {
        dry: defaultHomeCounts,
        canned: defaultHomeCounts,
        wet: defaultHomeCounts,
        meat: defaultHomeCounts,
      },
      toys: {
        bone: defaultHomeCounts,
        dispenser: defaultHomeCounts,
        ball: defaultHomeCounts,
      },
    });

    return (
      <AppContext.Provider
        value={{
          homeData,
          setHomeData,
          townData,
          setTownData,
          btn,
          setBtn,
        }}
      >
        {" "}
        {props.children}
      </AppContext.Provider>
    );
  };

  return (
    <CounterProvider>
      <Page />
      <Footer />
    </CounterProvider>
  );
};
export default App;
