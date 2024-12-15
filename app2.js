import jwt from "jsonwebtoken";

function decryption() {
  try {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FhZCIsImFnZSI6MjAsImlzQUxpdmUiOnRydWUsImlhdCI6MTczNDIzOTAyNiwiZXhwIjoxNzM0MjQyNjI2fQ.ZuYl5fmrqSp8wzXAMLozli6P_sEUAG99v3s9cYcUHB4";

    let secretKey = "12345";

    let userData = jwt.verify(token, secretKey);
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
}
decryption();
