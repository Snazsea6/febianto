import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ambil semua lagu
app.get("/api/playlists", (req, res) => {
  const sql = "SELECT * FROM playlists";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Tambah lagu baru
app.post("/api/playlists", (req, res) => {
  const { title, artist } = req.body;
  const sql = "INSERT INTO playlists (title, artist) VALUES (?, ?)";
  db.query(sql, [title, artist], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Lagu berhasil ditambahkan!", id: result.insertId });
  });
});

// Hapus lagu berdasarkan id
app.delete("/api/playlists/:id", (req, res) => {
  const sql = "DELETE FROM playlists WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "🗑️ Lagu berhasil dihapus!" });
  });
});

app.listen(5000, () => console.log("🚀 Server berjalan di http://localhost:5000"));