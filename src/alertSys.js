const alerts = [];

//Makes alert
function generateAlert(patientId, interaction) {

    //if there is no concerning interaction, alert will not scream at you that you about to die.
    if (!interaction) return null;

    const alert = {
        patientId,
        drugs: interaction.drugs,
        severity: interaction.severity
    };

    alerts.push(alert);
    return alert;
}

//pushes alert to patient
//NOTE: real code will add the Doctor as well
function getAlerts(patientId) {
    return alerts.filter(a => a.patientId === patientId);
}

module.exports = {
    generateAlert, 
    getAlerts
}