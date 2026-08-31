import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>Hello from Vite</h1>
      <Greeting name="A" />
      <UserCard name="A" role="Frontend Engineer" />
      <UserCard name="B" role="Fullstack Engineer" />
      <Footer />
    </div>
  );
}

export default App;
