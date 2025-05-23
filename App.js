// let a = 12;
// let b= 2
// function abcd(){
//     return (a*b);
// }
//Basic Types
// Primitive types (number, string, boolean)
// Arrays []
//Tuples
//Enums
//Any, Unknown, Void, Null, Undefined, Never
// primitives and reference
// reference are data inside this {} () []
// any changes made inside the bracket also makes the change in the parent element
//Tuples
//let arr: [string, number] = ["bihshal", 23];
//let arr2:[number, string] = [12,"bishal"];
//enumerations = same as object with special powers
// enum UserRoles {
//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPER_ADMIN = "super_admin"
// }
// UserRoles.ADMIN
// Fetch weather data from API
// let a;  
// a=12;
// a= "bishal"
// not defined or assigned value will be ANY form (typescript off)
// let a:unknown;
// a=78;
// a="bishal"
// if (typeof a==="string")
//     a.toUpperCase();
//give type before using it
// function abcd():void{
//     console.log("okei")
// }
//if returned type is not being used :void, :string or :number 
//if no value is defined it is undefined
//Type Inference = auto value diyesi auto typescript le tesko type vanyo
//Understanding type inference
//Type annotations = let a: number; semicolon paxi type declare garne lai annotations vaninxa
// Interfaces and Type Aliases
//Defining interfaces
// //Using interfaces to define object images
// interface User{
//     name: string,
//     email: string,
//     password : string,
// }
// const obj = {
//     name:"bishal",
//     email:"snfajknf@gmail.com",
//     password:"asdsad"
// }
// Extending interfaces
// interface User{
//     name: string,
//     email: string,
//     password : string,
// }
// interface Admin extends User{
//     admin:boolean;
// }
// function abcd (obj:Admin){
//     obj.admin
//     obj.email
//     obj.name
//     obj.password
// }
// function asd(obj:User){
//     obj.email
//     obj.name
//     obj.password
// }
//merges the same named interface values doesnot overwrite one another
//Type aliases
// type value = string | number | null;
// let a: value;
// type args = string | boolean;
// function aasasd(obj:args){
// }
// aasasd(false)
//Intersection Types
// " | " is called union.
// type User = {
//     name: string,
//     email: string,
// }
// type Admin = User & {
//     getDetails(user: string):void
// }
// function abcd (a:Admin){
//     a.getDetails
// }
// type and interface difference
// type abcd = number;
// type abcd = string;
// type doesnot merge the type if the name is same but interface merges and works.
// type is used for defining the type of data.
// interface is used to make the shape of the object.
// Classes and objects
// Class definition
// class Don {
//     name = "bishal";
//     age = 23;
// }
// let a = new Don();
// Constructors
// class Hero{
//     constructor(public name: string, public age: number){}
// }
// let b1 = new Hero("dinesh",120)
//this.keyword
// class Mouse{
//     constructor(public name:string){
//     }
// }
// class Mouse{
//     public name;
//     constructor( name:string){
//         this.name = name;
//     }
// }
// let b1 = new Mouse("Razor")
// Access modifiers (public, private, protected)
//public modifier
// class MobileMaker{
//     constructor(public name: string){
//     }
//         change() {
//             this.name = "okei";
//         }
// }
// let b1 = new MobileMaker ("Iphone");
// b1.change();
//  Because name is public:
// You can access and modify name from anywhere:
// Inside the class (this.name)
// Outside the class (b1.name = "Samsung")
//private modifier
// class MobileMaker{
//     constructor(private name: string){
//     }
//         change() {
//             this.name = "okei";
//         }
// }
// let b1 = new MobileMaker ("Iphone");
// b1.change();
// With private:
// name can only be used inside the class.
// You cannot access or modify it directly from outside.
// Readonly modifier
var MobileMaker = /** @class */ (function () {
    function MobileMaker(name) {
        this.name = name;
    }
    return MobileMaker;
}());
var b1 = new MobileMaker("Iphone");
console.log(b1.name);
//  What readonly means:
// You can access the property from anywhere (if it's public)
// But you cannot modify it after it's initialized
// Readonly properties
// Optional properties
// Parameter properties
// Getters and setters
// Static members
// Abstract classes and methods
