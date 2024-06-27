

import { RPNCal } from "../main/rpncalcul";

describe("RPN Calculator", () => {
  test("evaluates '20 5 /' to 4", () => {
    expect(RPNCal("20 5 /")).toBe(4);
  });

  test("evaluates '4 2 + 3 -' to 3", () => {
    expect(RPNCal("4 2 + 3 -")).toBe(3);
  });

  test("evaluates '3 5 8 * 7 + *' to 141", () => {
    expect(RPNCal("3 5 8 * 7 + *")).toBe(141);
  });

  test("evaluates '9 SQRT' to 3", () => {
    expect(RPNCal("9 SQRT")).toBe(3);
  });

  test("evaluates '5 3 4 2 9 1 MAX' to 9", () => {
    expect(RPNCal("5 3 4 2 9 1 MAX")).toBe(9);
  });

  test("evaluates '4 5 MAX 1 +' to 6", () => {
    expect(RPNCal("4 5 MAX 1 +")).toBe(6);
  });
});
      

