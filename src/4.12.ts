/**
RLE

Дана строка, состоящая из букв A-Z: 
«AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB» Напишите функцию rle(), 
которая на выходе даст строку вида:
- «A4B3C2XYZD4E3F3A6B28»,
- Сгенерирует любую ошибку, если на вход пришла невалидная строка.
Пояснения:
- Если символ встречается 1 раз, он остаётся без изменений,
- Если символ повторяется более 1 раза, к нему добавляется количество повторений.

---

- Проверить строку на валидность можно с помощью регулярного выражения.
- Не забудьте обработать последнюю группу символов.

*/

function rle(str) {
  // ваш код
}

export { rle };
export default rle;
