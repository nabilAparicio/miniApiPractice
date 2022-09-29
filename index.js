const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.status(200).json({
    message: "utiliza los endpoints correctos para poder desplegar los datos",
  });
});
app.get("/me", (req, res) => {
  res.status(200).json({
    name: "orlando nabil aparicio",
    edad: 25,
    pais: "Panama el mejor pais de latam",
  });
});
app.post("/metas", (req, res) => {
  res.status(200).json({
    hobbies: ["league of legends", "code", "minecraft como nino rata"],
  });
});
app.patch("/metas", () => {
  res.status(200).json({
    metas: [
      "hablar ingles de forma fluida",
      "aumentar mi inteligencia emocional",
    ],
  });
});
app.put("/business", (req, res) => {
  res.status(200).json({
    business: ["vercel", "globant", "tata consulting"],
  });
});

app.listen(8001, () => {
  console.log("live on port 8001");
});
