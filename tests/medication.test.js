const { addMedication } = require("/src/medication.js");

//happy test case
test("should add medicaiton with frequencyHours", () => {
    const med = addMedication(1, "Tylenol", "325mg", null, 6);
    expect(med.frequencyHours).toBe(6);
    expect(med.frequencyLabel).toBeNull();
});

test("everything works, with frequency date", () => {
    const med = addMedication(4, "Ibuprofen", "150mg", "Weekly", null);
    expect(med.name).toBe("Ibuprofen");
    expect(med.dosage).toBe("150mg");
    expect(med.frequencyLabel).toBe("Weekly");
    expect(med.frequencyHours).toBeNull();
});

//sad test cases
test("should throw an error due to no frequency", () => {
    expect(() =>
        addMedication(2, "Ibprofin", "1000mg", null, null)).toThrow("Provide either Date OR Hours, not both");
});

test("throw error for no name", () => {
    expect(() => addMedication(3, "", "200mg", "Morning", null)).toThrow("Medication name required");
});