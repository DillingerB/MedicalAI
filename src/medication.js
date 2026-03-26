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

    //screaming in french
    //this shows in what order we need to make the test cases.
    const med = {name, dosage, frequencyLabel: frequencyLabel || null, frequencyHours: frequencyHours || null};
    patientMedications[patientId].push(med);

    return med;
}

//this gets the patient ID, currently too tired/lazy to make one right now, if you wanna make one be my guess, but if not IDC.
function getPatientMedications(patientId) {
    return patientMedications[patientId] || [];
}

module.exports = {
    addMedication,
    getPatientMedications
};