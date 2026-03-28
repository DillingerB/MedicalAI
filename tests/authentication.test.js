const { registerUser, loginUser, getUser } = require("/src/authentication.js");

//Happy Test Cases
test ("register a new user", () => {
    const user = registerUser("John", "12345678", "patient");
    expect(user.username).toBe("John");
    expect(user.password).toBe("12345678");
});

test ("login with correct credentials", () => {
    registerUser("Kyle", "CartmanSux", "doctor");
    const result = loginUser("Kyle", "CartmanSux");
    expect(result.message).toBe("Login Successful");
    expect(result.user.username).toBe("Kyle");
});

//sad test cases
test("fail to register with existing username", () => {
  registerUser("Tom", "pass1234");
  expect(() => registerUser("Tom", "newpass23")).toThrow("Username already exists");
});

test("fail to login with wrong password", () => {
  registerUser("Lucy", "password");
  expect(() => loginUser("Lucy", "wrongperson")).toThrow("Incorrect password");
});

test("fail to login non-existent user", () => {
  expect(() => loginUser("Ghost", "nopassed")).toThrow("User not found");
});

test("Password too short", () => {
  expect(() => registerUser("Timmy", "Pass")).toThrow("Password must be greater than 8 characters");
});

test("Password too long", () => {
  expect(() => registerUser(
    "Tommy", 
    "1234567890qwertyuioplkjhgfdsazxcvbnmmnbvcxzasdfghjklpoiuytrewq12345678900987654321qwertyuioplkjhgfdsazxcvbnm"
  )).toThrow("Password cannot be over 50 characters")
});