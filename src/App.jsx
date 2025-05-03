import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <UserProfile />
    </main>
  );
}

export default App;
