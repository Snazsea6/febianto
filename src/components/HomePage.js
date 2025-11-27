import React from "react";

export default function HomePage() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold mb-3">Selamat Datang di 🎧 Suify</h2>
      <p className="text-gray-300 mb-6">
        Dengarkan musik favoritmu kapan pun dan di mana pun 🎶
      </p>
      <button
        onClick={() => document.getElementById("player").play()}
        className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold"
      >
        Putar Lagu Contoh
      </button>
    </div>
  );
}