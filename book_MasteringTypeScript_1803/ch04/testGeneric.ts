class Concatenator<T> {
    concatenateArray(inputArray: Array<T>): string {
        let returnString = ""
        for (let i=0; i<inputArray.length; i++) {
            if (i > 0) 
                returnString += ","
            returnString += inputArray[i].toString()
        }
        return returnString
    }
}

var stringConcate = new Concatenator<string>()
var numberConcate = new Concatenator<number>()

var stringArray: string[] = ["first", "second", "third"]
var numberArray: number[] = [1, 2, 3]
var stringResult = stringConcate.concatenateArray(stringArray)
var numberResult = numberConcate.concatenateArray(numberArray)

// T 타입 사용
class MyClass {
    private _name: string;
    constructor(arg1: number) {
        this._name = arg1 + "_MyClass"
    }
    toString(): string {
        return this._name
    }
}

let myArray: MyClass[] = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)
]

let myArrayConcatentator = new Concatenator<MyClass>();
var myArrayResult = myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult) 

// T 타입 제한
enum ClubHomeCountry {
    England,
    Germany
}
interface IFootballClub {
    getName(): string
    getHomeCountry(): ClubHomeCountry
}
abstract class FootballClub implements IFootballClub {
    protected _name: string
    protected _homeCountry: ClubHomeCountry
    getName() { return this._name }
    getHomeCountry() { return this._homeCountry }
}
class Liverpool extends FootballClub {
    constructor() {
        super()
        this._name = "Liverpool F.C"
        this._homeCountry = ClubHomeCountry.England
    }
}
class BorussiaDortmund extends FootballClub {
    constructor() {
        super()
        this._name = "Borussia Dortmund"
        this._homeCountry = ClubHomeCountry.Germany
    }
}
interface IFootballClubPrinter<T extends IFootballClub> {
    print(arg: T)
    IsEnglishTeam(arg: T)
}
class FootballClubPrinter<T extends IFootballClub> implements IFootballClubPrinter<T> {
    print(arg: T) {
        console.log(`${arg.getName()} is ${this.IsEnglishTeam(arg)} an English football team.`)
    }
    IsEnglishTeam(arg: T): string {
        if (arg.getHomeCountry() == ClubHomeCountry.England) 
            return "";
        else
            return "NOT"
    }
}
let clubInfo = new FootballClubPrinter()
clubInfo.print(new Liverpool())
clubInfo.print(new BorussiaDortmund())

// 제네릭으로 새 객체 만들기
class FirstClass {
    id: number
}
class SecondClass {
    name: string
}
class GenericCreator<T> {
    create(arg1: {new() : T}): T {
        return new arg1()
    }
}
var creator1 = new GenericCreator<FirstClass>()
var firstClass: FirstClass = creator1.create(FirstClass)

var creator2 = new GenericCreator<SecondClass>()
var secondClass: SecondClass = creator2.create(SecondClass)
