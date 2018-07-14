// 강 타입
function doCalculation(
    a: number,
    b: number,
    c: number
) {
    return (a * b) + c
}

var result = doCalculation(3,2,1);
console.log("doCalculation(): " + result);

var myString: string;
var myNumber: number;
var myBoolean: boolean;

myString = "myString";
myNumber = 1;
myBoolean = false;

myString = myNumber.toString();
myBoolean = (myString === "test");
if (myBoolean) 
    myNumber = 1;

// 타입추론
var inferredString = "this is a string";
var inferredNumber = 1;

// 덕 타이핑
var complexText = {name: "myName", id: 1}
complexText = {id:2, name:"anotherName"}
// complexText = {id:3}
// complexText = {id:4, name:"test", extraProp:true}

// 템플릿 문자열 = 역따옴표 사용 
var myVariable = "test"
console.log("myVariable1 =", myVariable)
console.log(`myvaliable2 = ${myVariable}`)

// 배열
var arrayOfNumbers: number [] = [1,2,3]
arrayOfNumbers = [3,4,5,6,7,]
console.log(arrayOfNumbers)
// arrayOfNumbers = ["1", "2"]

// for..in, for..of
var arrayOfStrings: string[] = ["first", "second", "third"]

for (var i=0; i<arrayOfStrings.length; i++) {
    console.log(`arrayOfStrings[${i}] = ${arrayOfStrings[i]}`)
}

for(var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey]
    console.log(`arrayOfStrings[${itemKey}] = ${itemValue}`)
}

for(var item of arrayOfStrings) {
    console.log(`item = ${item}`)
}

// any
var anyItem: any = {id:1, name: "item1"}
console.log(anyItem)
anyItem = {id:2}
console.log(anyItem)

// 명시적 형변환
var anyItem2 = <any>{id:3, name: "item3"}
console.log(anyItem2)
anyItem2 = {id: 4}
console.log(anyItem2)

// 열거형
enum DoorState {
    Open, Closed, Ajar
}
var openDoor = DoorState.Open
console.log(`openDoor is : ${openDoor}`)
var closedDoor = DoorState["Closed"]
console.log(`closedDoor is : ${closedDoor}`)
var ajarDoor = DoorState[2]
console.log(`ajarDoor is : ${ajarDoor}`)

enum DoorState2 {
    Open = 3, Closed = 7, Ajar = 9
}
var openDoor2 = DoorState2.Open
console.log(`openDoor2 is : ${openDoor2}`)
var closedDoor2 = DoorState2["Closed"]
console.log(`closedDoor2 is : ${closedDoor2}`)
var ajarDoor2 = DoorState2[9]
console.log(`ajarDoor2 is : ${ajarDoor2}`)

// 상수 열거형 (Const enums)
const enum DoorStateConst {
    Open, Closed, Ajar
}
var constDoorOpen = DoorStateConst.Open;
console.log(`constDoorOpen is : ${constDoorOpen}`)

// 상수값
const constValue = "test"
// constValue = "dddd"

// let
console.log(`anyValue = ${anyValue}`)
var anyValue = 2
console.log(`anyValue = ${anyValue}`)

let letValue = 2
console.log(`letValue = ${letValue}`)

let lValue = 2
if (letValue == 2) {
    let lValue = 2001
    console.log(`block scoped lValue : ${lValue}`)
}
console.log(`lValue = ${lValue}`)

// function
function addNumbers(a: number, b: number): string {
    return (a + b).toString()
}
var addResult = addNumbers(2, 3)
console.log(`addNumbers returned : ${addResult}`)

// 익명함수
var addVar = function (a, b) {
    return a + b
}
var addVarResult = addVar(3,4)
console.log(`addVar returned : ${addVarResult}`)

var addFunction = function(a: number, b: number): number {
    return a + b
}
var addFunctionResult = addFunction(4,5)
console.log(`addFunction returned : ${addFunctionResult}`)

// 선택적 인자 (Optional Parameters)
var concatStrings = function (a, b, c) {
    return a + b + c
}
var concateABC = concatStrings("a", "b", "c")
console.log(`concateABC : ${concateABC}`)
var concateAB = concatStrings("a", "b")
console.log(`concateAB : ${concateAB}`)

var concatStrings2 = function (a: string, b: string, c?: string) {
    return a + b + c
}
var concatABC2 = concatStrings2("a", "b", "c")
console.log(`concatABC2 : ${concatABC2}`)
var concatAB2 = concatStrings2("a", "b")
console.log(`concatAB2 : ${concatAB2}`)




