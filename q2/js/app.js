function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;
  var c = username.substring(0,1);
  var len = username.length;

  if ((len > 24 || len < 8)
  || (username.indexOf(" ",0) != -1)
  || ((c >= '0')&&(c <= '9'))){
      alert("Please enter a valid username.");

      return false;
    }

    return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var c = password.substring(0,1);
  var len = password.length;

  if ((len < 8 || len > 24)
  || (password.indexOf(" ",0) != -1)
  || ((c >= '0')&&(c <= '9'))){
    alert("Please enter a valid password.");

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}
