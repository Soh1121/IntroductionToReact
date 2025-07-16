import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const App = () => {
	return (
		<>
			<h1>こんにちは!</h1>
			<p>お元気ですか？</p>
		</>
	);
};

if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
