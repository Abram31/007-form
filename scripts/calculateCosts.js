import { costs } from "./price.js";

export const calculateCost = (distance, carClass) => {
    const price = costs.find((cost) => cost.type === `${carClass}`).price
    if (distance.includes('км')) {
        const number = distance.slice(0, -3).split(',').join('.').split('').filter((item) => item.trim() !== '').join('');
        const result = (price * Number(number).toFixed(0));
        return result;
    }
    return price;
}