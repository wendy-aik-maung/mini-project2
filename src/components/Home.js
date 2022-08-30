/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { css } from "@emotion/react";
import { AppContext } from "../App";

const Home = () => {
  const { homeData } = useContext(AppContext);
  const foodAtHome = homeData.food;
  const toysAtHome = homeData.toys;

  return (
    <>
      <div>
        <h3 css={[styles.heading, { marginTop: 10 }]}> Home </h3>
        <div css={styles.col_left}>
          <table css={styles.table}>
            <tr>
              <th css={styles.th}>Food</th>
            </tr>
            <tr>
              <td>Dry Food: {foodAtHome.dry}</td>
            </tr>
            <tr>
              <td>Canned Food: {foodAtHome.canned}</td>
            </tr>
            <tr>
              <td>Wet Food: {foodAtHome.wet}</td>
            </tr>
            <tr>
              <td>Meat: {foodAtHome.meat}</td>
            </tr>
          </table>
        </div>
        <div css={styles.col_right}>
          <table css={styles.table}>
            <tr>
              <th css={styles.th}>Toys</th>
            </tr>
            <tr>
              <td>Rubber Bone: {toysAtHome.bone}</td>
            </tr>
            <tr>
              <td>Dog Treats Dispenser: {toysAtHome.dispenser}</td>
            </tr>
            <tr>
              <td>Tennis Ball: {toysAtHome.ball}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
const styles = {
  heading: css`
    margin: auto;
    width: 1000px;
    height: 50px;
    background-color: #f0f8ff;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    color: hotpink;
    font-size: 22px;
    border: 2px solid #dc143c;
    padding: 0.5em;
    text-align: center;
  `,
  table: css`
    border: 2px solid forestgreen;
    width: 500px;
    height: 200px;
  `,
  th: css`
    font-size: 20px;
    font-weight: bold;
    color: #87cefa;
    border-bottom: 1px solid black;
  `,
  col_left: css`
    float: left;
    width: 50%;
    padding: 15px;
  `,
  col_right: css`
    float: right;
    padding: 15px;
  `,
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
