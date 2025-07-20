import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
	console.log("--APP--");
	const [num, setNum] = useState(0);
	const [isShowFace, setIsShowFace] = useState(false);
	const onClickButton = () => {
		setNum((prev) => prev + 1);
	};
	const onClickToggle = () => {
		setIsShowFace(!isShowFace);
	};

	if (num > 0) {
		if (num % 3 === 0) {
			isShowFace || setIsShowFace(true);
		} else {
			isShowFace && setIsShowFace(false);
		}
	}

	return (
		<>
			<h1 style={{ color: "red" }}>こんにちは!</h1>
			<ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
			<ColorfulMessage color="green">元気です！</ColorfulMessage>
			<button type="button" onClick={onClickButton}>
				カウントアップ
			</button>
			<p>{num}</p>
			<button type="button" onClick={onClickToggle}>
				on/off
			</button>
			{isShowFace && <p>あほ</p>}
		</>
	);
};
