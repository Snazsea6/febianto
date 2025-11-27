import React, { useState } from "react";
import HomePage from "./components/HomePage";
import PlaylistPage from "./components/PlaylistPage";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "playlist":
        return <PlaylistPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      {/* Navbar */}
      <header className="bg-green-500 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => setPage("home")}>
          🎧 Suify
        </h1>
        <nav className="space-x-4">
          <button onClick={() => setPage("home")} className="hover:underline">Beranda</button>
          <button onClick={() => setPage("playlist")} className="hover:underline">Playlist</button>
          <button onClick={() => setPage("profile")} className="hover:underline">Profil</button>
        </nav>
      </header>

      {/* Halaman aktif */}
      <main className="flex-1 p-6">{renderPage()}</main>

      {/* Pemutar Musik */}
      <footer className="bg-neutral-800 p-4 text-center">
        <audio id="player" controls className="w-full">
          <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
        </audio>
      </footer>
    </div>
  );
}