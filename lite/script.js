validateForm = () => {
    var x = document.forms["myForm"]["name"].value;
    if (x == "abc" || x == "asd") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["number"].value;
    // alert(typeof(y))

    var phoneno = /^\d{10}$/;
    if (y.match(phoneno)) {
        return true;
    }
    else {
        alert("Phone number not valid. 10 digits must be there in a number");
        return false;
    }
}