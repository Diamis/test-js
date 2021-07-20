/**

omit

Реализуйте функцию, которая исключает из объекта указанные свойства.
---

Примените чистую функцию — ту, 
которая не вносит изменений в переданный объект.
 
*/

// omit({ name: 'Benjy', age: 18 }, [ 'name' ]); // => { age: 18 }

// omit(obj: Object, fields: string[]): Object
function omit<T extends object>(obj: T, fields: (keyof T)[]) {}

export { omit };
export default omit;
