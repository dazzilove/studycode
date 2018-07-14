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
var concateAB = concatStrings("a", "b");
console.log("concateAB : " + concateAB);
var concatStrings2 = function (a, b, c) {
    return a + b + c;
};
var concatABC2 = concatStrings2("a", "b", "c");
console.log("concatABC2 : " + concatABC2);
var concatAB2 = concatStrings2("a", "b");
console.log("concatAB2 : " + concatAB2);
//# sourceMappingURL=test1.js.map