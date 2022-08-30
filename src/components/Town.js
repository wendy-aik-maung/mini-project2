/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { AppContext } from "../App";
import { css } from "@emotion/react";
const Town = () => {
  const { townData, setTownData, homeData, setHomeData } =
    useContext(AppContext);
  const foodShop = townData.food;
  const toyShop = townData.toys;

  // handleClick('food', 'dry)
  const handleClick = (_itemType, _itemName) => {
    // to prevent bad parameters like handleClick('FoOd', 'DrY')
    const itemType = _itemType.toLowerCase();
    const itemName = _itemName.toLowerCase();

    setTownData({
      ...townData,
      [itemType]: {
        ...townData[itemType],
        [itemName]: townData[itemType][itemName] - 1,
      },
    });

    setHomeData({
      ...homeData,
      [itemType]: {
        ...homeData[itemType],
        [itemName]: homeData[itemType][itemName] + 1,
      },
    });
  };

  return (
    <>
      <div>
        <h3 css={[styles.heading, { marginTop: 10 }]}> Town </h3>{" "}
        <section css={styles.column}>
          <p css={styles.text}>Dog Food Shop</p>
          <br />
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("FOOD", "dry")}
            >
              Dry Food
            </button>{" "}
            <span> * {foodShop.dry}</span>
          </div>
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("FOOD", "canned")}
            >
              {" "}
              Canned Food{" "}
            </button>{" "}
            <span> * {foodShop.canned}</span>
          </div>
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("FOOD", "wet")}
            >
              {" "}
              Wet Food{" "}
            </button>{" "}
            <span> * {foodShop.wet}</span>
          </div>
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("FOOD", "meat")}
            >
              {" "}
              Meat{" "}
            </button>{" "}
            <span> * {foodShop.meat}</span>{" "}
          </div>
        </section>
        <section css={{ float: "right" }}>
          <p css={styles.text}>Dog Toys Shop </p>
          <br />
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("TOYS", "bone")}
            >
              Rubber Bone{" "}
            </button>{" "}
            <span> * {toyShop.bone}</span>
          </div>
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("TOYS", "dispenser")}
            >
              Dog Treats Dispenser
            </button>{" "}
            <span> * {toyShop.dispenser}</span>
          </div>
          <div>
            <button
              css={styles.display}
              onClick={() => handleClick("TOYS", "ball")}
            >
              Tennis Ball
            </button>{" "}
            <span> * {toyShop.ball}</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Town;
const styles = {
  heading: css`
    margin: auto;
    width: 1000px;
    height: 50px;
    background-color: #f0f8ff;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: hotpink;
    border: 2px solid #dc143c;
    padding: 0.5em;
    font-size: 22px;
    text-align: center;
  `,
  text: css`
    color: #87cefa;
    font-size: 20px;
    font-weight: bold;
  `,
  column: css`
    float: left;
    width: 50%;
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
  display: css`
    background: #fee6e3;
    border: 1px solid #8fbc8f;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #8fbc8f;
    font-size: 16px;
    font-weight: 800;
    outline: 0;
    margin-top: 20px;
    padding: 10px 12px;
    text-align: center;
  `,
  footer: css`
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
  `,
};
