import React, { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("Test");
  const [email, setEmail] = useState("user@suify.com");
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => setEditing(!editing);

  return (
    <div className="max-w-md mx-auto mt-10 bg-neutral-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">👤 Profil Pengguna</h2>

      {editing ? (
        <>
          <label className="block mb-2">Nama:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-neutral-700 border border-neutral-600"
          />
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-neutral-700 border border-neutral-600"
          />
          <button
            onClick={toggleEdit}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Simpan
          </button>
        </>
      ) : (
        <>
          <p className="mb-2">
            <strong>Nama:</strong> {name}
          </p>
          <p className="mb-6">
            <strong>Email:</strong> {email}
          </p>
          <button
            onClick={toggleEdit}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Edit Profil
          </button>
        </>
      )}
    </div>
  );
}