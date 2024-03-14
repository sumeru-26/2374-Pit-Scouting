function encodeForm() {
    var str = document.getElementById("team_number").value + "^" +
        getCheckedId("drivetrain") + "^"+
        getCheckedId("intake") + "^" +
        getCheckedId("shooter") + "^" +
        document.getElementById("autonumber").value + "^" +
        document.getElementById("autonotes").value + "^" +
        getCheckedId("climbabil") + "^" +
        document.getElementById("alliancenotes").value;
    document.getElementById("encodedstr").innerHTML = "Encoded String: " + str;
    strToQr(str);
}

function strToQr(str) {
    document.getElementById("qrplaceholder").innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrplaceholder"),str);
}

function getCheckedId(radioName) {
    var radio = document.getElementsByName(radioName);
    var i = 0;
    for (const ele of radio) {
        if (ele.checked) {
            return i;
        }
        i++;
    }
}

function reset() {
    document.getElementById("entry_form").reset();
    document.getElementById("qrplaceholder").innerHTML = "";
    document.getElementById("encodedstr").innerHTML = "";
}

function test() {
    const ele = document.getElementById("swerve");
    document.getElementById("demo").innerHTML = ele.labels[0].textContent + "<br>";
}