const {
	addNumbers,
	subtractNumbers,
	multiplyNumbers,
	divideNumbers
} = require("./math.js");

test("Test addNumbers", () => {
	const result = addNumbers(20, 22);
	const expectation = 42;
	expect(result).toBe(expectation);
});
