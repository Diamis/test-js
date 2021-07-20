import { Queue } from "../src/3.12";

const createNode = (value, prev = null, next = null) => ({ value, next, prev });

describe("3.11", () => {
  test("check the empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("check not empty queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test("check size after adding to queue", () => {
    let size = 0;
    const queue = new Queue();
    size = queue.enqueue(1);
    expect(size).toBe(1);
    size = queue.enqueue(2);
    expect(size).toBe(2);
  });

  test("check the adding to the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const node = createNode(1);
    node.next = createNode(2, node);
    expect(queue.head).toEqual(node);
  });

  test("check size after remove to queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.size).toBe(2);
  });

  test("error checking when trying to delete an empty queue", () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow(Error);
  });
});
