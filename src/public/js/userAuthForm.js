var formHandler = async () => {
  var form = document.getElementById("auth-form");

  return form.addEventListener("submit", async (e) => {
    e.preventDefault();

    var formData = {};

    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });

    var response = await fetch("/auth/user/login/check", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Неверно");
      return;
    }

    var { redirect, login } = await response.json();

    if (redirect) {
      window.location.href = "/orderinfo/orders/" + login;
    } else {
      alert("Неверно");
      window.location.href = "/auth/user/login";
    }
  });
};

formHandler().catch((err) => alert("error: ", err));
