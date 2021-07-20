/**
Разбиение массива

Реализуйте разбиение массива относительно опорного элемента. Сделайте опорным последний элемент массива.
----
Помните, нужно разбить не весь массив arr, а только его часть от start до end. 
Учитывайте это при выборе опорного элемента и построении цикла.

Чтобы переставлять местами значения в массиве, примените функцию swap(arr, i, j).
*/

function partition(arr, start = 0, end = arr.length - 1) {
  // const pivotValue = ...;
  
	// let pivotIndex = ...;

  // for (...) {
  //   if (...) {
	// 		...
  //   }
  // }

  // swap(...);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

export { partition }