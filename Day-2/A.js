// //Variables
// console.log("===== Variables =====");
// var name="Anivaran";
// var surname="Dubey";
// console.log(name);
// console.log(surname)
// function abes(){
//     console.log("Welcome Students");
//     console.log("Welcome to Node.js");
// }
// abes();
// console.log("Function with Parameter");
// function greet(fname,lname){
//     console.log("Hello",fname,lname);
// }
// greet("Anivaran","Dubey");
// greet("Waseem","jafar");
// console.log("\----Function return----");
// function add(x,y){
//     return x+y;
// }
// var result=add(20,40);
// console.log("Sum of two number:",result);
// console.log("\n----Default Arguments----");
// function fullName(fname="ABES", lname="Engineering College"){
//     return fname+" "+lname;
// }
// console.log(fullName());
// console.log(fullName("Anivaran","Dubey"));
// console.log("\n----Percentage----");

// function totalMarks(math, english, science) {
//     return math + english + science;
// }

// function percentage(total) {
//     return (total / 300) * 100;
// }

// var total = totalMarks(80, 56, 78);

// console.log("Total marks =", total);
// console.log("Percentage =", percentage(total));
// console.log("====String object====");
// let name="Anivaran";
// console.log(name);
// console.log("=====String Methods=====");
// let str="Welcome Anivaran";
// // 1.toUpperCase
// console.log("UpperCase =",str.toUpperCase());
// // 2.toLowerCase
// console.log("LowerCase =",str.toLowerCase());
// // 3.Character
// console.log("Character at index 3 =",str.charAt(3));
// // 4.indexOf()
// console.log("Index of Java =",str.indexOf("Java"));
// // 5.lastIndexOf
// let message = "Javascript is easy. Javascript is powerful";
// console.log("Last index =", message.lastIndexOf("Javascript"));
// // 6.slice()
// console.log("Slice =", str.slice(0,7));
// // 7.split()
// let data = "HTML,CSS , JavaScript";
// let res = data.split(",");
// console.log("Split =", result);
// // 8.replace()
// let text = "I love Java";
// console.log(text.replace("Java","JavaScript"));
// // 9.concat()
// let first = "Anivaran";
// let last ="Dubey";
// console.log(first.concat(" ",last));
// console.log("====Includes====");
// let course = "Java";
// console.log(course.includes("Script"));
// var a = "Anivaran Dubey";
// console.log(a.includes("Aniv"));
// console.log(a.includes("aran"));
// console.log("=====Array Object====");
// let num=[10,20,50,56];
// console.log(num);
// console.log("------Array Method------");
// num.pop();
// console.log(num);
// console.log(num[0]);
// console.log(num[3]);
// let math = [12,34,56];
// console.log("Round =", Math.round(5.6));
//Object with method
// const a={
//     id:101,
//     name:"Anivaran",
//     sal:function(){
//         console.log("My id is ")
//     }
// }
// //Object with multi functions
// let c={
//     age:20,
//     job:"Teacher",
//     details:function(){
//         console.log("My age is:"+this.age);
//         console.log("My job is:"+this.job);
//     },
// }
const a={
    name:"Arush",
    salary:210,
    display:function(){
        console.log("This is my name:"+this.name);
        console.log("This is my salary:"+this.salary);
    },
    incsalary:function(){
        this.salary=this.salary+5000
    }
};
a.display();
a.incsalary();
function show(){
    console.log("My add:"+this.add);
    console.log("My city:"+this.city);
}
e={ add:"Abes",
    city:"Ghaziabad",
    show:show
};
d={
    add:"Crossing",
    city:"Noida",
    show:show
};
e.show();
d.show();
function college(){
    console.log("Name : "+this.name);
    console.log("Roll : "+this.roll);
    console.log("Branch : "+this.branch);
    console.log("Section : "+this.sec);
}
dep={
    name: "Anivaran Dubey",
    roll : 27,
    college:college
};
clas={
    branch:"AIML",
    sec:"A",
    college:college
};
dep.college();
clas.college();

