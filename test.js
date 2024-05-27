
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

//Bài tập in ra những giá trị khác nhau trong mảng

//Test 1 in số lượng phần tử khác nhau
// đề bài là: đếm số lượng giá trị khác nhau trong 1 mảng cho trước.
// Ví dụ mảng A[] = {1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3}
// kết quả in ra màng hình
// số lượng phần tử trong mảng khác nhau là: 6

// const arr = [1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3];
// const uniqueValues = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;                                                               //Vòng lặp đầu tiên sẽ cho giá trị là false để kiểm tra arr[i] có trong mảng uniqueValues hay chưa
  
//     for (let j = 0; j < uniqueValues.length; j++) {                                        //Vòng lặp lồng sẽ kiểm tra xem nếu giá trị arr[i] tồn tại trong mảng uniqueValue thì sẽ là trả về true
//       if (arr[i] === uniqueValues[j]) {                                                    //và thoát khỏi vòng lặp bằng break và giá trị đó sẽ không được thêm vào mảng uniqueValues
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {                                                                    //Lệnh if sẽ thực thi nếu mà vòng lặp lồng trả về false phủ đinh !isDuplicate sẽ trả về true
//       uniqueValues.push(arr[i]);                                                           //Phương thức push sẽ thêm giá trị vào mảng uniqueValues
//       console.log(arr[i]);
//     }
//   }

//Cách làm 2

// function countDistinctElements(arr) {
//     let distinctCount = 0;
//     let uniqueElements = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (!uniqueElements.includes(arr[i])) {
//         uniqueElements.push(arr[i]);
//         distinctCount++;
//       }
//     }
  
//     return distinctCount;
//   }

// const Array = [1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3];
// const distinctCount = countDistinctElements(Array);
// console.log(distinctCount)

// Test 2 Tìm giá trị trùng nhau
// liệt kê
// các phần tử trùng nhau
// trong 1 mảng cho trước
// [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3]

// const arr = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const duplicates = [];

// // Vòng lặp bên ngoài để duyệt qua từng phần tử của mảng
// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;                                                                            //Cho isDuplicate = false để theo dõi phần tử hiện tại có phải là phần tử trùng lặp hay không?
  
//   // Vòng lặp bên trong để kiểm tra xem phần tử hiện tại đã xuất hiện trước đó hay chưa
//   for (let j = 0; j < i; j++) {                                                                       //Với điều kiện j < i có nghĩa là arr[i] lấy chỉ mục giá trị lớn nhất trong mảng để so sánh với arr[j] lấy
//     if (arr[i] === arr[j]) {                                                                          //chỉ mục giá trị nhỏ nhất. Và nếu 2 chỉ mục này có những giá trị bằng nhau thì sẽ trả về là true và thoát
//       isDuplicate = true;                                                                             //khỏi vòng lặp. Nếu có chỉ mục giá trị nào chỉ xuất hiện 1 lần thì sẽ trả về false và không đưa giá trị đó
//       break;                                                                                          //vào mảng duplicate
//     }
//   }
  
//   // Nếu phần tử đã xuất hiện trước đó và chưa được thêm vào mảng duplicates
//   if (isDuplicate && !duplicates.includes(arr[i])) {                                                  //Nếu isDuplicate = true thì sẽ sử dụng phương thức push để thêm arr[i] vào mảng
//     duplicates.push(arr[i]);
//   }
// }

// console.log(duplicates);

//Cách dùng 2

// const arr = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const duplicates = [];

// for (let i = 0; i < arr.length; i++) {                                                                   //Duyệt từng giá trị trong mảng arr
//   let count = 0;                                                                                         //Đặt giá trị bằng 0 để đếm giá trị trùng lặp sau mỗi lần thực thi
//   for (let j = 0; j < arr.length; j++) {                                                                 //Duyệt từng giá trị trong mảng arr
//     if (arr[i] === arr[j] && i !== j) {                                                                  //Điều kiện arr[i] === arr[j] && i !== j nếu 2 điều kiện hợp lệ (arr[i] sẽ lấy chỉ mục giá trị hiện tại trong vong lặp bên ngoài và arr[j] sẽ lấy chỉ mục giá trị vòng lặp bên trong. Có nghĩa là arr[j] sẽ luôn lấy chỉ mục giá trị bé hơn 1 để kiểm tra điều kiện)
//       count++;                                                                                           //Thì count sẽ tăng thêm 1
//     }
//   }
//   if (count > 0 && !duplicates.includes(arr[i])) {                                                        //Kiểm tra điều kiện count > 0 và arr[i] không có trong duplicate thì sẽ dùng phương thức push() để thêm                                              
//     duplicates.push(arr[i]);                                                                              //giá trị arr[i] vào duplicate
//   }
// }

// console.log(duplicates); // Output: [1, 3, 5, 6, 8]

//Cách 3

// const arr = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const duplicates = [];

// for (let i = 0; i < arr.length; i++) {                                                                      //Vòng lặp này sẽ duyệt mảng arr
//   let found = false;                                                                                        //Khai báo biến found gán giá trị là false để kiểm tra giá trị arr[i] có phải là giá trị trùng lăp hay không
//   for (let j = 0; j < i; j++) {                                                                             //Với vòng lặp for này sẽ duyệt giá trị trong vòng lặp trong
//     if (arr[i] === arr[j]) {                                                                                //if có điều kiện arr[i] === arr[j] có nghĩa là arr[i] sẽ lấy giá trị ngoài vòng lặp và arr[j] lấy giá trị trong vòng lặp
//       found = true;                                                                                         //Nếu điều kiện trên thỏa mãn thì found sẽ trả về là true và thoát khỏi vòng lặp là break;
//       break;
//     }
//   }

//   if (found) {                                                                                              //Nếu found trả về là true thì câu lệnh sẽ được thực thi nhiệm vụ tiếp theo
//     let isDuplicate = false;                                                                                //Khai báo biến isDuplicate = false kiểm tra xem arr[i] có trong mảng duplicate chưa
//     for (let k = 0; k < duplicates.length; k++) {                                                           //Duyệt giá trị trong mảng duplicates
//       if (arr[i] === duplicates[k]) {                                                                       //Câu lệnh if (arr[i] === duplicates[k]) nếu hợp lệ sẽ trả về là true và thoát khỏi vòng lặp break;
//         isDuplicate = true;                                                                                 
//         break;
//       }
//     }
//     if(!isDuplicate) {                                                                                      //Kiểm tra xem nếu phần !isDuplicate = true thì sẽ thêm giá trị vào mảng và nếu isDuplicate = true; thì sẽ ngừng lại ko thực thi nữa.
//       duplicates.push(arr[i])
//     }
//   }
// }

// console.log(duplicates); // Output: [1, 3, 5, 6, 8]

//Test 3 đếm số lần xuất hiện của các phần tử
// liệt kê
// đếm số lần xuất hiện của các phần tử
// trong 1 mảng cho trước
// [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3]

// const arr = [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3];
// const duplicates = [];
// const counts = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < duplicates.length; j++) {
//         if (arr[i] === duplicates[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         duplicates.push(arr[i])
//         counts.push(1)
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < duplicates.length; j++) {
//       if (arr[i] === duplicates[j]) {
//         counts[j]++;
//       }
//     }
//   }

// for (let i = 0; i < duplicates.length; i++) {
//     console.log(`Phần tử ${duplicates[i]} xuất hiện ${counts[i]} lần`);
// }

//Cách làm 2

// const myArray = [1, 1, 3, 5, 6, 3, 4, 5, 7, 8, 2, 3, 5, 6, 7, 8, 9, 6, 5, 4, 3];
// const frequencyArray = [];

// // Khởi tạo mảng frequencyArray với giá trị 0 cho tất cả các phần tử
// for (let i = 0; i < 10; i++) {                                                                  //Điều kiện i < 10, vậy thì biến frequencyArray[i] = 0 sẽ được duyệt vào mảng frequencyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   frequencyArray[i] = 0;
// }

// // Đếm số lần xuất hiện của các phần tử
// for (let i = 0; i < myArray.length; i++) {                                                      //Duyệt mảng myArray
//   const element = myArray[i];                                                                   //Gán giá trị myArray[i] vào element => element = myArray[0] = 1
//   frequencyArray[element]++;                                                                    //frequencyArray[element]++ => frequencyArray[1]++ sẽ cộng vào mảng frequencyArray để đếm số lần xuất hiện của mỗi phần tử
// }

// // Hiển thị kết quả
// for (let i = 0; i < frequencyArray.length; i++) {                                               //Duyệt mảng frequencyArray
//   if (frequencyArray[i] > 0) {                                                                  //Điều kiện nếu trong mảng frequencyArray lớn hơn 0 thì sẽ thỏa mãn điều kiện và in ra console.log
//     console.log(`Phần tử ${i} xuất hiện ${frequencyArray[i]} lần`);
//   }
// }

//Test 1 in số lượng phần tử khác nhau
// đề bài là: đếm số lượng giá trị khác nhau trong 1 mảng cho trước.
// Ví dụ mảng A[] = {1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3}
// kết quả in ra màng hình
// số lượng phần tử trong mảng khác nhau là: 6

// const arr = [1, 3, 4, 5, 5, 2, 4, 8, 1, 2, 3];
// const listArr = [];

// for (let i = 0; i < arr.length; i++ ) {
//     let isDuplicate = false;

//     for (let j = 0; j < listArr.length; j++) {
//         if (arr[i] === arr[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         listArr.push(arr[i]);
//         console.log(arr[i])
//     }
// }

// Test 2 Tìm giá trị trùng nhau
// liệt kê
// các phần tử trùng nhau
// trong 1 mảng cho trước
// [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3]

// const arr = [1,1,3,5,6,3,4,5,7,8,2,3,5,6,7,8,9,6,5,4,3];
// const duplicate = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < i; j++) {
//         if (arr[i] === arr[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (isDuplicate && !duplicate.includes(arr[i])) {
//         duplicate.push(arr[i])
//         console.log(arr[i])
//     }
// }


//Test 1

// Một công ty quyết định sản xuất lại Ti vi để tung ra thị trường và màn hình Ti vi có chính xác n pixel.
// Nhiệm vụ của bạn là xác định kích thước của màn hình Ti vi sao cho chiều rộng và chiều dài chênh lệch nhau ít nhất.

// Input Output
// 8       2 4
// 64      8 8
// 5       1 5

// function findDimensions(n) {                                                            //Hàm findDimensions(n) chứa tham số n và lưu trữ giá trị trả về của return và lưu về output
//     let a = 1;                                                                          //Gán giá trị a và b bằng 1 và n sao cho a * b = n
//     let b = n;
    
//     for (let i = 1; i * i <= n; i++) {                                                  //Điều kiện: i = 1; i * i <= n (tương đương với i <= sqrt(n) căn bậc 2 của n); i++
//         if (n % i === 0) {                                                              //Nếu n % i === 0 thì sẽ thực thi câu lệnh dưới
//             let j = n / i;                                                              //j = n / i thì j sẽ có giá trị là kết quả của n / i
            
//             if (Math.abs(i - j) < Math.abs(a - b)) {                                    //Nếu điều kiện trong này thỏa mãn (abs(i - j) < abs(a - b) và (i - j) là hiệu bé nhất) thì a và b sẽ được gán giá trị i và j
//                 a = i;
//                 b = j;
//             }
//         }
//     }
    
//     return [a, b];                                                                      //return [a, b] trả về cho hàm findDimensions(n) để lưu trữ output
// }

// let inputs = [8, 64, 5];
// for (let i = 0; i < inputs.length; i++) {
//     let output = findDimensions(inputs[i]);                                             //hàm findDimensions được gọi với đầu vào là inputs[i]. Ở lần lặp đầu tiên, i bằng 0 nên inputs[0] là 8. Kết quả trả về của hàm findDimensions(8) sẽ được gán cho biến output.
//     console.log("Input:", inputs[i], "Output:", output);
// }

//Test 2

// const a = [10, 17, 22, 19, 17, 13, 20, 14, 27, 29, 12];
// const b = [5, 3, 5, 5, 5, 4, 2, 2, 1, 2, 3];
// const t = 5;
// const output = [];

// for (let day = 0; day <= t; day++) {
//   let totalWater = 0;
//   for (let i = 0; i < a.length; i++) {
//     let water = a[i];
//     for (let j = 0; j < day; j++) {
//       water -= b[i];
//       if (water < 0) {
//         water = 0;
//         break;
//       }
//     }
//     totalWater += water;
//   }
//   output.push(totalWater);
// }

// console.log(output);