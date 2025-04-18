var adminAuthForm = async () => {
  var form = document.getElementById("auth-form");

  return form.addEventListener("submit", async (e) => {
    e.preventDefault();

    var formData = {};

    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });

    var response = await fetch("/auth/admin/check", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return;
    }

    var json = await response.json();

    return json.redirect
      ? (window.location.href = "/")
      : (window.location.href = "/auth/admin");
  });
};

adminAuthForm().catch((err) => alert("error: ", err));
