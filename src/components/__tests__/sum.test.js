import { sum } from "../sum";

test("sum of two positie numbers", () => {
    expect(sum(2, 5)).not.toBe(5)
})