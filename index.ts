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

const arr: object[] = [{
    name: "Abdullah",
    rollno: 21
}, {
    name: "M.ali",
    rollno: 11
}]
console.log(arr)