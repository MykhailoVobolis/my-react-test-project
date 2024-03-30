// import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function App() {
  const [clicks, setClicks] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = window.localStorage.getItem("saved-clicks");

    // Якщо там щось є, повертаємо це
    // значення як початкове значення стану
    if (savedClicks !== null) {
      return savedClicks;
    }

    // У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}
