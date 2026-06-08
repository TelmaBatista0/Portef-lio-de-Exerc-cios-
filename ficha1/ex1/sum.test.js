const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("adds -1 + 2 to equal 1", () => {
    expect(sum(-1, 2)).toBe(1);
});

test("adds 0.1 + 0.2 to approximately equal 0.3", () => {
    //Using toBeCloseTo for floating-point precision
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test("returns NaN for non-number inputs", () => {
    expect(sum("a", 2)).toBeNaN();
    expect(sum(null, undefined)).toBeNaN();
});