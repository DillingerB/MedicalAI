const { registerUser, loginUser, getUser } = require("/src/authentication.js");

//Happy Test Cases
test ("register a new user", () => {
    const user = registerUser("John", "12345", "patient");
    expect(user.username).toBe("John");
    expect(user.password).toBe("12345");
});

test ("login with correct credentials", () => {
    registerUser("Kyle", "CartmanSux", "doctor");
    const result = loginUser("Kyle", "CartmanSux");
    expect(result.message).toBe("Login Successful");
    expect(result.user.username).toBe("Kyle");
});

//sad test cases
test("fail to register with existing username", () => {
  registerUser("tom", "pass123");
  expect(() => registerUser("tom", "newpass")).toThrow("Username already exists");
});

test("fail to login with wrong password", () => {
  registerUser("lucy", "pass");
  expect(() => loginUser("lucy", "wrong")).toThrow("Incorrect password");
});

test("fail to login non-existent user", () => {
  expect(() => loginUser("ghost", "nopass")).toThrow("User not found");
});