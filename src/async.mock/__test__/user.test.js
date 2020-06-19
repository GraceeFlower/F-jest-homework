import { register } from "../user";

jest.mock("axios");

describe("register", () => {
  const username = "username";
  const password = "password";

  test("should post user when validated", async () => {
    // TODO 19: add test here
    await expect(register(username, password)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    await expect(register(false, password)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
