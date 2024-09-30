// Function
const sum = (a: number, b: number, c?: number): number => { // No need to add 'number' before =>, but you should check function type.
    return a + b;
};

const fullName = (lastName: string, middleName: string, firstName: string) => {
    return `${lastName} ${middleName} ${firstName}`;
};

const upperCase = (c: string) => {
    return c.toUpperCase();
};

// Void (Used when this function doesn't have "return", and no need to add "void" here)
const handleLogs = (message: string): void => {
    console.log(message);
};

handleLogs("Test this void.");

console.log(sum(1, 2));
/* console.log(sum(1, 'Name')); // Error */
console.log(fullName('Ho', 'Manh', 'Quan'));
console.log(upperCase('uppercase'));