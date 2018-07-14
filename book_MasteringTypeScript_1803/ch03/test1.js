var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var complexType;
complexType = { id: 1, name: "test" };
console.log(complexType);
var idOnly = { id: 1 };
var idAndName = { id: 2, name: "test" };
console.log("idOnly => ");
console.log(idOnly);
console.log("idAndName =>");
console.log(idAndName);
idAndName = idOnly;
console.log("idAndName = idOnly =>");
console.log(idAndName);
// 인터페이스 컴파일
// - 인터페이스는 타입스크립트의 컴파일 시점 언어 기능이다. 타입스크립트 컴파일러는 프로젝트에 포함된 인터페이스로는 자바스크립트 코드를 생성하지 않는다.
// 클래스
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log('SimplecClass.print() called');
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.print();
// 클래스 속성
var SimpleClass2 = /** @class */ (function () {
    function SimpleClass2() {
    }
    SimpleClass2.prototype.print = function () {
        console.log("SimplecClass had id: " + this.id);
    };
    return SimpleClass2;
}());
var mySimpleClass2 = new SimpleClass2();
mySimpleClass2.id = 1001;
mySimpleClass2.print();
// 인터페이스 구현
// - 클래스는 함수 본문을 구현해야 하고, 인터페이스는 함수 정의를 설명하기만 한다.
// - 이를 통해 인터페이스로 클래스 그룹의 동일한 동작을 설명하고, 클래스로 동작하는 코드를 작성할 수 있다.
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log('ClassA.print()');
    };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log('ClassB.print()');
    };
    return ClassB;
}());
function printClass(a) {
    a.print();
}
var classA = new ClassA();
var classB = new ClassB();
printClass(classA);
printClass(classB);
// 클래스 생성자
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(1, "name");
console.log("classWithConstructor.id : " + classWithConstructor.id);
console.log("classWithConstructor.name : " + classWithConstructor.name);
// 클래스 함수
// - 강타입을 사용할 수 있다.
// - 강타입을 우회하려면 any 키워드를 사용해야 한다.
// - 선택적 인자를 가질 수 있다.
// - 기본 인자를 가질 수 있다.
// - 인자 배열을 사용하거나 나머지 인자 구문을 사용할 수 있다.
// - 함수 콜백과 콜백 함수 시그니처를 사용할 수 있다.
// - 함수 오버로드를 사용할 수 있다.
var ComplexType = /** @class */ (function () {
    function ComplexType(idArg, nameArg) {
        if (typeof idArg === "number")
            this.id = idArg;
        this.name = nameArg;
    }
    ComplexType.prototype.print = function () {
        console.log("id = " + this.id + ", name = " + this.name);
    };
    ComplexType.prototype.usingTheAnyKeyword = function (arg1) {
        this.id = arg1;
    };
    ComplexType.prototype.usingOptionalParams = function (optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    };
    ComplexType.prototype.usingDefaultParams = function (defaultArg1) {
        if (defaultArg1 === void 0) { defaultArg1 = 0; }
        this.id = defaultArg1;
    };
    ComplexType.prototype.usingRestSyntax = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    };
    ComplexType.prototype.usingFunctionCallback = function (callback) {
        callback(this.id);
    };
    return ComplexType;
}());
var ct_1 = new ComplexType(1, "name1");
ct_1.print();
var ct_2 = new ComplexType("2", "name2");
ct_2.print();
var ct_3 = new ComplexType("abc", "name3");
ct_3.print();
ct_1.usingTheAnyKeyword(true);
ct_1.print();
ct_1.usingTheAnyKeyword({ id: 2, name: "test" });
ct_1.print();
ct_1.usingOptionalParams(5);
ct_1.print();
ct_1.usingOptionalParams();
ct_1.print();
ct_1.usingDefaultParams();
ct_1.print();
ct_1.usingRestSyntax(3, 4, 5);
ct_1.print();
ct_1.usingRestSyntax();
ct_1.print();
function myCallbackFunction(id) {
    return id.toString();
}
ct_1.usingFunctionCallback(myCallbackFunction);
ct_1.print();
// 인터페이스 함수 정의
// - 인터페이스는 생성자 함수를 포함 할 수 없다.
// 클래스 수정자
// - public, private, protected
// - 클래스 함수의 기본값은 public이다.
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
console.log(publicAccess.id);
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(_id) {
        this.id = _id;
    }
    return ClassWithPrivateProperty;
}());
var privateAccess = new ClassWithPrivateProperty(20);
// privateAccess.id = 30
// 생성자 접근 제어자
// - 타입스크립트는 생성자 함수 인자에서 곧바로 속성값의 접근 제어자를 설정하는 축약 생성자를 도입했다.
var ClassWithAutomaticProperties = /** @class */ (function () {
    function ClassWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassWithAutomaticProperties;
}());
var myAutomaticProperties = new ClassWithAutomaticProperties(1, "name");
console.log("myAutomaticProperties.id = " + myAutomaticProperties.id);
// console.log(`myAutomaticProperties.name = ${myAutomaticProperties.name}`)
// 읽기 전용 속성
// - readonly로 설정된 속성은 값을 한 번 설정하면 클래스 안에서도 수정할 수 없다.
// - readonly 속성값은 클래스의 생성자에서만 설정할 수 있다.
var ClassWithReadOnly = /** @class */ (function () {
    function ClassWithReadOnly(_name) {
        this.name = _name;
    }
    return ClassWithReadOnly;
}());
// 클래스 속성 접근자
// - ECMAScript5에서 도입됨
// - ECMAScript5에만 있는 기능이기 때문에 IE8 처럼 ECMAScript5를 지원하지 않는 브라우저에서
//   클래스 접근자를 사용하면 자바스크립트 런타임 오류가 발생한다.
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log('inside get id()');
            return this._id;
        },
        set: function (value) {
            console.log('inside set id()');
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2;
console.log("id property is set to " + classWithAccessors.id);
// 정적 함수
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.print = function () {
        console.log('2');
    };
    return StaticClass;
}());
StaticClass.print();
// 정적 속성
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
// console.log(StaticProperty.count)
// var myStaticProperty = new StaticProperty()
// myStaticProperty.updateCount()
// myStaticProperty.updateCount()
// console.log(StaticProperty.count)
// StaticProperty.count = 7
// console.log(StaticProperty.count)
var firstInstance = new StaticProperty();
console.log("StaticProperty.count = " + StaticProperty.count);
firstInstance.updateCount();
console.log("StaticProperty.count = " + StaticProperty.count);
var secondInstance = new StaticProperty();
console.log("StaticProperty.count = " + StaticProperty.count);
secondInstance.updateCount();
console.log("StaticProperty.count = " + StaticProperty.count);
// 네임스페이스
var FirstNameSpace;
(function (FirstNameSpace) {
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        NameSpaceClass.prototype.print = function () {
            console.log('FristNameSpace > NameSpaceClass');
        };
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
})(FirstNameSpace || (FirstNameSpace = {}));
var firstNameSpace = new FirstNameSpace.NameSpaceClass();
firstNameSpace.print();
var SecondNameSpace;
(function (SecondNameSpace) {
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        NameSpaceClass.prototype.print = function () {
            console.log('SecondNameSpace > NameSpaceClass');
        };
        return NameSpaceClass;
    }());
    SecondNameSpace.NameSpaceClass = NameSpaceClass;
})(SecondNameSpace || (SecondNameSpace = {}));
var secondNameSpace = new SecondNameSpace.NameSpaceClass();
secondNameSpace.print();
var InterfaceInher = /** @class */ (function () {
    function InterfaceInher() {
    }
    return InterfaceInher;
}());
// 상속 > 클래스 상속
// - 타입스크립트는 다중 상속을 지원하지 않는다. 단일 상속만 가능하다.
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var DerivedFromBaseClass = /** @class */ (function (_super) {
    __extends(DerivedFromBaseClass, _super);
    function DerivedFromBaseClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedFromBaseClass;
}(BaseClass));
var MultiInterface = /** @class */ (function () {
    function MultiInterface() {
    }
    return MultiInterface;
}());
// 상속 > super 키워드
var BaseClassWithConstructor = /** @class */ (function () {
    function BaseClassWithConstructor(_id) {
        this.id = _id;
    }
    return BaseClassWithConstructor;
}());
var DerivedClassWithContructor = /** @class */ (function (_super) {
    __extends(DerivedClassWithContructor, _super);
    function DerivedClassWithContructor(_id, _name) {
        var _this = _super.call(this, _id) || this;
        _this.name = _name;
        return _this;
    }
    return DerivedClassWithContructor;
}(BaseClassWithConstructor));
// 함수 오버로딩
var BaseClassWithFunction = /** @class */ (function () {
    function BaseClassWithFunction() {
    }
    BaseClassWithFunction.prototype.getProperties = function () {
        return "id : " + this.id;
    };
    return BaseClassWithFunction;
}());
var DerivedClassWithFunction = /** @class */ (function (_super) {
    __extends(DerivedClassWithFunction, _super);
    function DerivedClassWithFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassWithFunction.prototype.getProperties = function () {
        return _super.prototype.getProperties.call(this) + ", name : " + this.name;
    };
    return DerivedClassWithFunction;
}(BaseClassWithFunction));
var derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "name";
console.log(derivedClassWithFunction.getProperties());
// protected 클래스 멤버
// - 상속을 사용할 때 함수나 속성을 해당 클래스와 파생 클래스 안에서만 사용하고자 할 때 이용
var ClassUsingProtected = /** @class */ (function () {
    function ClassUsingProtected() {
    }
    ClassUsingProtected.prototype.getId = function () {
        return this.id;
    };
    return ClassUsingProtected;
}());
var DerivedFromProtected = /** @class */ (function (_super) {
    __extends(DerivedFromProtected, _super);
    function DerivedFromProtected() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        return _this;
    }
    DerivedFromProtected.prototype.setId = function (_id) {
        this.id = _id;
    };
    return DerivedFromProtected;
}(ClassUsingProtected));
var derivedFromProtected = new DerivedFromProtected();
console.log("derivedFromProtected.getId() 1 : " + derivedFromProtected.getId());
derivedFromProtected.setId(444);
console.log("derivedFromProtected.getId() 2  : " + derivedFromProtected.getId());
// 추상 클래스
// - 인스턴스를 만들지 못한다는 점에서는 인터페이스와 비슷하지만 함수 구현이 가능하다는 점은 인터페이스와 다른다
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    AbstractEmployee.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployee;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getDetails = function () {
        return "id : " + this.id + ", name : " + this.name;
    };
    return Employee;
}(AbstractEmployee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getDetails = function () {
        return "id: " + this.id + ", name: " + this.name + ", employee count: " + this.employee.length;
    };
    return Manager;
}(AbstractEmployee));
var employee = new Employee();
employee.id = 1;
employee.name = "employee 1";
employee.printDetails();
var manager = new Manager();
manager.id = 1;
manager.name = "manager 1";
manager.employee = new Array();
manager.printDetails();
manager.employee.push(employee);
manager.printDetails();
// 자바스크립트 클로저
// - 즉시 실행 함수 표현식 (Immediately Invoked Function Expression, IIFE)
// - 변수를 스크립트의 일급 객체로 만들어 new 키워드로 생성 할 수 있게 한다.
// - 보일러 플레이트 코드????
function TestClosure(value) {
    this._value = value;
    function printValue() {
        console.log(this._value);
    }
    return printValue;
}
var myClosure = TestClosure(2);
myClosure();
var BaseClassWithConstructorClosure = (function () {
    function test(_id) {
        this.id = _id;
        console.log(this.id);
    }
    return test;
})();
BaseClassWithConstructorClosure(444);
// 인터페이스, 클래스, 상속 - 팩토리 패턴
var PersonCategory;
(function (PersonCategory) {
    PersonCategory[PersonCategory["Infant"] = 0] = "Infant";
    PersonCategory[PersonCategory["Child"] = 1] = "Child";
    PersonCategory[PersonCategory["Adult"] = 2] = "Adult";
})(PersonCategory || (PersonCategory = {}));
var Person = /** @class */ (function () {
    function Person(dateOfBirth) {
        this.DateOfBirth = dateOfBirth;
    }
    Person.prototype.printDetails = function () {
        console.log("Person");
        console.log("Date of Birth : " + this.DateOfBirth.toDateString());
        console.log("Category : " + PersonCategory[this.Category]);
        console.log("Can Sing : " + this.canSingContracts());
    };
    return Person;
}());
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Infant;
        return _this;
    }
    Infant.prototype.canSingContracts = function () { return false; };
    return Infant;
}(Person));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Child;
        return _this;
    }
    Child.prototype.canSingContracts = function () { return false; };
    return Child;
}(Person));
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Adult;
        return _this;
    }
    Adult.prototype.canSingContracts = function () { return true; };
    return Adult;
}(Person));
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date();
        var currentMonth = dateNow.getMonth() + 1;
        var currentDate = dateNow.getDate();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        var date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
}());
var factory = new PersonFactory();
var p1 = factory.getPerson(new Date(2017, 0, 20));
p1.printDetails();
var p2 = factory.getPerson(new Date(2010, 0, 20));
p2.printDetails();
var p3 = factory.getPerson(new Date(1965, 0, 20));
p3.printDetails();
//# sourceMappingURL=test1.js.map