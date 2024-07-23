// عشان تشغل الملف لازم كل مره تكتب (node اسم الملف)
// to use npm you should start with npm init -y (-y => عشان تقوله انا موافق على الشروط اللى بيقعد يديهالك)

// ---------------File System(writeFileSync-readFileSync-appendFileSync)----------------------------------
// const fs = require("fs");
// fs.writeFileSync("note.txt", "Hello World");
// // console.log(fs.readFileSync("note.txt").toString());
// fs.appendFileSync("note.txt", " Mo");
// console.log(fs.readFileSync("note.txt").toString());

// ====================================استدعاء متغيرات من ملفات اخرى======================================

// const x = require("./file");
// // console.log(x.A);
// console.log(x.addition(15, 10));

// ==========================================npm=================================================
const validator = require("validator");
// console.log(validator.isEmail("ali"));
console.log(validator.isEmail("ali@gmail.com"));
