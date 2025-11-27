import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "suifydb",
});

db.connect((err) => {
  if (err) console.log("❌ Gagal konek ke MySQL:", err);
  else console.log("✅ Terhubung ke MySQL (XAMPP)");
});