function reset() {
    document.getElementById("entry_form").reset();
}

function test() {
    const ele = document.getElementById("swerve");
    document.getElementById("demo").innerHTML = ele.labels[0].textContent + "<br>";
}