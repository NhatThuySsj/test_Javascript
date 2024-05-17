
//Bai 1

// document.write("Toi moi 10 tuoi. + <br>");
// document.write("Toi con qua tre de choi game.")

//Bai 2

// for (let i = 0; i < 5; i++) {
//     document.write('*****<br>')
// }

//Bai 3

// var x = 10;
// var y = 15;
// var z = 12.6;

// document.write('x = ' + x +  '<br>' + 'y = ' + y + '<br>' + 'z = ' + z);

//Bai 4

// var name = prompt("Nhap ten cua ban")

// document.write(name)

// const a = parseInt(prompt("Nhap so thu nhat"));
// const b = parseInt(prompt("Nhap so thu hai"));
// const c = parseInt(prompt("Nhap so thu ba"));

// // Tạo mảng chứa các số đã nhập
// var mang = [a, b, c];

// // Sắp xếp mảng theo thứ tự tăng dần và giảm dần
// var tangDan = mang.slice().sort((a, b) => a - b);
// var giamDan = mang.slice().sort((a, b) => b - a);

// // Hiển thị kết quả
// document.write("Số tăng dần là: " + tangDan + "<br>");
// document.write("Số giảm dần là: " + giamDan + "<br>");

// document.write("Bạn vừa nhập giá trị là: " + a, b, c);

// function text_message() {

//     var myString = '- ';
//     for (var param of arguments) {
//         myString += `${param} -`
//     }
//     console.log(myString);
// }

// text_message('NhatThuy', ' Hello world');

// var myInfo = {
//     name: 'NhatThuy',
//     age: 21,
//     address: 'Nghi Son, Thanh Hoa'
// }

// myInfo['my - Email'] = 'nhatthuyssj@email.com'

// console.log(myInfo);

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.avatar = avatar,

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// User.prototype.className = 'SS'
// User.prototype.getClassName = function() {
//     return this.className
// }

// var author = new User('Nhật', 'Thủy', 'avatar');
// var user = new User('Ẩn', 'Danh', 'avatar');

// console.log(author.className);
// console.log(user.getClassName());

// var date = new Date();

// console.log(date)

// var myInfo = {
//     name: 'aa',
//     age: 12
// }

// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }

// var myArray = [
//     'SS',
//     'AA',
//     'BB'
// ]

// var i = 0;

// var Array = myArray.length

// while (i < Array) {
//     console.log(myArray[i])
//     i++;
// }

// var i = 1;

// while (i < 10) {
//     console.log(i)
//     i++;
// }

// var i = 0;
// var isSuccess = false;

// do {
//     i++;
//     console.log('Lan thu ' + i + ' da nhap sai');

//     if (true) {
//         isSuccess = true;
//     }

// } while (!isSuccess && i < 3);

// for (var i = 0; i < 10; i++) {

//     if (i % 2 !== 0) {
//         continue;
//     }

//     console.log(i);

//     if (i >= 5) {
//         break;
//     }
// }

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }

// for (var i = 0; i > 100; i -= 5) {
//     console.log(i)
// }

// VD

// var course = [
//   {
//     id: 1,
//     name: 'SS',
//     coin: 100
//   },
//   {
//     id: 2,
//     name: 'AA',
//     coin: 160
//   },
//   {
//     id: 3,
//     name: 'EE',
//     coin: 130
//   },
//   {
//     id: 4,
//     name: 'DD',
//     coin: 400
//   },
//   {
//     id: 5,
//     name: 'QQ',
//     coin: 120
//   },
// ]


// var totalCoin = course.reduce(function coinHeadler(total, course) {
//   return total + course.coin
// }, 0);

// console.log(totalCoin)