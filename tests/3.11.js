import { Stack } from "../src/3.11";

const createNode = (value, prev = null, next = null) => ({ value, next, prev });

describe("3.11", () => {
  test("check the empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test("check not empty stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("check size after adding to stack", () => {
    let size = 0;
    const stack = new Stack();
    size = stack.push(1);
    expect(size).toBe(1);
    size = stack.push(2);
    expect(size).toBe(2);
  });

  test("check the adding to the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const node = createNode(1);
    node.next = createNode(2, node);
    expect(stack.head).toEqual(node);
  });

  test("check size after remove to stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.size).toBe(2);
  });

  test("error checking when trying to delete an empty stack", () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(Error);
  });

  test("check the remove to the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const value = stack.pop();
    expect(value).toBe(2);
  });
});
