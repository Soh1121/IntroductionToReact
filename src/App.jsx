import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
	const onClickButton = () => alert();
	return (
		<>
			<h1 style={{ color: "red" }}>こんにちは!</h1>
			<ColorfulMessage color="blue" message="お元気ですか？" />
			<ColorfulMessage color="green" message="元気です！" />
			<button type="button" onClick={onClickButton}>
				ボタン
			</button>
		</>
	);
};
