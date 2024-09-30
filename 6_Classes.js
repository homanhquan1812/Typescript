var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fullName, age, single) {
        this.fullName = fullName;
        this.age = age;
        this.single = single;
    }
    Person.prototype.showInformation = function () {
        if (this.single) {
            console.log("Your name is ".concat(this.fullName, " and you're ").concat(this.age, ". HAHAHAHAHA!!!!!!"));
        }
        else {
            console.log("Your name is ".concat(this.fullName, " and you're ").concat(this.age, ". Congrats, I'm happy for you T_T."));
        }
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (ageInput) {
        if (ageInput < 18) {
            throw new Error('Age should be above 18.');
        }
        else {
            this.age = ageInput;
        }
    };
    return Person;
}());
;
var SingleStatus = /** @class */ (function (_super) {
    __extends(SingleStatus, _super);
    function SingleStatus(fullName, age, single, loversName) {
        // Call the parent class constructor using 'super'
        var _this = _super.call(this, fullName, age, single) || this; // Invokes Person's constructor
        _this.loversName = loversName;
        return _this;
    }
    SingleStatus.prototype.showLoversInformation = function () {
        return "Your lover's name is ".concat(this.loversName);
    };
    return SingleStatus;
}(Person));
var person1 = new Person('Ho Manh Quan', 24, false);
person1.showInformation();
console.log("Current age: ".concat(person1.getAge())); // Output: 24
var singlePerson = new SingleStatus('Ho Manh Quan', 24, true, 'Sussy Girl');
console.log(singlePerson.showLoversInformation());
try {
    person1.setAge(30);
    console.log("Current age: ".concat(person1.getAge())); // Output: 30
}
catch (error) {
    console.error("Error: ", error);
}
