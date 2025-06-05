/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";

// // constは再宣言不可
// const val3 = "const変数を再宣言";

// const で定義したオブジェクトはプロパティの変更が可能
const val4 = {
	name: "じゃけぇ",
	age: 31,
};
val4.name = "jak";
val4.address = "Hiroshima";
console.log(val4);
