const { generateAlert, getAlerts } = require("/src/alertSys.js");

//happy test cases
test("Should generate alert", () => {
    const interaction = {
        drugs: ["Tylenol", "Ibuprofen"],
        severity: "Mild"
    };

    const alert = generateAlert(1, interaction);
    expect(alert).not.toBeNull();
});

test("should store alert for patient", () => {
  const interaction = {
    drugs: ["Ibuprofen", "Aspirin"],
    severity: "High"
  };

  generateAlert(2, interaction);

  const alerts = getAlerts(2);
  expect(alerts.length).toBe(1);
});

//this can count as a "sad" case, but it really is saying that there is no interaction,
//meaning nothing bad has currently been reported.
test("should return null if no interaction", () => {
  const alert = generateAlert(1, null);
  expect(alert).toBeNull();
});
