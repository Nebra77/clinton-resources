document.querySelector("#fill").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = {
    eventName: e.target.eventName.value,
    dateOf: e.target.dateOf.value
  };
  try {
    const res = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    alert("Submitted!");
  } catch (err) {
    alert("Something went wrong");
    console.error(err);
  }
});

