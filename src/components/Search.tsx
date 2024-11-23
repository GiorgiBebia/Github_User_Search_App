import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css";
import { useState } from "react";

type Props = {
  searchUser: string | null;
  correctUser: boolean;
  darkLight: boolean;
  setSearchUser: (value: string) => void;
};

export function Search({ setSearchUser, correctUser, darkLight }: Props) {
  const [enterUser, setEnterUser] = useState<string | any>(null);

  function handleClicked() {
    setSearchUser(enterUser);
  }

  return (
    <div className={darkLight ? styles.search_div_black : styles.search_div}>
      <CiSearch className={styles.search_icon} />
      <input
        className={`
          ${styles.search_input} 
          ${!correctUser && styles.search_input_width} 
          ${darkLight && styles.search_input_black}
          `}
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => setEnterUser(e.target.value)}
      />
      <span
        className={
          correctUser ? styles.no_result_text : styles.no_result_text_show
        }
      >
        No results
      </span>
      <button className={styles.search_button} onClick={handleClicked}>
        Search
      </button>
    </div>
  );
}
