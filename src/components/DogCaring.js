/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { AppContext } from "../App";
import Town from "./Town";

const DogCaring = () => {
	const [btn, setBtn] = useState("");
	const { setCounter1, counter2, setCounter2 } = React.useContext(AppContext);
	const handleReset = () => {
		setCounter1(50);
		setCounter2(0);
	};
	// const [redirect, setRedirect] = useState(false);
	return (
		<>
			{btn === "Town" ? (
				<Town />
			) : (
				<div>
					<h3 css={[styles.heading, { marginTop: 10 }]}> Home </h3>
					<div css={styles.col_left}>
						<table css={styles.table}>
							<tr>
								<th css={styles.th}>Food</th>
							</tr>
							<tr>
								<td>Dry Food: {counter2}</td>
							</tr>
							<tr>
								<td>Canned Food: {counter2}</td>
							</tr>
							<tr>
								<td>Wet Food: {counter2}</td>
							</tr>
							<tr>
								<td>Meat: {counter2}</td>
							</tr>
						</table>
					</div>
					<div css={styles.col_right}>
						<table css={styles.table}>
							<tr>
								<th css={styles.th}>Toys</th>
							</tr>
							<tr>
								<td>Rubber Bone: {counter2}</td>
							</tr>
							<tr>
								<td>Dog Treats Dispenser: {counter2}</td>
							</tr>
							<tr>
								<td>Tennis Ball: {counter2}</td>
							</tr>
						</table>
					</div>
					<footer css={styles.footer}>
						<button
							css={[styles.btn, { marginRight: 40 }]}
							onClick={() => setBtn("Town")}>
							Go To Town
						</button>
						<button
							css={[styles.btn, { marginRight: 40 }]}
							onClick={() => setBtn("")}>
							Go To Home
						</button>
						<button
							css={[styles.btn, { marginRight: 40 }]}
							onClick={handleReset}>
							Reset App
						</button>
					</footer>
				</div>
			)}
		</>
	);
};

export default DogCaring;
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
