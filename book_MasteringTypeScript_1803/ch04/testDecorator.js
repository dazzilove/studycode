"use strict";
// 데커레이터
// - 데커레이터는 클래스 정의에 코드를 주입하고 메타데이터를 조회할 수 있다.
// - 클래스 정의에 프로그래밍적으로 특정 동작을 추가할 수도 있다.
// - 타입스크립의 데커레이터는 클래스 정의 과정에서 프로그램적으로 검사하는 방법을 제공한다.
// - 데커레이터는 실제 클래스 정의에 코드 주입을 가능하게 해준다.
// - 데커레이터는 클래스 정의, 클래스 속성, 클래스 함수, 함수 인자에도 적용할 수 있다.
// - 데커레이터 개념은 다른 언어에도 존재한다. C# 어트리뷰트, 자바 어노테이션
// - 데커레이터는 타입스크립트의 실험적 기능으로 ECMAScript7 표준으로 제안됐지만, 타입스크립트에서는 ECMAScript3에서도 사용할 수 있다.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// decorator 구문
function simpleDecorator(constructor) {
    console.log('simpleDecorator called');
}
var ClassWithSimpleDecorator = /** @class */ (function () {
    function ClassWithSimpleDecorator() {
    }
    ClassWithSimpleDecorator = __decorate([
        simpleDecorator
    ], ClassWithSimpleDecorator);
    return ClassWithSimpleDecorator;
}());
var instance1 = new ClassWithSimpleDecorator();
var instance2 = new ClassWithSimpleDecorator();
console.log("intance1 : " + instance1);
console.log("intance2 : " + instance2);
// 아무리 많은 인스턴스를 만들어 사용해도 데커레이터 함수는 한번만 호출된다. 클래스를 정의할 때만 데커레이터 함수가 호출 된다.
// 다중 decorator
function secondDecorator(constructor) {
    console.log('secondDecorator called.');
}
var ClassWithMultipleDecorator = /** @class */ (function () {
    function ClassWithMultipleDecorator() {
    }
    ClassWithMultipleDecorator = __decorate([
        simpleDecorator,
        secondDecorator
    ], ClassWithMultipleDecorator);
    return ClassWithMultipleDecorator;
}());
var instance3 = new ClassWithMultipleDecorator();
var instance4 = new ClassWithMultipleDecorator();
console.log("intance3 : " + instance3);
console.log("intance4 : " + instance4);
// 데커레이터를 적용한 순서의 반대로 호출되는것을 볼 수 있다.
// 데커레이터는 코드에 표시되는 순서대로 평가되지만, 호출은 반대 순서로 호출된다.
// decorator factory
// - decorator가 인자를 받게 하려면 데커레이터 팩토리를 사용해야 한다.
// - 데커레이터 팩토리는...
//   데커레이터 함수는 자바스크립트 런타임이 자동으로 인자를 채워준다.
//   데커레이터 팩토리는 함수 정의를 반환해야 한다.
//   데커레이터 팩토리에서 정의한 인자는 데커레이터 함수 안에서 사용할 수 있다.
function decoratorFactory(name) {
    return function (constructor) {
        console.log("decorator function called with : " + name);
    };
}
var ClassWithDecoratorFactory = /** @class */ (function () {
    function ClassWithDecoratorFactory() {
    }
    ClassWithDecoratorFactory = __decorate([
        decoratorFactory("test_name")
    ], ClassWithDecoratorFactory);
    return ClassWithDecoratorFactory;
}());
var instance5 = new ClassWithDecoratorFactory();
console.log("instance5 : " + instance5);
// 클래스 데커레이터 인자
function classConstructorDec(constructor) {
    console.log("constructor : " + constructor);
    console.log("constructor.name : " + constructor.name);
    constructor.prototype.testProperty = "testProperty_vale";
}
var ClassWithConstructor2 = /** @class */ (function () {
    function ClassWithConstructor2() {
    }
    ClassWithConstructor2 = __decorate([
        classConstructorDec
    ], ClassWithConstructor2);
    return ClassWithConstructor2;
}());
var classWithConstructor2 = new ClassWithConstructor2();
console.log("classWithConstructor2.textProperty : " + classWithConstructor2.testProperty);
// 속성 데커레이터
// - 속성 데커레이터는 클래스 속성에 사용하는 데커레이터 함수로 2개의 인자로 호출 된다.
// - 클래스 프로토타입, 속성 이름
function propertyDec(target, propertyKey) {
    console.log("target : " + target);
    console.log("target.constructor : " + target.constructor);
    var className = "";
    if (typeof target === "function") {
        className = target.name;
    }
    else {
        className = target.constructor.name;
    }
    console.log("class name : " + className);
    console.log("propertyKey : " + propertyKey);
}
var ClassWithPropertyDec = /** @class */ (function () {
    function ClassWithPropertyDec() {
    }
    __decorate([
        propertyDec,
        __metadata("design:type", String)
    ], ClassWithPropertyDec.prototype, "name", void 0);
    return ClassWithPropertyDec;
}());
var classWithPropertyDec = new ClassWithPropertyDec();
// 정적 속성 데커레이터
var StaticClassWithPropertyDec = /** @class */ (function () {
    function StaticClassWithPropertyDec() {
    }
    __decorate([
        propertyDec,
        __metadata("design:type", String)
    ], StaticClassWithPropertyDec, "staticName", void 0);
    return StaticClassWithPropertyDec;
}());
var staticClassWithPropertyDec = new StaticClassWithPropertyDec();
// 메서드 데커레이터
// - 3개의 인자 = 클래스 프로토타입, 메서드 이름, 메서드 설명자(옵션)
function methodDec(target, methodName, descriptor) {
    console.log("target : " + target);
    console.log("methodName : " + methodName);
    console.log("target[methodName] : " + target[methodName]);
}
var ClassWithMethodDec = /** @class */ (function () {
    function ClassWithMethodDec() {
    }
    ClassWithMethodDec.prototype.print = function (output) {
        console.log("ClassWithMethodDec.print (" + output + ") called.");
    };
    __decorate([
        methodDec,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithMethodDec.prototype, "print", null);
    return ClassWithMethodDec;
}());
// 메서드 데커레이터 사용 <== 이거 작동하지 않는다... 나중에 다시 찾아볼 것!!
function auditLogDec() {
    return function (target, methodName, descriptor) {
        console.log('=====================');
        var originalFunction = target[methodName];
        var auditFunction = function () {
            console.log('dddddd');
            console.log("auditLogDec : override of " + methodName + " called");
            originalFunction.apply(this, arguments);
        };
        target[methodName] = auditFunction;
    };
}
// function auditLogDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
//     console.log('=====================')
//     let originalFunction = target[methodName]
//     let auditFunction = function() {
//         console.log('dddddd')
//         console.log(`auditLogDec : override of ${methodName} called`)
//         originalFunction.apply(this, arguments)
//     }
//     console.log(`target[methodName] 1 : ${target[methodName]}`)
//     target[methodName] = auditFunction
//     console.log(`target[methodName] 2 : ${target[methodName]}`)
// }
var ClassWithAuditDec = /** @class */ (function () {
    function ClassWithAuditDec() {
    }
    ClassWithAuditDec.prototype.print = function (output) {
        console.log("ClassWithAuditDec.print (" + output + ") called.");
    };
    __decorate([
        auditLogDec(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithAuditDec.prototype, "print", null);
    return ClassWithAuditDec;
}());
var classWithAuditDec = new ClassWithAuditDec();
classWithAuditDec.print("abcdefg");
classWithAuditDec.print("hijklmnop");
// 인자 데커레이터
function parameterDec(target, methodName, parameterIndex) {
    console.log("target : " + target);
    console.log("methodName : " + methodName);
    console.log("parameterIndex : " + parameterIndex);
}
var ClassWithParameterDec = /** @class */ (function () {
    function ClassWithParameterDec() {
    }
    ClassWithParameterDec.prototype.print = function (value) {
    };
    __decorate([
        __param(0, parameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithParameterDec.prototype, "print", null);
    return ClassWithParameterDec;
}());
var classWithParameterDec = new ClassWithParameterDec();
classWithParameterDec.print("test");
// decorator metadata
// - 데커레이터 메타데이터는 데커레이터에 전달되는 정보를 보충하기 위해 클래스 정의에서 생성되는 메타데이터이다.
// - 데커레이터 메타데이터 기능은 emitDecoratorMetadata 옵션을 tsconfig.json 파일에 추가해 사용한다.
function metadataParameterDec(target, methodName, parameterIndex) {
}
var ClassWithMetaData = /** @class */ (function () {
    function ClassWithMetaData() {
    }
    ClassWithMetaData.prototype.print = function (id, name) {
        return 1000;
    };
    __decorate([
        __param(0, metadataParameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Number)
    ], ClassWithMetaData.prototype, "print", null);
    return ClassWithMetaData;
}());
// 데커레이터 메타데이터 사용
// - 데커레이터에 추가 정보를 사용하려면 외부 라이브러리인 relect-metadata를 사용해야 한다.
// - reflect-metadata 라이브러를 사용하는 코드를 컴파일하기 전에 라이브러리 정의 파일을 설치해야 한다. @types/reflect-metadata
// - 메타데이터는 C#과 같은 다른 언어에서는 리플랙션이라 부르는 기능으로, 프레임워크에서 의존선 주입이나 코드 생성 분석 도구의 기초 기술이다.
require("reflect-metadata");
function metadataParameterDec2(target, methodName, parameterIndex) {
    var designType = Reflect.getMetadata("design:type", target, methodName);
    console.log("designType: " + designType);
    var designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
    console.log("designParamTypes: " + designParamTypes);
    var designReturnType = Reflect.getMetadata("design:returntype", target, methodName);
    console.log("designReturnType: " + designReturnType);
}
var ClassWithMetaData2 = /** @class */ (function () {
    function ClassWithMetaData2() {
    }
    ClassWithMetaData2.prototype.print = function (id, name) {
        return 1000;
    };
    __decorate([
        __param(0, metadataParameterDec2),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Number)
    ], ClassWithMetaData2.prototype, "print", null);
    return ClassWithMetaData2;
}());
var classWithMetaData2 = new ClassWithMetaData2();
classWithMetaData2.print(1, "test_name");
//# sourceMappingURL=testDecorator.js.map