/**

Алгоритм Евклида

Напишите функцию euclid, которая:
- принимает в виде аргументов любое количество натуральных чисел;
- возвращает их наибольший общий делитель (НОД).

---
- Сначала напишите функцию поиска НОД для двух переданных чисел, затем — для произвольного их количества.

// euclid(6006, 3738735, 51051) --> 3003
// euclid(7) --> 7
// euclid(-421, 0.9923501, 3.1401525235324, -228.148832269) --> -1

/**
 * counts greatest common divisor for n numbers
 * by calling 'euclidForTwo' in cycle for all input params
 * @param {array} ...args contains numbers to check
 * @returns {number} solution or '-1' in case of invalid data
 */
export const euclid = (...args: number[]): number => {
  // ...
  return 0;
};
export default euclid;
