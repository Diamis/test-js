/**

Сложение

Напишите функцию, которая выполняет сложение посредством каррирования.
---

- Каррирование реализуется путём возврата функции в качестве 
  результата — замыкания придут на помощь.
- Придумайте условие, при истине которого возвращается результат суммы.

*/

type StepFn = (val: number) => number | StepFn;

export function add(val: number): number | StepFn {
  // code
}

export default add;