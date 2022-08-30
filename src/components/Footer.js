/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { AppContext } from "../App";

const Footer = () => {
  const { setTownData, setHomeData, setBtn } = useContext(AppContext);
  const handleReset = () => {
    const defaultTownCounts = 50;
    const defaultHomeCounts = 0;
    setTownData({
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
    setHomeData({
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
  };

  return (
    <footer css={styles.footer}>
      <button
        css={[styles.btn, { marginRight: 40 }]}
        onClick={() => setBtn("Town")}
      >
        Go To Town
      </button>
      <button
        css={[styles.btn, { marginRight: 40 }]}
        onClick={() => setBtn("Home")}
      >
        Go To Home
      </button>
      <button css={[styles.btn, { marginRight: 40 }]} onClick={handleReset}>
        Reset App
      </button>
    </footer>
  );
};

export default Footer;
const styles = {
  btn: css`
    background-color: #ea4c89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    padding: 10px 16px;
    text-align: center;
  `,
  footer: css`
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
  `,
};
