var formHandler = async () => {
  var form = document.getElementById("auth-form");

  return form.addEventListener("submit", async (e) => {
    e.preventDefault();

    var formData = {};

    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });

    var response = await fetch("/auth/user/check", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 401) {
      alert("Введены неверные данные");
      return;
    }

    var { redirect, redirectUrl } = await response.json();

    if (redirect) {
      window.location.href = redirectUrl;
    } else {
      alert("Неверно");
      window.location.href = "/auth/user/";
    }
  });
};

formHandler();
