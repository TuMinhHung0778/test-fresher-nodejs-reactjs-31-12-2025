const bcrypt = require("bcrypt");

const password = "123456"; // mật khẩu gốc
const saltRounds = 10;

(async () => {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("Hashed password:", hash);
})();
