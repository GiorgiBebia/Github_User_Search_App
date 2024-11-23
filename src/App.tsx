import { useState } from "react";
import styles from "./App.module.css";
import { Main } from "./components/Main";

function App() {
  const [darkLight, setDarkLight] = useState<boolean>(false);

  return (
    <div
      className={
        darkLight ? styles.background_black : styles.desktop_background
      }
    >
      <Main darkLight={darkLight} setDarkLight={setDarkLight} />
    </div>
  );
}

export default App;
