const email ="alstkdwh24@naver.com"
// undefined
email.includes("@")
// true
email.anc
// undefined
email.anchor
ƒ anchor() { [native code] }
emil.split("@")
// VM441:1 Uncaught ReferenceError: emil is not defined
    // at <anonymous>:1:1
// (anonymous) @ VM441:1
email.sp
// undefined
email.spilt("@")
// VM534:1 Uncaught TypeError: email.spilt is not a function
    // at <anonymous>:1:7
// (anonymous) @ VM534:1
email.split("@")
// (2) ['alstkdwh24', 'naver.com']
email.split("@")[0]
// 'alstkdwh24'
let userMail=email.split("@")[0]
// undefined
usermail
VM797:1 Uncaught ReferenceError: usermail is not defined
    at <anonymous>:1:1
(anonymous) @ VM797:1
userMail
// 'alstkdwh24'
let company=email.split("@")[1]
// undefined
let maskingMail=[]
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail
// (3) ['a', 'l', 's']
maskingMail.push("*")
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail
// (6) ['a', 'l', 's', '*', '*', '*']
maskingMail.join("-")
// 'a-l-s-*-*-*'
maskingMail.join("")+ "@"+company
// 'als***@naver.com'
let result=maskingMail.join("")+ "@"+company
// undefined
result
// 'als***@naver.com'



