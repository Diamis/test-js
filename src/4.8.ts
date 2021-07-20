/**

take

Напишите функцию, которая создаёт часть массива с n элементами, 
взятыми с начала. Необходимо валидировать входные значения. 
В случае ошибки — выбросьте исключение ValidationError: bad value .

---

В решении задачи вам помогут встроенные методы массива 
как для валидации, так и для получения нужной части массива.
 
*/

class ValidationError extends Error {
  // ...
}

function take<T>(list: T[], num: number = 1): T[] {
  // Код здесь

  return list;
}

export { take };
export default take;
