/**

Полифил для bind

Представьте, что в браузере у функций нет метода bind. 
Реализуйте его поведение на основе других методов. 
Желаемый результат описан в комментариях к коду.

---

- Чтобы решить задачу, вспомните, 
  как вызвать функцию в контексте другого объекта. 

*/

/**
var F = function() {
  console.log('foo is', this.foo);
}
var F1 = F.bind({ foo: 'bar' })

F()               // foo is undefined
F1()              // foo is bar

var f = new F()   // foo is undefined
var f1 = new F1() // foo is bar

console.log(f instanceof F)    // true
console.log(f1 instanceof F)   // false
*/
// не удаляйте следующую строчку, без нее проект не соберётся
// eslint-disable-next-line
Function.prototype.bind = function (ctx: unknown) {
  // ...
};

export default Function.prototype.bind;
