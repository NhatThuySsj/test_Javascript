
//Bài tập in ra những giá trị khác nhau trong mảng

//Test 1 in số lượng phần tử khác

// function countDistinctValues(arr) {
//     let distinctCount = 0;
//     const seen = new Set();
  
//     for (let i = 0; i < arr.length; i++) {
//       if (!seen.has(arr[i])) {
//         seen.add(arr[i]);
//         distinctCount++;
//       }
//     }
  
//     return distinctCount;
//   }
  
//   // Ví dụ sử dụng
//   const arr = [1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3];
//   const distinctValues = countDistinctValues(arr);
//   console.log(distinctValues); // Output: 6

// Test 2 Tìm giá trị trùng nhau

// function findDuplicates(arr) {
//   const duplicates = [];
//   const countObj = {};

//   // Đếm số lần xuất hiện của mỗi phần tử
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     countObj[num] = (countObj[num] || 0) + 1;
//   }

//   // Lấy các phần tử có số lần xuất hiện nhiều hơn 1
//   for (const num in countObj) {
//     if (countObj[num] > 1) {
//       duplicates.push(num);
//     }
//   }

//   return duplicates;
// }

// const myArray = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const duplicateElements = findDuplicates(myArray);
// console.log(duplicateElements); // Output: ['1', '3', '5', '6', '4', '7', '8']

//Test 3 Tìm giá trị khác nhau

// function findUniqueElements(arr) {
//   const uniqueElements = new Set(arr);
//   return Array.from(uniqueElements);
// }

// const myArray = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const uniqueElements = findUniqueElements(myArray);
// console.log(uniqueElements); // Output: [1, 3, 5, 6, 4, 7, 8, 2, 9]

//Test 4 đếm số lần xuất hiện của các phần tử

// function countElements(arr) {
//   const countObj = {};

//   // Đếm số lần xuất hiện của mỗi phần tử
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     countObj[num] = (countObj[num] || 0) + 1;
//   }

//   // Liệt kê số lần xuất hiện của các phần tử
//   const result = [];
//   for (const num in countObj) {
//     result.push(`Phần tử ${num} xuất hiện ${countObj[num]} lần`);
//   }

//   return result;
// }

// const myArray = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const countResult = countElements(myArray);
// console.log(countResult);