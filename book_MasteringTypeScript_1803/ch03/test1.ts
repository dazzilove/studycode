// 인터페이스
interface IComplexType {
    id: number
    name: string
}
let complexType: IComplexType
complexType = { id: 1, name: "test" }
console.log(complexType)

// 선택적 속성
interface IOptionalProp {
    id: number
    name?: string
}
let idOnly: IOptionalProp = { id: 1 }
let idAndName: IOptionalProp = { id: 2, name: "test" }
console.log(`idOnly => `)
console.log(idOnly)
console.log(`idAndName =>`)
console.log(idAndName)
idAndName = idOnly
console.log(`idAndName = idOnly =>`)
console.log(idAndName)

// 인터페이스 컴파일
// - 인터페이스는 타입스크립트의 컴파일 시점 언어 기능이다. 타입스크립트 컴파일러는 프로젝트에 포함된 인터페이스로는 자바스크립트 코드를 생성하지 않는다.

// 클래스
class SimpleClass {
    id: number
    print(): void {
        console.log('SimplecClass.print() called')
    }
}
let mySimpleClass = new SimpleClass()
mySimpleClass.print()

// 클래스 속성
class SimpleClass2 {
    id: number
    print(): void {
        console.log(`SimplecClass had id: ${this.id}`)
    }
}
let mySimpleClass2 = new SimpleClass2()
mySimpleClass2.id = 1001
mySimpleClass2.print()

// 인터페이스 구현
// - 클래스는 함수 본문을 구현해야 하고, 인터페이스는 함수 정의를 설명하기만 한다.
// - 이를 통해 인터페이스로 클래스 그룹의 동일한 동작을 설명하고, 클래스로 동작하는 코드를 작성할 수 있다.
class ClassA implements IPrint {
    print() {
        console.log('ClassA.print()')
    }
}
class ClassB implements IPrint {
    print() {
        console.log('ClassB.print()')
    }
}
interface IPrint {
    print()
}
function printClass(a: IPrint) {
    a.print()
}
let classA = new ClassA()
let classB = new ClassB()
printClass(classA)
printClass(classB)

// 클래스 생성자
class ClassWithConstructor {
    id: number
    name: string
    constructor(_id: number, _name: string) {
        this.id = _id
        this.name = _name
    }
}
var classWithConstructor = new ClassWithConstructor(1, "name")
console.log(`classWithConstructor.id : ${classWithConstructor.id}`)
console.log(`classWithConstructor.name : ${classWithConstructor.name}`)

// 클래스 함수
// - 강타입을 사용할 수 있다.
// - 강타입을 우회하려면 any 키워드를 사용해야 한다.
// - 선택적 인자를 가질 수 있다.
// - 기본 인자를 가질 수 있다.
// - 인자 배열을 사용하거나 나머지 인자 구문을 사용할 수 있다.
// - 함수 콜백과 콜백 함수 시그니처를 사용할 수 있다.
// - 함수 오버로드를 사용할 수 있다.
class ComplexType implements IComplexType {
    id: number
    name: string
    constructor(idArg: number, nameArg: string)
    constructor(idArg: string, nameArg: string)
    constructor(idArg: any, nameArg: any) {
        if (typeof idArg === "number")
            this.id = idArg
        this.name = nameArg
    }
    print(): void {
        console.log(`id = ${this.id}, name = ${this.name}`)
    }
    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1
    }
    usingOptionalParams(optionalArg1?: number) {
        if (optionalArg1) {
            this.id = optionalArg1
        }
    }
    usingDefaultParams(defaultArg1: number = 0) {
        this.id = defaultArg1
    }
    usingRestSyntax(...argArray: number []) {
        if (argArray.length > 0) {
            this.id = argArray[0]
        }
    }
    usingFunctionCallback(callback: (id: number) => string) {
        callback(this.id)
    }
}

let ct_1 = new ComplexType(1, "name1")
ct_1.print()
let ct_2 = new ComplexType("2", "name2")
ct_2.print()
let ct_3 = new ComplexType("abc", "name3")
ct_3.print()

ct_1.usingTheAnyKeyword(true)
ct_1.print()
ct_1.usingTheAnyKeyword({ id: 2, name:"test" })
ct_1.print()

ct_1.usingOptionalParams(5)
ct_1.print()
ct_1.usingOptionalParams()
ct_1.print()
ct_1.usingDefaultParams()
ct_1.print()
ct_1.usingRestSyntax(3,4,5)
ct_1.print()
ct_1.usingRestSyntax()
ct_1.print()

function myCallbackFunction(id: number) : string {
    return id.toString()
}
ct_1.usingFunctionCallback(myCallbackFunction)
ct_1.print()

// 인터페이스 함수 정의
// - 인터페이스는 생성자 함수를 포함 할 수 없다.

// 클래스 수정자
// - public, private, protected
// - 클래스 함수의 기본값은 public이다.
class ClassWithPublicProperty {
    public id: number
}
let publicAccess = new ClassWithPublicProperty()
publicAccess.id = 10
console.log(publicAccess.id)

class ClassWithPrivateProperty {
    private id: number
    constructor (_id: number) {
        this.id = _id
    }
}
let privateAccess = new ClassWithPrivateProperty(20)
// privateAccess.id = 30

// 생성자 접근 제어자
// - 타입스크립트는 생성자 함수 인자에서 곧바로 속성값의 접근 제어자를 설정하는 축약 생성자를 도입했다.
class ClassWithAutomaticProperties {
    constructor (public id: number, private name: string) { }
}
let myAutomaticProperties = new ClassWithAutomaticProperties(1, "name")
console.log(`myAutomaticProperties.id = ${myAutomaticProperties.id}`)
// console.log(`myAutomaticProperties.name = ${myAutomaticProperties.name}`)

// 읽기 전용 속성
// - readonly로 설정된 속성은 값을 한 번 설정하면 클래스 안에서도 수정할 수 없다.
// - readonly 속성값은 클래스의 생성자에서만 설정할 수 있다.
class ClassWithReadOnly {
    readonly name: string
    constructor (_name: string) {
        this.name = _name
    }
    // setReadOnly(_name: string) {
    //     this.name = _name
    // }
}

// 클래스 속성 접근자
// - ECMAScript5에서 도입됨
// - ECMAScript5에만 있는 기능이기 때문에 IE8 처럼 ECMAScript5를 지원하지 않는 브라우저에서
//   클래스 접근자를 사용하면 자바스크립트 런타임 오류가 발생한다.
class ClassWithAccessors {
    private _id: number
    get id() {
        console.log('inside get id()')
        return this._id
    }
    set id(value: number) {
        console.log('inside set id()')
        this._id = value
    }
}
var classWithAccessors = new ClassWithAccessors()
classWithAccessors.id = 2
console.log(`id property is set to ${classWithAccessors.id}`)

// 정적 함수
class StaticClass {
    static print() {
        console.log('2')
    }
}
StaticClass.print()

// 정적 속성
class StaticProperty {
    static count = 0
    updateCount() {
        StaticProperty.count++
    }
}
// console.log(StaticProperty.count)
// var myStaticProperty = new StaticProperty()
// myStaticProperty.updateCount()
// myStaticProperty.updateCount()
// console.log(StaticProperty.count)
// StaticProperty.count = 7
// console.log(StaticProperty.count)

let firstInstance = new StaticProperty()
console.log(`StaticProperty.count = ${StaticProperty.count}`)
firstInstance.updateCount()
console.log(`StaticProperty.count = ${StaticProperty.count}`)
let secondInstance = new StaticProperty()
console.log(`StaticProperty.count = ${StaticProperty.count}`)
secondInstance.updateCount()
console.log(`StaticProperty.count = ${StaticProperty.count}`)

// 네임스페이스
namespace FirstNameSpace {
    class NotExported {

    }
    export class NameSpaceClass {
        id: number
        print() {
            console.log('FristNameSpace > NameSpaceClass')
        }
    }
}
let firstNameSpace = new FirstNameSpace.NameSpaceClass()
firstNameSpace.print()
namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string
        print() {
            console.log('SecondNameSpace > NameSpaceClass')
        }
    }
}
let secondNameSpace = new SecondNameSpace.NameSpaceClass()
secondNameSpace.print()

// 상속 > 인터페이스 상속
interface IBase {
    id: number
}
interface IDerivedFormBase extends IBase {
    name: string
}
class InterfaceInher implements IDerivedFormBase {
    id: number
    name: string
}

// 상속 > 클래스 상속
// - 타입스크립트는 다중 상속을 지원하지 않는다. 단일 상속만 가능하다.
class BaseClass implements IBase {
    id: number
}
class DerivedFromBaseClass extends BaseClass implements IDerivedFormBase {
    name: string
}

interface IFirstInterface {
    id: number
}
interface ISecondInterface {
    name: string
}
class MultiInterface implements IFirstInterface, ISecondInterface {
    id: number
    name: string
}

// 상속 > super 키워드
class BaseClassWithConstructor {
    private id: number
    constructor (_id: number) {
        this.id = _id
    }
}
class DerivedClassWithContructor extends BaseClassWithConstructor {
    private name: string
    constructor (_id: number, _name: string) {
        super(_id)
        this.name = _name
    }
}

// 함수 오버로딩
class BaseClassWithFunction {
    public id: number
    getProperties() : string {
        return `id : ${this.id}`
    }
}
class DerivedClassWithFunction extends BaseClassWithFunction {
    public name: string
    getProperties(): string {
        return `${super.getProperties()}, name : ${this.name}`
    }
}
let derivedClassWithFunction = new DerivedClassWithFunction()
derivedClassWithFunction.id = 1
derivedClassWithFunction.name = "name"
console.log(derivedClassWithFunction.getProperties())

// protected 클래스 멤버
// - 상속을 사용할 때 함수나 속성을 해당 클래스와 파생 클래스 안에서만 사용하고자 할 때 이용
class ClassUsingProtected {
    protected id: number
    public getId() {
        return this.id
    }
}
class DerivedFromProtected extends ClassUsingProtected {
    constructor () {
        super()
        this.id = 0
    }
    public setId(_id: number) {
        this.id = _id
    }
}
var derivedFromProtected = new DerivedFromProtected()
console.log(`derivedFromProtected.getId() 1 : ${derivedFromProtected.getId()}`)
derivedFromProtected.setId(444)
console.log(`derivedFromProtected.getId() 2  : ${derivedFromProtected.getId()}`)

// 추상 클래스
// - 인스턴스를 만들지 못한다는 점에서는 인터페이스와 비슷하지만 함수 구현이 가능하다는 점은 인터페이스와 다른다
abstract class AbstractEmployee {
    public id: number
    public name: string
    abstract getDetails(): string
    public printDetails() {
        console.log(this.getDetails())
    }
}
class Employee extends AbstractEmployee {
    getDetails(): string {
        return `id : ${this.id}, name : ${this.name}`
    }
}
class Manager extends AbstractEmployee {
    public employee: Employee[]
    getDetails(): string {
        return `id: ${this.id}, name: ${this.name}, employee count: ${this.employee.length}`
    }
}
var employee = new Employee()
employee.id = 1
employee.name = "employee 1"
employee.printDetails()
var manager = new Manager()
manager.id = 1
manager.name = "manager 1"
manager.employee = new Array()
manager.printDetails()
manager.employee.push(employee)
manager.printDetails()

// 자바스크립트 클로저
// - 즉시 실행 함수 표현식 (Immediately Invoked Function Expression, IIFE)
// - 변수를 스크립트의 일급 객체로 만들어 new 키워드로 생성 할 수 있게 한다.
// - 보일러 플레이트 코드????
function TestClosure(value) {
    this._value = value
    function printValue() {
        console.log(this._value)
    }
    return printValue
}
var myClosure = TestClosure(2)
myClosure()

var BaseClassWithConstructorClosure = (function() {
    function test(_id) {
        this.id = _id
        console.log(this.id)
    }
    return test
})()
BaseClassWithConstructorClosure(444)

// 인터페이스, 클래스, 상속 - 팩토리 패턴
enum PersonCategory {
    Infant, Child, Adult
}
interface IPerson {
    printDetails(): void
}
abstract class Person implements IPerson {
    Category: PersonCategory
    private DateOfBirth: Date
    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth
    }
    abstract canSingContracts(): boolean
    public printDetails(): void {
        console.log(`Person`)
        console.log(`Date of Birth : ${this.DateOfBirth.toDateString()}`)
        console.log(`Category : ${PersonCategory[this.Category]}`)
        console.log(`Can Sing : ${this.canSingContracts()}`)
    }
}
class Infant extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Infant
    }
    canSingContracts(): boolean { return false }
}
class Child extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Child
    }
    canSingContracts(): boolean { return false }
}
class Adult extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Adult
    }
    canSingContracts(): boolean { return true }
}
class PersonFactory {
    getPerson(dateOfBirth): IPerson {
        let dateNow = new Date()
        let currentMonth = dateNow.getMonth() + 1
        let currentDate = dateNow.getDate()

        let dateTwoYearsAgo = new Date(
            dateNow.getFullYear() -2,
            currentMonth, 
            currentDate
        )

        let date18YearsAgo = new Date(
            dateNow.getFullYear() - 18,
            currentMonth, 
            currentDate
        )

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth)
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth)
        }
        return new Adult(dateOfBirth)
    }
}
let factory = new PersonFactory()
let p1 = factory.getPerson(new Date(2017, 0, 20))
p1.printDetails()
let p2 = factory.getPerson(new Date(2010, 0, 20))
p2.printDetails()
let p3 = factory.getPerson(new Date(1965, 0, 20))
p3.printDetails()