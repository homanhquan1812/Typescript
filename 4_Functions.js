// Function
var sum = function (a, b, c) {
    return a + b;
};
var fullName = function (lastName, middleName, firstName) {
    return "".concat(lastName, " ").concat(middleName, " ").concat(firstName);
};
var upperCase = function (c) {
    return c.toUpperCase();
};
// Void (Used when this function doesn't have "return", and no need to add "void" here)
var handleLogs = function (message) {
    console.log(message);
};
handleLogs("Test this void.");
console.log(sum(1, 2));
/* console.log(sum(1, 'Name')); // Error */
console.log(fullName('Ho', 'Manh', 'Quan'));
console.log(upperCase('uppercase'));
