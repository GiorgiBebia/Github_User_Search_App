import { MdDarkMode } from "react-icons/md";
import styles from "./Header.module.css";
import { IoSunny } from "react-icons/io5";

type Props = {
  darkLight: boolean;
  setDarkLight: (value: boolean) => void;
};

export function Header({ darkLight, setDarkLight }: Props) {
  return (
    <div className={styles.header_div}>
      <h2 className={darkLight ? styles.logo_white : styles.logo}>devfinder</h2>
      {darkLight ? (
        <div className={styles.light_div} onClick={() => setDarkLight(false)}>
          <span className={styles.light_text}>LIGHT</span>
          <IoSunny className={styles.light_logo} />
        </div>
      ) : (
        <div className={styles.dark_div} onClick={() => setDarkLight(true)}>
          <span className={styles.dark_text}>DARK</span>
          <MdDarkMode className={styles.dark_logo} />
        </div>
      )}
    </div>
  );
}
