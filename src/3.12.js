/**
Реализация очереди

Реализуйте очередь, применяя связный список для хранения элементов.
----

Обратите внимание, что операция добавления элемента такая же, как у стека.

Поддерживайте поля this.size, this.head и this.tail в актуальном состоянии.

Ссылки на следующую и предыдущую ноду next и prev могут быть null. 
Проверяйте это при работе с нодами.
*/

export class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
    const node = { value, next: null, prev: null };

    this.size += 1;
    return this.size;
  }

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue empty");
    }
  }

  // Возвращает элемент в начале очереди.
  peek() {
    return this.head;
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    return !this.size;
  }
}
