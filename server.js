const express = require("express");
const cors = require("cors");
var admin = require("firebase-admin");

const app = express();

app.use(cors());
app.use(express.json());

var serviceAccount = require("./firebaseServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.post("/submit", async (req, res) => {
  try {
    const docRef = await db.collection("submissions").add(req.body);
    console.log("Saved with ID:", docRef.id);
    res.send("Saved to database!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data");
  }
});

app.get("/submissions", async (req, res) => {
  try {
    const snapshot = await db.collection("submissions").get();
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));