import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Booking from "./components/Booking";

function App() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <UserProfile />
      <Booking/>
    </main>
  );
}

export default App;
