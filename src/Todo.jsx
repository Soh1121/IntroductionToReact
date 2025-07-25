import { useState } from "react";
import "./styles.css";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";

export const Todo = () => {
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setIncompleteTodos] = useState([
		"TODOです1",
		"TODOです2",
	]);
	const [completeTodos, setCompleteTodos] = useState([
		"TODOでした1",
		"TODOでした2",
	]);

	const onChangeText = (event) => setTodoText(event.target.value);

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newIncompleteTodos = [...incompleteTodos];
		newIncompleteTodos.splice(index, 1);

		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newIncompleteTodos);
	};

	const onClickBack = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);

		const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		setCompleteTodos(newCompleteTodos);
	};

	return (
		<>
			<InputTodo
				todoText={todoText}
				onChange={onChangeText}
				onClick={onClickAdd}
			/>
			{incompleteTodos.length >= 5 && (
				<p style={{ color: "red" }}>
					登録できるTODOは5個までだよ〜。消化しろ〜。
				</p>
			)}
			<IncompleteTodos
				todos={incompleteTodos}
				onClickComplete={onClickComplete}
				onClickDelete={onClickDelete}
			/>

			<CompleteTodos todos={completeTodos} onClick={onClickBack} />
		</>
	);
};
