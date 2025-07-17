export const App = () => {
	const onClickButton = () => alert();
	return (
		<>
			<h1>こんにちは!</h1>
			<p>お元気ですか？</p>
			{console.log("hoge")}
			<button type="button" onClick={onClickButton}>
				ボタン
			</button>
		</>
	);
};
