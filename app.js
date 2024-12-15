//Using JWT, to encrypt our data. (payload)

//We encrypt the data using a secret key

//Data + key = Encrypted text
//This is encryption

//Decryption:
//Encrypted text + key = Data

//Data is called payload

import jwt from "jsonwebtoken";

function encryption() {
  try {
    let data = {
      name: "Saad",
      age: 20,
      isALive: true,
    };

    let secretKey = "12345"; //declared in .env or config

    let token = jwt.sign(data, secretKey, { expiresIn: "1h" });

    console.log(token);
  } catch (error) {
    console.log(error);
  }
}
encryption();
