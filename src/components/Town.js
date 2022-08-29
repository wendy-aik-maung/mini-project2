/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { css } from "@emotion/react";
import DogCaring from "./DogCaring";
const Town = () => {
	const [button, setButton] = useState("");
	const { counter1, setCounter1 } = useContext(AppContext);
	const click = () => {
		console.log("Yes");
	};
	const handleClick = (e) => {
		e.preventDefault();
		setCounter1(counter1 - 1);
	};
	return (
		<>
			{button === "DogCaring" ? (
				<DogCaring />
			) : (
				<div>
					<h3 css={[styles.heading, { marginTop: 10 }]}> Town </h3>{" "}
					<section css={styles.column}>
						<p css={styles.text}>Dog Food Shop</p>
						<br />
						<div>
							<button
								css={styles.display}
								onClick={click ? (e) => handleClick(e) : null}>
								Dry Food
							</button>{" "}
							<span> * {counter1}</span>
						</div>
						<div>
							<button
								css={styles.display}
								onClick={click ? (e) => handleClick(e) : null}>
								{" "}
								Canned Food{" "}
							</button>{" "}
							<span> * {counter1}</span>
						</div>
						<div>
							<button css={styles.display} onClick={(e) => handleClick(e)}>
								{" "}
								Wet Food{" "}
							</button>{" "}
							<span> * {counter1}</span>
						</div>
						<div>
							<button css={styles.display} onClick={(e) => handleClick(e)}>
								{" "}
								Meat{" "}
							</button>{" "}
							<span> * {counter1}</span>{" "}
						</div>
					</section>
					<section css={{ float: "right" }}>
						<p css={styles.text}>Dog Toys Shop </p>
						<br />
						<div>
							<button css={styles.display} onClick={handleClick}>
								Rubber Bone{" "}
							</button>{" "}
							<span> * {counter1}</span>
						</div>
						<div>
							<button css={styles.display} onClick={handleClick}>
								Dog Treats Dispensr
							</button>{" "}
							<span> * {counter1}</span>
						</div>
						<div>
							<button css={styles.display} onClick={handleClick}>
								Tennis Ball
							</button>{" "}
							<span> * {counter1}</span>
						</div>
					</section>
					<footer css={styles.footer}>
						<button
							css={[styles.btn, { marginRight: 40 }]}
							onClick={() => setButton("")}>
							Go To Town
						</button>
						<button
							css={[styles.btn, { marginRight: 40 }]}
							onClick={() => setButton("DogCaring")}>
							Go To Home
						</button>
						<button
							css={[styles.btn, { marginRight: 40 }]}
							onClick={() => setCounter1(50)}>
							Reset App
						</button>
					</footer>
				</div>
			)}
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
