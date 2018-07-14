var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// 강 타입
function doCalculation(a, b, c) {
    return (a * b) + c;
}
var result = doCalculation(3, 2, 1);
console.log("doCalculation(): " + result);
var myString;
var myNumber;
var myBoolean;
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
var complexText = { name: "myName", id: 1 };
complexText = { id: 2, name: "anotherName" };
// complexText = {id:3}
// complexText = {id:4, name:"test", extraProp:true}
// 템플릿 문자열 = 역따옴표 사용 
var myVariable = "test";
console.log("myVariable1 =", myVariable);
console.log("myvaliable2 = " + myVariable);
// 배열
var arrayOfNumbers = [1, 2, 3];
arrayOfNumbers = [3, 4, 5, 6, 7,];
console.log(arrayOfNumbers);
// arrayOfNumbers = ["1", "2"]
// for..in, for..of
var arrayOfStrings = ["first", "second", "third"];
for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log("arrayOfStrings[" + i + "] = " + arrayOfStrings[i]);
}
for (var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey];
    console.log("arrayOfStrings[" + itemKey + "] = " + itemValue);
}
for (var _i = 0, arrayOfStrings_1 = arrayOfStrings; _i < arrayOfStrings_1.length; _i++) {
    var item = arrayOfStrings_1[_i];
    console.log("item = " + item);
}
// any
var anyItem = { id: 1, name: "item1" };
console.log(anyItem);
anyItem = { id: 2 };
console.log(anyItem);
// 명시적 형변환
var anyItem2 = { id: 3, name: "item3" };
console.log(anyItem2);
anyItem2 = { id: 4 };
console.log(anyItem2);
// 열거형
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
var openDoor = DoorState.Open;
console.log("openDoor is : " + openDoor);
var closedDoor = DoorState["Closed"];
console.log("closedDoor is : " + closedDoor);
var ajarDoor = DoorState[2];
console.log("ajarDoor is : " + ajarDoor);
var DoorState2;
(function (DoorState2) {
    DoorState2[DoorState2["Open"] = 3] = "Open";
    DoorState2[DoorState2["Closed"] = 7] = "Closed";
    DoorState2[DoorState2["Ajar"] = 9] = "Ajar";
})(DoorState2 || (DoorState2 = {}));
var openDoor2 = DoorState2.Open;
console.log("openDoor2 is : " + openDoor2);
var closedDoor2 = DoorState2["Closed"];
console.log("closedDoor2 is : " + closedDoor2);
var ajarDoor2 = DoorState2[9];
console.log("ajarDoor2 is : " + ajarDoor2);
var constDoorOpen = 0 /* Open */;
console.log("constDoorOpen is : " + constDoorOpen);
// 상수값
var constValue = "test";
// constValue = "dddd"
// let
console.log("anyValue = " + anyValue);
var anyValue = 2;
console.log("anyValue = " + anyValue);
var letValue = 2;
console.log("letValue = " + letValue);
var lValue = 2;
if (letValue == 2) {
    var lValue_1 = 2001;
    console.log("block scoped lValue : " + lValue_1);
}
console.log("lValue = " + lValue);
// function
function addNumbers(a, b) {
    return (a + b).toString();
}
var addResult = addNumbers(2, 3);
console.log("addNumbers returned : " + addResult);
// 익명함수
var addVar = function (a, b) {
    return a + b;
};
var addVarResult = addVar(3, 4);
console.log("addVar returned : " + addVarResult);
var addFunction = function (a, b) {
    return a + b;
};
var addFunctionResult = addFunction(4, 5);
console.log("addFunction returned : " + addFunctionResult);
// 선택적 인자 (Optional Parameters)
var concatStrings = function (a, b, c) {
    return a + b + c;
};
var concateABC = concatStrings("a", "b", "c");
console.log("concateABC : " + concateABC);
// var concateAB = concatStrings("a", "b")
// console.log(`concateAB : ${concateAB}`)
function concatStrings2(a, b, c) {
    return a + b + c;
}
var concatABC2 = concatStrings2("a", "b", "c");
console.log("concatABC2 : " + concatABC2);
var concatAB2 = concatStrings2("a", "b");
console.log("concatAB2 : " + concatAB2);
// 기본인자 (default parameters)
function concatStringDefault(a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
}
var defaultConcat = concatStringDefault("a", "b");
console.log("defaultConcat : " + defaultConcat);
// 나머지 인자 (rast parameters)
function testArguments() {
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            console.log("argument[" + i + "] = " + arguments[i]);
        }
    }
}
// testArguments(1,2,3)
// testArguments("firstArg")
function testArguments2() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argument[" + i + "] = " + argArray[i]);
        }
    }
}
testArguments2(1, 2, 3);
testArguments2(1);
function testArguments3(str) {
    var argArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argArray[_i - 1] = arguments[_i];
    }
    console.log("first arg = " + str);
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argument[" + i + "] = " + argArray[i]);
        }
    }
}
testArguments3("a", 1, 2, 3);
testArguments3("b");
// 함수 콜백
var callbackFunction = function (text) {
    console.log("insite callbackFunction " + text);
};
function doSomethingWithCallback(initialText, callback) {
    console.log("inside doSomethingWithCallback " + initialText);
    if (typeof callback === "function")
        callback(initialText);
    else
        console.log(initialText + " is not a function!");
}
doSomethingWithCallback('myText', callbackFunction);
doSomethingWithCallback('myText', 'two');
// 함수 시그니처
function doSomethingWithCallbackSigniture(initialText, callback) {
    console.log("inside doSomethingWithCallback " + initialText);
    callback(initialText);
}
doSomethingWithCallbackSigniture('myText', callbackFunction);
// doSomethingWithCallbackSigniture('myText', 'two')
// 함수 오버로드
function add(a, b) {
    return a + b;
}
console.log("add(1,2) = " + add(1, 2));
console.log("add(\"1\",\"2\") = " + add("1", "2"));
function add2(a, b) {
    return a + b;
}
console.log("add2(1,2) = " + add2(1, 2));
console.log("add2(\"1\",\"2\") = " + add2("1", "2"));
// 공용체(Union) => 2개 이상의 타입을 조합하는 표현식
var unionType;
unionType = 1;
console.log("unionType : " + unionType);
unionType = "text";
console.log("unionType : " + unionType);
// 타입가드
// function addWithUnion(
//     arg1: string | number,
//     arg2: string | number
// ) {
//     return arg1 + arg2
// }
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        console.log('first arg is a string');
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log('both args are numbers');
        return arg1 + arg2;
    }
    console.log('default return');
    return arg1.toString() + arg2.toString();
}
console.log(addWithTypeGuard(1, 2));
console.log(addWithTypeGuard("1", "2"));
console.log(addWithTypeGuard("1", 3));
console.log(addWithTypeGuard(1, "3"));
function addWithAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
console.log(addWithAlias(1, 2));
console.log(addWithAlias("1", "2"));
function usingCallbackWithString(callback) {
    callback("this is a string!");
}
function callbackTemp(text) {
    console.log(text);
}
usingCallbackWithString(callbackTemp);
// Null, undefined
function testUndef(text) {
    console.log("testUndef parameter : " + text);
}
// testUndef()
testUndef(null);
testUndef("a");
function testUndef2(text) {
    console.log("testUndef2 parameter : " + text);
}
// testUndef2()
testUndef2(null);
// testUndef2("1")
testUndef2(2);
var x;
x = 1;
x = undefined;
x = null;
// 객체 나머지, 전개 (object rest and spread)
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj.id = " + secondObj.id);
console.log("secondObj.name = " + secondObj.name);
var nameObj = { name: "nameObj" };
var idObj = { id: 2 };
var obj3 = __assign({}, nameObj, idObj);
console.log("obj3.id = " + obj3.id);
console.log("obj3.name = " + obj3.name);
//# sourceMappingURL=test1.js.map