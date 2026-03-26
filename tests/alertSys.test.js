//NOTE: Tylenol does not cause Autism, just makes it stronger.

const { generateAlert, getAlerts } = require("/src/alertSys.js");

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

test("should return null if no interaction", () => {
  const alert = generateAlert(1, null);
  expect(alert).toBeNull();
});
