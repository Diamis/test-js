import { hash, HashTable } from "../src/4.10";

describe("4.9", () => {
  test("check hash", () => {
    expect(hash("Bill", 7)).toEqual(3);
    expect(hash("Sara", 7)).toEqual(6);
    expect(hash("John", 7)).toEqual(5);
    expect(hash("Jane", 7)).toEqual(1);
    expect(hash("Bob", 7)).toEqual(1);
  });

  test("check hashTable add", () => {
    const hashTable = new HashTable(7);
    hashTable.set("Bill", 100);
    hashTable.set("Sara", 200);
    hashTable.set("John", 300);
    hashTable.set("Jane", 400);
    hashTable.set("Bob", 500);

    const res = [
      undefined,
      [
        { key: "Jane", value: 400 },
        { key: "Bob", value: 500 },
      ],
      undefined,
      [{ key: "Bill", value: 100 }],
      undefined,
      [{ key: "John", value: 300 }],
      [{ key: "Sara", value: 200 }],
    ];

    expect(hashTable.memory).toEqual(res);
  });
});
