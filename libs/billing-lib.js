export const calculateCost = storage => {
    const rate = storage <= 50 ? 4 : storage <= 100 ? 2 : 1;
    return rate * storage / 10;
};