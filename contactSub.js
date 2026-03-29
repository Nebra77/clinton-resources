document.querySelector("#adding").addEventListener("submit", async (e) => {
    e.preventDefault();
      const formData = {
        type: "Addition",
        eventName: e.target.eventName.value,
        dateOf: e.target.dateOf.value,
        oversee: e.target.oversee.value,
        desc: e.target.desc.value,
        contact: e.target.contactAdd.value,

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

document.querySelector("#messageForm").addEventListener("submit", async (e) => {
    e.preventDefault();
      const formData = {
        type: "Message",
        mess: e.target.mess.value,
        contact: e.target.contactMess.value,

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
