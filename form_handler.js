function encodeForm() {
    var str = document.getElementById("team_number").value + " " +
        getCheckedId("drivetrain") + " " + getCheckedId("intake") + " " +
        getCheckedId("indexing") + " " +
        document.getElementById("autonumber").value + " " +
        document.getElementById("autonotes").value + " " +
        getCheckedId("climbabil") + " " +
        document.getElementById("alliancenotes").value;
    document.getElementById("demo").innerHTML = str;
}

function getCheckedId(radioName) {
    var radio = document.getElementByName(radioName);
    for (const ele of radio) {
        if (ele.checked) {
            return ele.id
        }
    }
}

function reset() {
    document.getElementById("entry_form").reset();
}

function test() {
    const ele = document.getElementById("swerve");
    document.getElementById("demo").innerHTML = ele.labels[0].textContent + "<br>";
}