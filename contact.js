function validateForm() {
  var name = document.querySelector(
    'input[type="text"][placeholder="Name"]'
  ).value;
  var email = document.querySelector(
    'input[type="email"][placeholder="Email"]'
  ).value;
  var address = document.querySelector(
    'input[type="text"][placeholder="Address"]'
  ).value;
  var message = document.querySelector(".textar").value;

  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  if (email === "") {
    alert("Please enter your email");
    return false;
  }

  if (address === "") {
    alert("Please enter your address");
    return false;
  }

  if (message === "") {
    alert("Please enter your message");
    return false;
  }

  return true;
}

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});
