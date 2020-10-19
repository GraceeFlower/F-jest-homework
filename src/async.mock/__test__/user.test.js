import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  const username = "username";
  const password = "password5";
  const invalidName = "";

  test("should post user when validated", async () => {
    // TODO 19: add test here
    await expect(register(username, password)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);

    await expect(register(invalidName, password)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
