// let userAge = prompt("Yoshingizni kiriting..")

// if(userAge < 10){
//     console.log("Sutini em detskiy");
// }

// else if(userAge < 16 && userAge > 9){
//     console.log("Yosh bola");
// }

// else if(userAge > 15 && userAge < 20 ){
//     console.log("O'smir");
// }
// else if(userAge > 19 && userAge < 26 ){
//     console.log("Bo'ydoq");
// }
// else if(userAge > 25 && userAge < 36 ){
//     console.log("Katta odam");
// }
// else if(userAge > 35 && userAge < 51 ){
//     console.log("Otaxon");
// }
// else if(userAge > 50 && userAge < 71 ){
//     console.log("Doda");
// }

// else{
//     console.log("umringiz uzoq bo'lsin...");
// }

// --------------1-masala-----------

// let a = prompt("Sonni kiriting")

// if(a >=0 && a <= 9){
//     alert("Bu son bir xonali")
// }

// else if(a >=10 && a <= 99){
//     alert("Bu son 2 xonali")
// }  
// else if(a >=100 && a <= 999){
//     alert("Bu son 3 xonali")
// }  
// else if(a >=1000 && a <=9999){
//     alert("Bu son 4 xonali")
// }  

// else{
//     alert("Bu son maximal darajada katta")
// }



// -----------------2-masala--------------


// let a = prompt("Sonni kiriting")

// if(a % 2 == 0){
//     console.log("Bu son juft son");
//     alert("Bu son juft son")
// }

// else{
//     console.log("Bu son toq son");
//     alert("Bu son toq son")
// }


// --------------------3-masala------------


// let a = prompt("Sonni kiriting")

// if(a >=0 && a <= 9){
//     if(a % 2 == 0){
//         alert("Bu son 1 xonali va juft son")
//     }
//     else{
//         alert("Bu son 1 xonali va toq son")
//     }
// }

// else if(a >=10 && a <= 99){
//     if(a % 2 == 0){
//         alert("Bu son 2 xonali va juft son")
//     }
//     else{
//         alert("Bu on 2 xonali va toq son")
//     }
// }  
// else if(a >= 100 && a <= 999){
//     if(a % 2 == 0){
//         alert("Bu son 3 xonali va juft ")
//     }
//     else{
//         alert("Bu son 3 xonali va toq")
//     }
// }  
// else if(a >=1000 && a <=9999){
//     if(a % 2 == 0){
//         alert("Bu son 4 xonali va juft ")
//     }
//     else{
//         alert("Bu son 4 xonali va toq")
//     }
// }  

// else{
//     alert("Bu son maximal darajada katta shuning uchun aniqlab bo'lmadi")
// }



// -----------------4-masala------------


// let a = prompt("a sonni kiriting")
// let b = prompt("b sonni kiriting")
// let c = prompt("c sonni kiriting")

// if(a > b && a > c){
//     if(b > c){
//         alert(c+b+a)
//     }
//     else{
//         alert(b+c+a)
//     }
// }
// else if(b > a && b > c){
//     if(a > c){
//         alert(c+a+b)
//     }
//     else{
//         alert(a+c+b)
//     }
// }
// else if(c > a && c > b){
//     if(a > b){
//         alert(b+a+c)
//     }
//     else{
//         alert(a+b+c)
//     }
// }

// else{
//     alert("Xatolik bor")
// }


// ---------------5-masala----------------------------


// let a = prompt("3 xonali son kiriting")
// let firstNumb = Math.trunc(a / 100)
// let secondNumb = Math.trunc(a / 10 - firstNumb * 10)
// let thirdNumb = (a % 10)

// if(a >= 100 && a <= 999){
//     if(firstNumb > secondNumb && firstNumb > thirdNumb){
//         if(secondNumb > thirdNumb){
//             alert(thirdNumb)
//         }
//         else{
//             alert(secondNumb)
//         }
//     }
//     else if(secondNumb > firstNumb && secondNumb > thirdNumb){
//         if(firstNumb > thirdNumb){
//             alert(thirdNumb)
//         }
//         else{
//             alert(firstNumb)
//         }
//     }
//     else if(thirdNumb > firstNumb && thirdNumb > secondNumb){
//         if(firstNumb > secondNumb){
//             alert(secondNumb)
//         }
//         else{
//             alert(firstNumb)
//         }
//     }

//     else if(firstNumb == secondNumb && firstNumb > thirdNumb){
//         alert(thirdNumb)
//     }
//     else if(firstNumb == thirdNumb && firstNumb > secondNumb){
//         alert(secondNumb)
//     }
//     else if(secondNumb == thirdNumb && secondNumb > firstNumb ){
//         alert(firstNumb)
//     }
//     else if(firstNumb == secondNumb && secondNumb == thirdNumb){
//         alert(firstNumb)
//     }
    
// }

// else{
//     alert("Ushbu son 3 xonali emas")
// }



// ----------------6-masala-----------------



// let a = prompt("Uch xonali son kiriting")

// let b = Math.trunc(a / 10 - Math.trunc(a / 100) * 10)

// if(a >= 100 && a <= 999){
//     alert(b)
// }

// else{
//     alert("Bu son uch xonali emas")
// }


// ------------ 7-masala------------

// let speed = prompt("Tezlikni kiriting")

// let maxSpeed = 70
// let kmPoint = 5
// let maxPoint = 12
// let point = Math.floor((speed - maxSpeed) / kmPoint)


// if(speed <= maxSpeed && speed >= 0){
//     alert("Hammasi yaxshi")
// }
// else{
//     if(point >= maxPoint){
//         alert("Prava olindi")
//     }
//     else{
//         alert(point)
//     }
// }


// ---------------8-masala------------

// let a = prompt("Tug'ilgan yilingizni kiriting")

// if(a < 2024 && a > 0){
//     alert(2024 - a)
// }

// else{
//     alert("Bu yil hozir mavjud emas")
// }


// --------------9-masala--------

// let a = prompt("Sonni kiriting")

// if(a > 0 && a < 10){
//     if(a % 2 == 0){
//         alert("Bu son 1 xonali, juft va musbat")
//     }
//     else{
//         alert("Bu son 1 xonali, toq va musbat")
//     }
// }

// else if(a > 9 && a < 100){
//     if(a % 2 == 0){
//         alert("Bu son 2 xonali, juft va musbat")
//     }
//     else{
//         alert("Bu son 2 xonali, toq va musbat")
//     }
// }

// else if(a > 99 && a < 1000){
//     if(a % 2 == 0){
//         alert("Bu son 3 xonali, juft va musbat")
//     }
//     else{
//         alert("Bu son 3 xonali, toq va musbat")
//     }
// }


// else{
//     if(a < 0 && a > -10){
//         if(a % 2 == 0){
//             alert("Bu son 1 xonali,juft va manfiy")
//         }
//         else{
//             alert("Bu son 1 xonali,toq va manfiy")
//         }
//     }

//     else if(a < -9 && a > -100){
//         if(a % 2 == 0){
//             alert("Bu son 2 xonali,juft va manfiy")
//         }
//         else{
//             alert("Bu son 2 xonali,toq va manfiy")
//         }
//     }

//     else if(a < -99 && a > -1000){
//         if(a % 2 == 0){
//             alert("Bu son 3 xonali,juft va manfiy")
//         }
//         else{
//             alert("Bu son 3 xonali,toq va manfiy")
//         }
//     }

//     else{
//         alert("Bu son tekshirilmaydi")
//     }
// }

// ------------------------------------10-masala-----------------


// let numb = prompt("Sonni kiriting")


// if(numb % 3 == 0){
//     if(numb % 5 == 0){
//         alert("FizzBuzz")
//     }

//     else{
//         alert("Fizz")
//     }
// }

// else{
//     if(numb % 5 == 0){
//         alert("Buzz")
//     }
//     else{
//         alert("Bu son 3 ga ham 5 ga ham bo'linmaydi")
//     }
// }

// -------------------------Asosiy masala------------


// let money =  prompt("Summani kiriting")

// let ticket = 500
// let hotel = 250
// let travel = 120

// let dollar = 11000.34
// let euro = 12354.03

// let cost = ((ticket + hotel) * dollar + travel * euro )


// if(money >= cost){
//     alert("Oq yo'l")
// }

// else{
//     alert("Alisher ozgina sabr qilishi kerak")
// }