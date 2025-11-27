import { useState, useEffect } from "react";

export default function PlaylistPage() {
  const [playlist, setPlaylist] = useState([]);
  const [newSong, setNewSong] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/playlists")
      .then((res) => res.json())
      .then(setPlaylist);
  }, []);

  const addSong = async () => {
    await fetch("http://localhost:5000/api/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newSong, artist }),
    });
    setNewSong("");
    setArtist("");
    const updated = await fetch("http://localhost:5000/api/playlists").then((res) => res.json());
    setPlaylist(updated);
  };

  const removeSong = async (id) => {
    await fetch(`http://localhost:5000/api/playlists/${id}`, { method: "DELETE" });
    setPlaylist(playlist.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-neutral-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">🎵 Playlist Kamu</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          placeholder="Judul lagu..."
          className="flex-1 p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none"
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Nama artis..."
          className="flex-1 p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none"
        />
        <button
          onClick={addSong}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
        >
          Tambah
        </button>
      </div>

      <ul className="space-y-2">
        {playlist.map((song) => (
          <li key={song.id} className="flex justify-between items-center bg-neutral-700 px-4 py-2 rounded">
            <span><strong>{song.title}</strong> – {song.artist}</span>
            <button
              onClick={() => removeSong(song.id)}
              className="text-red-400 hover:text-red-500"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}