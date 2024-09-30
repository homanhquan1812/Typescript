class Person {
    public fullName: string;
    private age: number;
    protected single: boolean;

    constructor(fullName: string, age: number, single: boolean) {
        this.fullName = fullName;
        this.age = age;
        this.single = single;
    }

    showInformation() {
        if (this.single) {
            console.log(`Your name is ${this.fullName} and you're ${this.age}. HAHAHAHAHA!!!!!!`);
        } else {
            console.log(`Your name is ${this.fullName} and you're ${this.age}. Congrats, I'm happy for you T_T.`);
        }
    }

    getAge() {
        return this.age;
    }

    setAge(ageInput: number) {
        if (ageInput < 18) {
            throw new Error('Age should be above 18.');
        } else {
            this.age = ageInput;
        }
    }
};

class SingleStatus extends Person {
    private loversName: string;

    constructor(fullName: string, age: number, single: boolean, loversName: string) {
        // Call the parent class constructor using 'super'
        super(fullName, age, single); // Invokes Person's constructor
        this.loversName = loversName;
    }

    showLoversInformation() {
        return `Your lover's name is ${this.loversName}`;
    }
}

let person1 = new Person('Ho Manh Quan', 24, false);
person1.showInformation();
console.log(`Current age: ${person1.getAge()}`); // Output: 24

let singlePerson = new SingleStatus('Ho Manh Quan', 24, true, 'Sussy Girl');
console.log(singlePerson.showLoversInformation());

try {
    person1.setAge(30);
    console.log(`Current age: ${person1.getAge()}`); // Output: 30
} catch (error) {
    console.error("Error: ", error);
}