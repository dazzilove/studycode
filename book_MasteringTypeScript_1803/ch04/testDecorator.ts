// 데커레이터
// - 데커레이터는 클래스 정의에 코드를 주입하고 메타데이터를 조회할 수 있다.
// - 클래스 정의에 프로그래밍적으로 특정 동작을 추가할 수도 있다.
// - 타입스크립의 데커레이터는 클래스 정의 과정에서 프로그램적으로 검사하는 방법을 제공한다.
// - 데커레이터는 실제 클래스 정의에 코드 주입을 가능하게 해준다.
// - 데커레이터는 클래스 정의, 클래스 속성, 클래스 함수, 함수 인자에도 적용할 수 있다.
// - 데커레이터 개념은 다른 언어에도 존재한다. C# 어트리뷰트, 자바 어노테이션
// - 데커레이터는 타입스크립트의 실험적 기능으로 ECMAScript7 표준으로 제안됐지만, 타입스크립트에서는 ECMAScript3에서도 사용할 수 있다.

// decorator 구문
function simpleDecorator(constructor: Function) {
    console.log('simpleDecorator called')
}

@simpleDecorator
class ClassWithSimpleDecorator {

}

let instance1 = new ClassWithSimpleDecorator()
let instance2 = new ClassWithSimpleDecorator()

console.log(`intance1 : ${instance1}`)
console.log(`intance2 : ${instance2}`)

// 아무리 많은 인스턴스를 만들어 사용해도 데커레이터 함수는 한번만 호출된다. 클래스를 정의할 때만 데커레이터 함수가 호출 된다.

// 다중 decorator
function secondDecorator(constructor: Function) {
    console.log('secondDecorator called.')
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorator {

}
let instance3 = new ClassWithMultipleDecorator()
let instance4 = new ClassWithMultipleDecorator()

console.log(`intance3 : ${instance3}`)
console.log(`intance4 : ${instance4}`)

// 데커레이터를 적용한 순서의 반대로 호출되는것을 볼 수 있다.
// 데커레이터는 코드에 표시되는 순서대로 평가되지만, 호출은 반대 순서로 호출된다.

// decorator factory
// - decorator가 인자를 받게 하려면 데커레이터 팩토리를 사용해야 한다.
// - 데커레이터 팩토리는...
//   데커레이터 함수는 자바스크립트 런타임이 자동으로 인자를 채워준다.
//   데커레이터 팩토리는 함수 정의를 반환해야 한다.
//   데커레이터 팩토리에서 정의한 인자는 데커레이터 함수 안에서 사용할 수 있다.
function decoratorFactory(name: string) {
    return function (constructor: Function) {
        console.log(`decorator function called with : ${name}`)
    }
}

@decoratorFactory("test_name")
class ClassWithDecoratorFactory {

}

let instance5 = new ClassWithDecoratorFactory()
console.log(`instance5 : ${instance5}`)

// 클래스 데커레이터 인자
function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`)
    console.log(`constructor.name : ${(<any>constructor).name}`)
    constructor.prototype.testProperty = "testProperty_vale"
}

@classConstructorDec
class ClassWithConstructor2 {
    
}

let classWithConstructor2 = new ClassWithConstructor2()
console.log(`classWithConstructor2.textProperty : ${(<any>classWithConstructor2).testProperty}`)

// 속성 데커레이터
// - 속성 데커레이터는 클래스 속성에 사용하는 데커레이터 함수로 2개의 인자로 호출 된다.
// - 클래스 프로토타입, 속성 이름
function propertyDec(target: any, propertyKey: string) {
    console.log(`target : ${target}`)
    console.log(`target.constructor : ${target.constructor}`)

    let className = ""
    if (typeof target === "function") {
        className = target.name
    } else {
        className = target.constructor.name
    }

    console.log(`class name : ${className}`)
    console.log(`propertyKey : ${propertyKey}`)
}

class ClassWithPropertyDec {
    @propertyDec
    name: string
}

let classWithPropertyDec = new ClassWithPropertyDec()

// 정적 속성 데커레이터
class StaticClassWithPropertyDec {
    @propertyDec
    static staticName: string
}

let staticClassWithPropertyDec = new StaticClassWithPropertyDec()

// 메서드 데커레이터
// - 3개의 인자 = 클래스 프로토타입, 메서드 이름, 메서드 설명자(옵션)
function methodDec (target: any, methodName: string, descriptor?: PropertyDescriptor) {
    console.log(`target : ${target}`)
    console.log(`methodName : ${methodName}`)
    console.log(`target[methodName] : ${target[methodName]}`)
}
class ClassWithMethodDec {
    @methodDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print (${output}) called.`)
    }
}

// 메서드 데커레이터 사용 <== 이거 작동하지 않는다... 나중에 다시 찾아볼 것!!
function auditLogDec () {
    return  function (target: any, methodName: string, descriptor?: PropertyDescriptor) {
        console.log('=====================')
        let originalFunction = target[methodName]
        let auditFunction = function() {
            console.log('dddddd')
            console.log(`auditLogDec : override of ${methodName} called`)
            originalFunction.apply(this, arguments)
        }
        target[methodName] = auditFunction
    }
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
class ClassWithAuditDec {
    @auditLogDec()
    print(output: string) {
        console.log(`ClassWithAuditDec.print (${output}) called.`)
    }
}
let classWithAuditDec = new ClassWithAuditDec()
classWithAuditDec.print("abcdefg")
classWithAuditDec.print("hijklmnop")

// 인자 데커레이터
function parameterDec(target: any, methodName: string, parameterIndex: number) {
    console.log(`target : ${target}`)
    console.log(`methodName : ${methodName}`)
    console.log(`parameterIndex : ${parameterIndex}`)
}
class ClassWithParameterDec {
    print(@parameterDec value: string) {

    }
}
let classWithParameterDec = new ClassWithParameterDec()
classWithParameterDec.print("test")

// decorator metadata
// - 데커레이터 메타데이터는 데커레이터에 전달되는 정보를 보충하기 위해 클래스 정의에서 생성되는 메타데이터이다.
// - 데커레이터 메타데이터 기능은 emitDecoratorMetadata 옵션을 tsconfig.json 파일에 추가해 사용한다.
function metadataParameterDec(target:any, methodName: string, parameterIndex: number) {

}
class ClassWithMetaData {
    print(
        @metadataParameterDec
        id: number,
        name: string
    ): number {
        return 1000
    }
}

// 데커레이터 메타데이터 사용
// - 데커레이터에 추가 정보를 사용하려면 외부 라이브러리인 relect-metadata를 사용해야 한다.
// - reflect-metadata 라이브러를 사용하는 코드를 컴파일하기 전에 라이브러리 정의 파일을 설치해야 한다. @types/reflect-metadata
// - 메타데이터는 C#과 같은 다른 언어에서는 리플랙션이라 부르는 기능으로, 프레임워크에서 의존선 주입이나 코드 생성 분석 도구의 기초 기술이다.
import 'reflect-metadata'

function metadataParameterDec2(target:any, methodName: string, parameterIndex: number) {
    let designType = Reflect.getMetadata("design:type", target, methodName)
    console.log(`designType: ${designType}`)
    let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName)
    console.log(`designParamTypes: ${designParamTypes}`)
    let designReturnType = Reflect.getMetadata("design:returntype", target, methodName)
    console.log(`designReturnType: ${designReturnType}`)
}
class ClassWithMetaData2 {
    public print(
        @metadataParameterDec2
        id: number,
        name: string
    ): number {
        return 1000
    }
}
let classWithMetaData2 = new ClassWithMetaData2()
classWithMetaData2.print(1, "test_name")