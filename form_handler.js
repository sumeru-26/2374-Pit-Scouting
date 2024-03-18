function encodeForm() {
    const teamNumber = document.getElementById("team_number").value;
    const drivetrain = getCheckedId("drivetrain");
    const intake = getCheckedId("intake");
    const shooter = getCheckedId("shooter");
    const autonumber = document.getElementById("autonumber").value;
    const autonotes = document.getElementById("autonotes").value;
    const climbabil = getCheckedId("climbabil");
    const alliancenotes = document.getElementById("alliancenotes").value;

    const rawStr = `${teamNumber}^${drivetrain}^${intake}^${shooter}^${autonumber}^${autonotes}^${climbabil}^${alliancenotes}`;
    //const encodedStr = encode(rawStr);

    document.getElementById("rawstr").innerHTML = "Raw String: " + rawStr;
    //document.getElementById("encodedstr").innerHTML = "Encoded String: " + encodedStr;
    strToQr(encodedStr);
}

function encode(str) {
    LZMA.compress(str, 1,
        function (result) {
            document.getElementById("encodedstr").innerHTML = "Encoded String: " + result;
            strToQr(result);
        },
        function on_progress(percent) {
            document.getElementById("encodeper").innerHTML = Math.round(percent * 100) + "%";
        });
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
            return i;
        }
    }
}

function reset() {
    document.getElementById("entry_form").reset();
    document.getElementById("qrplaceholder").innerHTML = "";
    document.getElementById("encodedstr").innerHTML = "";
}

function test() {
    const ele = document.getElementById("swerve");
    const demo = document.getElementById("demo");
    if (ele && demo) {
        demo.innerHTML = ele.labels[0].textContent + "<br>";
    }
}
