const https = require("https");
const data = encodeURIComponent(
  "Klimcentrum Neoliet HeerlenStadionbaan 526416 CS Heerlen"
);

https.get(
  `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=
  AIzaSyCNjpgkbwg1phVeGxq5POLvqCJyZcAKWtM
  `,
  res => {
    res.on("data", d => {
      process.stdout.write(d);
    });
  }
);
