/* let myName: string = "Abdullah"

myName = "Mukadam"
console.log(myName)

let num: number = 12;
console.log(num) */

//function parametrs type
/* function addNums(num1: number, num2: number) {
    return num1 + num2
}

console.log(addNums(12,6))  */

//return value type
/* function getName(name: string): Array<string> {
    return name.split("")
}

console.log(getName("Abdullah")) */

// return value type normal
/* function getName(name: string): string {
    return name
}

console.log(getName("Abdullah")) */

//doesnt return any value
/* function getName(name: string): void {
   console.log(name)
}

getName("Abdullah") */

//modern syntax for array notations 

/* const arr: object[] = [{
    name: "Abdullah",
    rollno: 21
}, {
    name: "M.ali",
    rollno: 11
}]

console.log(arr) */

//nested arrays
/* const doublearr : number[][] = [[1,2,3,4]]
console.log(doublearr) */


//object
/* const obj: { name: string; age: number } = {
    name: "Abdullah",
    age: 10
}
console.log(obj) */


//type alias
/* type Person = {
    name: string,
    age: number,
    readonly email?: string
} */

/* const obj: Person = {

    name: "Abdullah",
    age: 10
}
console.log(obj) */

/* function getUserData(person: Person): void {
    console.log(person.name, person.age)
}
const perSon1: Person = { name: "Abdullah", age: 10 }
getUserData(perSon1)

const printData = (person: Person): void => {
    console.log("Person2:", person.name, person.email)
}

const Person2: Person = {
    name: "Ali",
    age: 20,
    email: "test@gmail.com"
}
printData(Person2) */


//combination of types
/* type User = {
    name: string
}


type Userage = {
    age : number
}


type CombineType = User & Userage

const user : CombineType = {
    name: "abcd",
    age: 10
}
console.log(user) */

//unions |
/* const pass: string | number = 10
const test: (number | string)[] = [12, 3, 4, "abcd"]
function data(pass: string | number): string | number {
    return pass
}

const res = data(1234)

console.log(res) */

//literal type
/* let validVals : "abcd" | "cde" | "efg";
validVals = "cde" */ // valid
//validVals = "ekh" // invalid


//tuples
/* const arr : [number, string] = [12, "abcd"]
console.log(arr[0]) */

//enum
/* enum whether {
    Sunny = "sunny",
    Rainy = "rainy"
}

const activeval = whether.Sunny
console.log(activeval) */

//interface
/* interface Person {
    name: string,
    age?: number,
    email?: string
}
const PersonObj: Person = {
    name: "Abdullah"
} */

//function Interface
/* interface getData {
    (name: string, age: number): void
}

const getUserData: getData = (name, age) => {
    console.log(name, age)
}
getUserData("Abcd", 30)
 */

//interface extends
/* interface person {
    name: string
}

interface persondetail extends person {
    age: number
}

let personobj: persondetail = {
    name: "abcd",
    age: 20
} */


//for arrays
/* interface persondetails extends Array<persondetail> { }

let personarr: persondetails = [
    {
        name: "abdullah",
        age: 30
    }
]
console.log(personarr) */

//declaration merging
/* interface person {
    name: string,
    age: number
}

interface person {
    email: string
}

const obj: person = {
    name: "abcd",
    age: 20,
    email: "abcd@gmail.com"
} */

//generics
const nums = <T>(num: T): void => {
    console.log(num)
}

//normal fuction
function normfunc<T>(val: T): void {
    console.log(val)
}

nums<number>(1)
nums<string>("abcd")
normfunc<boolean>(true)

//multiple types
function nnumbs<t, u>(num1: t, num2: u): [t, u] {
    return [num1, num2]
}

console.log(nnumbs(1, 2))
