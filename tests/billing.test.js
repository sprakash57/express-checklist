import { calculateCost } from "../libs/billing-lib";

test('should be in lowest tier', () => {
    const storage = 10;
    const cost = 4;
    const expectedCost = calculateCost(storage);
    expect(cost).toEqual(expectedCost);
})

test('should be in middle tier', () => {
    const storage = 60;
    const cost = 12;
    const expectedCost = calculateCost(storage);
    expect(cost).toEqual(expectedCost);
})

test('should be in highest tier', () => {
    const storage = 150;
    const cost = 15;
    const expectedCost = calculateCost(storage);
    expect(cost).toEqual(expectedCost);
})


