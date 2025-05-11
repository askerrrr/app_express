var sendAuthData = async (data) => {
  var res = await fetch("/auth/admin/check", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

var adminAuthForm = async () => {
  var form = document.getElementById("auth-form");

  return form.addEventListener("submit", async (e) => {
    e.preventDefault();

    var formData = {};

    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });

    var res = await sendAuthData(formData);

    if (!res.ok) {
      return alert("Произошла ошибка при авторизации");
    }

    var { redirectUrl } = await res.json();

    window.location.href = redirectUrl;
  });
};

adminAuthForm();
