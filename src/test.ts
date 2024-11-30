export const test = () => {
  console.log('test')

//   const name:string = "Mike";//string
//   console.log(name);
  
//   const age:number = 25;//number
//   const isStudent:boolean = false;//boolean
//   const hobbies:string[] = ["Reading","Coding", "Gaming"];//array
//   const address:object = {
//     street:"123 Main St",
//     city:"Los Angeles",
//     state:"CA",
//   };//object
//   const today:Date = new Date();//Date
//   const none:null = null;//null
//   const nothing:undefined = undefined;//undefined
//   const random:any = "Hello World";//any
//   const gender:"male" | "female" = "male";//union
//   const value: string | number |null = "Hello World";//union
  
//   //問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
//   //例：reverseArray(["a", "b", "c"]) => ["c", "b", "a"]
//   //実際にデータ型を定義してみよう：変数、引数、戻り値
  
//   const reverseArray = (arr:string[], hasTom?:boolean):string[] => {
//     const reverseArray:string[] = [];
//     let index:number = arr.length -1;
//     while(index >= 0) {
//       reverseArray.push(arr[index]);
//       index--;
//     }
//     if(hasTom) {
//       reverseArray.push("Tom");
//     }
//     return reverseArray
//   };
//   console.log(reverseArray(["a","b","c"], true));
// const user = {
//   userId:1,
//   name:"Mike",
//   age:25,
//   email:"mike@gmail.com",
//   isActive:true,
// }

// interface UserProps {
//   userId: number,
//   name: string,
//   age: number,
//   email: string,
//   isActive: boolean;
// }

// interface AdminUser extends UserProps {
//   role: string;

// class User {
//   userId: number;
//   name: string;
//   age: number;
//   email: string;
//   isActive: boolean;
//   constructor(userId: number, name: string, age: number, email: string, isActive: boolean) {
//     this.userId = userId;
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.isActive = isActive;
//   }

//  public getProfile():string {
//     return `Name: ${this.name}, Age: ${this.age}`
//   }
//   private static sayHelloWord():void {
//     console.log("Hello World");
//   }
// }

// const user = new User(1, "Mike", 25, "mike@gmail.com", true);
// User.sayHelloWord();
// //public,private,protected
// user.getProfile();

// const foo = (arg:string):string => {
//   return arg;
// }

// const foo = <T>(arg: T):T => {
//   return arg;
// }

// foo<string>("Hello World");

}

