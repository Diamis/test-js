/**

Ёлочка из звезд

Напишите функцию tree, которая возвращает ASCII-ёлочку высотой N символов из «*» и «|». 
Если на вход функции передали не число и не строку, нужно выбросить ошибку TYPE_ERROR. 
Уровень ёлочки строго от трёх. Если уровень меньше трёх, вернуть null.

---
- Ёлочку удобнее всего хранить в матрице (массив массивов). 
  Вам нужно только правильно этот массив сформировать и заполнить.
- Чтобы выбросить ошибку, используйте throw new TypeError(*название переменной с текстом ошибки*).

*/
/**
const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
assert.strictEqual(tree(5), expected);
assert.strictEqual(tree('5'), expected);
*/

type Nullable<T> = T | null;

const TYPE_ERROR = "Something wrong with type of input param";

export const tree = (lvl: number | string): Nullable<string> => {
  // Код
};

export default tree;
