import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";
import CoffeeSel from "./CoffeeSel";
import { useState, useEffect } from "react";

export default function App() {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <>
        <hr />
        <h2>Selected language: {lang} </h2>
        <LangSwitcher value={lang} onSelect={setLang} />
      </>
      <CoffeeSel value={coffeeSize} onSelect={setCoffeeSize} />
    </div>
  );
}
