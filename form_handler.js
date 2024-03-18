function encodeForm() {
    const teamNumber = document.getElementById("team_number").value;
    const drivetrain = getCheckedId("drivetrain");
    const intake = getCheckedId("intake");
    const shooter = getCheckedId("shooter");
    const autonumber = document.getElementById("autonumber").value;
    const autonotes = document.getElementById("autonotes").value;
    const climbabil = getCheckedId("climbabil");
    const alliancenotes = document.getElementById("alliancenotes").value;
    const other = document.getElementById("other").value;

    const rawStr = `${drivetrain}${intake}${shooter}${climbabil}$${teamNumber}$${autonumber}$${autonotes}$${alliancenotes}$${other}`.toUpperCase();
    document.getElementById("rawstr").innerHTML = "Raw String: " + rawStr;
    strToQr(rawStr);
}

function strToQr(str) {
    const qrPlaceholder = document.getElementById("qrplaceholder");
    if (qrPlaceholder) {
        qrPlaceholder.innerHTML = "";
        new QRCode(qrPlaceholder, str);
    }
}

function getCheckedId(radioName) {
    const radio = document.getElementsByName(radioName);
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return i+1;
        }
    }
    return 0;
}

function reset() {
    document.getElementById("entry_form").reset();
    document.getElementById("qrplaceholder").innerHTML = "";
    document.getElementById("encodedstr").innerHTML = "";
}