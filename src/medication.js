/**
 * GROUP MEMBERS:
 * Dillinger Bennett
 * Sameer Fazlani
 * Wyatt Alexander
 * Caleb Rollston
 * Wattana Keosombath
 * Garrett Kellner
 */
const patientMedications = {};

function addMedication(patientId, name, dosage, frequencyLabel, frequencyHours) {

    //throw error if no name is presented
    if (!name) {
        throw new Error("Medication name required");
    }

    //if either no date or hour or both are applied, throws error
    if ((!frequencyLabel && !frequencyHours) || (frequencyLabel && frequencyHours)) {
        throw new Error("Provide either Date OR Hours, not both");
    }

    //throw Error if the hour is present but it is equal to or less than 0
    if (frequencyHours && frequencyHours <= 0) {
        throw new Error("Hours must be positive");
    }

    //sets patient ID to null if none is given.
    if (!patientMedications[patientId]) {
        patientMedications[patientId] = [];
    }

    //this shows in what order we need to make the test cases.
    const med = {name, dosage, frequencyLabel: frequencyLabel || null, frequencyHours: frequencyHours || null};
    patientMedications[patientId].push(med);

    return med;
}

//this gets the patient ID
//currently does nothing and is set here for future backend when emplementing database to code.
function getPatientMedications(patientId) {
    return patientMedications[patientId] || [];
}

//This is exporting functions for test cases.
module.exports = {
    addMedication,
    getPatientMedications
};