
//Bài tập in ra những giá trị khác nhau trong mảng

//Test 1 in số lượng phần tử khác nhau
// đề bài là: đếm số lượng giá trị khác nhau trong 1 mảng cho trước.
// Ví dụ mảng A[] = {1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3}
// kết quả in ra màng hình
// số lượng phần tử trong mảng khác nhau là: 6

// function uniqueValues(arr) {
//   return arr.filter((value, index, self) => self.indexOf(value) === index);               //self.indexOf(value): là phương thức sẽ lấy giá trị trong mảng array
// }                                                                                         //trong bài này phương thức được sử dụng để lấy những giá trị khác nhau
//                                                                                           //arr.indexOf(value): là phương thức lấy giá trị đầu tiên
// const array = [1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3];                                          //Nó sẽ luôn lấy giá trị đầu tiên nếu trong mảng có giá trị giống nhau (indexOf sẽ ko nhớ vị trí giá trị nó sẽ luôn trả về giá trị đầu tiên)
// const uniqueArray = uniqueValues(array);
// console.log(uniqueArray.length);

// Test 2 Tìm giá trị trùng nhau
// liệt kê
// các phần tử trùng nhau
// trong 1 mảng cho trước
// [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3]

// function getDuplicateValues(arr) {
//   return arr.filter((value, index) => arr.indexOf(value) !== arr.lastIndexOf(value));         // arr.indexOf(value): là trả về giá trị index đầu mảng
// }                                                                                             // arr.lastIndexOf(value): là trả về giá trị index cuối mảng
//                                                                                               // 2 phương thức sẽ so sánh với nhau nếu 2 giá trị khác nhau sẽ trả về kết quả và nếu giống nhau sẽ loại bỏ
// const array = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const duplicates = getDuplicateValues(array);
// console.log(duplicates);


//Test 3 Tìm giá trị khác nhau
// liệt kê
// các phần tử khác nhau
// trong 1 mảng cho trước
// [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3]

// function findUniqueElements(arr) {
//   return arr.filter((value, index, self) => self.indexOf(value) === index);                   //Bài này giống bài 1 khác mỗi in ra console.log()
// }

// const myArray = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const uniqueElements = findUniqueElements(myArray);
// console.log(uniqueElements);

//Test 4 đếm số lần xuất hiện của các phần tử
// liệt kê
// đếm số lần xuất hiện của các phần tử
// trong 1 mảng cho trước
// [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3]

// function countElements(arr) {
//   const counts = [];
//   const uniqueValues = arr.filter((value, index, self) => self.indexOf(value) === index);               //Đoạn code này sẽ lấy giá trị duy nhất trong mảng

//   uniqueValues.forEach((value) => {
//     const count = arr.filter((v) => v === value).length;                                                //Đoạn này sẽ đếm số lần xuất hiện của các phần tử trong mảng
//     counts.push([value, count]);                                                                        //uniqueValues.forEach((value): sử dụng phương thức forEach của mảng uniqueValues để duyệt qua từng phần tử trong mảng đó.
//   });                                                                                                   //arr.filter((v) => v === value).length: sẽ đếm số lần xuất hiện của value trong mảng gốc arr.
//                                                                                                         //arr.filter((v) => v === value) sẽ lọc ra tất cả các phần tử trong arr bằng với value.
//   return counts;                                                                                        //Sau đó, .length sẽ lấy độ dài của mảng kết quả, tương đương với số lần value xuất hiện trong arr.
// }                                                                                                       //Giá trị này được gán cho biến count.

// const myArray = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const countResult = countElements(myArray);

// countResult.forEach(([value, count]) => {
//   console.log(`Phần tử ${value} xuất hiện ${count} lần`);
// });

//Test 5
//Một công ty quyết định sản xuất lại Ti vi để tung ra thị trường và màn hình Ti vi có chính xác n Pixel
//Nhiệm vụ của bạn là xác định kích thước của màn hình Ti vi sao cho chiều rộng và chiều dài chênh lệch nhau ít nhất
//Input: 8, 64, 5
//Output: 2 4, 8 8, 1 5

// function calcPixelDensity(input) {
//     const inputArr = input.split('\n');
//     const outputArr = [];
  
//     for (let i = 0; i < inputArr.length; i++) {
//       const [inputValue, outputValue] = inputArr[i].trim().split(' '); // Thêm .trim() để loại bỏ khoảng trắng thừa
//       if (inputValue && outputValue) { // Kiểm tra nếu cả inputValue và outputValue đều có giá trị
//         const pixelDensity = parseFloat(outputValue) / parseFloat(inputValue);
//         outputArr.push(pixelDensity.toFixed(2));
//       }
//     }
  
//     return outputArr.join('\n');
//   }
  
//   // Sử dụng hàm
//   const input = `8 2.4
//   64 8.8 
//   5 15`;
//   const output = calcPixelDensity(input);
//   console.log(output);