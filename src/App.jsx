import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
	const [num, setNum] = useState(0);
	const [isShowFace, setIsShowFace] = useState(true);
	const onClickButton = () => {
		setNum((prev) => prev + 1);
		setNum((prev) => prev + 1);
	};
	return (
		<>
			<h1 style={{ color: "red" }}>こんにちは!</h1>
			<ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
			<ColorfulMessage color="green">元気です！</ColorfulMessage>
			<button type="button" onClick={onClickButton}>
				カウントアップ
			</button>
			<p>{num}</p>
			<button type="button">on/off</button>
			{isShowFace && <p>サンプル</p>}
		</>
	);
};
