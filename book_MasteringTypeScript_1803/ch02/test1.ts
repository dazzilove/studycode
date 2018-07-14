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
// var concateAB = concatStrings("a", "b")
// console.log(`concateAB : ${concateAB}`)

function concatStrings2 (a: string, b: string, c?: string) {
    return a + b + c 
}
var concatABC2 = concatStrings2("a", "b", "c")
console.log(`concatABC2 : ${concatABC2}`)
var concatAB2 = concatStrings2("a", "b")
console.log(`concatAB2 : ${concatAB2}`)

// 기본인자 (default parameters)
function concatStringDefault(
    a: string,
    b: string,
    c: string = "c"
) {
    return a + b + c
}
var defaultConcat = concatStringDefault("a", "b")
console.log(`defaultConcat : ${defaultConcat}`)

// 나머지 인자 (rast parameters)
function testArguments() {
    if(arguments.length > 0) {
        for (var i=0; i<arguments.length; i++) {
            console.log(`argument[${i}] = ${arguments[i]}`)
        }
    }
}
// testArguments(1,2,3)
// testArguments("firstArg")

function testArguments2(... argArray: number[]) {
    if(argArray.length > 0) {
        for (var i=0; i<argArray.length; i++) {
            console.log(`argument[${i}] = ${argArray[i]}`)
        }
    }
}
testArguments2(1,2,3)
testArguments2(1)

function testArguments3(str: string, ... argArray: number[]) {
    console.log(`first arg = ${str}`)
    if(argArray.length > 0) {
        for (var i=0; i<argArray.length; i++) {
            console.log(`argument[${i}] = ${argArray[i]}`)
        }
    }
}
testArguments3("a",1,2,3)
testArguments3("b")

// 함수 콜백
var callbackFunction = function(text) {
    console.log(`insite callbackFunction ${text}`)
}
function doSomethingWithCallback(initialText, callback) {
    console.log(`inside doSomethingWithCallback ${initialText}`)
    if (typeof callback === "function")
        callback(initialText)
    else 
        console.log(`${initialText} is not a function!`)
}
doSomethingWithCallback('myText', callbackFunction)
doSomethingWithCallback('myText', 'two')

// 함수 시그니처
function doSomethingWithCallbackSigniture(
    initialText: string,
    callback: (initialText: string) => void
) {
    console.log(`inside doSomethingWithCallback ${initialText}`)
    callback(initialText)
}
doSomethingWithCallbackSigniture('myText', callbackFunction)
// doSomethingWithCallbackSigniture('myText', 'two')

// 함수 오버로드
function add(a, b) {
    return a + b
}
console.log(`add(1,2) = ${add(1,2)}`)
console.log(`add("1","2") = ${add("1","2")}`)

function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: any, b:any): any {
    return a + b
}
console.log(`add2(1,2) = ${add2(1,2)}`)
console.log(`add2("1","2") = ${add2("1","2")}`)

// 공용체(Union) => 2개 이상의 타입을 조합하는 표현식
var unionType : string | number;
unionType = 1
console.log(`unionType : ${unionType}`)
unionType = "text"
console.log(`unionType : ${unionType}`)

// 타입가드
// function addWithUnion(
//     arg1: string | number,
//     arg2: string | number
// ) {
//     return arg1 + arg2
// }

function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
) : string | number {
    if (typeof arg1 === "string") {
        console.log('first arg is a string')
        return arg1 + arg2
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log('both args are numbers')
        return arg1 + arg2
    }
    console.log('default return')
    return arg1.toString() + arg2.toString()
}
console.log(addWithTypeGuard(1,2))
console.log(addWithTypeGuard("1","2"))
console.log(addWithTypeGuard("1",3))
console.log(addWithTypeGuard(1,"3"))

// 타입 별명
type StringOrNumber = string | number
function addWithAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber,
): StringOrNumber {
    return arg1.toString() + arg2.toString()
}
console.log(addWithAlias(1,2))
console.log(addWithAlias("1","2"))

type CallbackWithString = (string) => void
function usingCallbackWithString(
    callback: CallbackWithString
) {
    callback("this is a string!")
}
function callbackTemp(text: string) {
    console.log(text)
}
usingCallbackWithString(callbackTemp)

// Null, undefined
function testUndef(text) {
    console.log(`testUndef parameter : ${text}`)
}
// testUndef()
testUndef(null)
testUndef("a")

function testUndef2(text: null | number) {
    console.log(`testUndef2 parameter : ${text}`)
}
// testUndef2()
testUndef2(null)
// testUndef2("1")
testUndef2(2)

let x : number |  undefined
x = 1
x = undefined
x = null

// 객체 나머지, 전개 (object rest and spread)
let firstObj = { id: 1, name: "firstObj" }
let secondObj = { ...firstObj }
console.log(`secondObj.id = ${secondObj.id}`)
console.log(`secondObj.name = ${secondObj.name}`)

let nameObj = { name: "nameObj" }
let idObj = { id: 2 }
let obj3 = { ...nameObj, ...idObj }
console.log(`obj3.id = ${obj3.id}`)
console.log(`obj3.name = ${obj3.name}`)

