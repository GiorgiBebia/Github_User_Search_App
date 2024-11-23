import { useEffect, useState } from "react";
import { GithubUserInfo } from "./GithubUserInfo";
import { Header } from "./Header";
import styles from "./Main.module.css";
import { Search } from "./Search";

type Props = {
  darkLight: boolean;
  setDarkLight: (value: boolean) => void;
};

export function Main({ darkLight, setDarkLight }: Props) {
  const [userData, setUserData] = useState<any>(null);
  const [searchUser, setSearchUser] = useState<string>("GiorgiBebia");

  const [correctUser, setCorrectUser] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://api.github.com/users/${searchUser}`);
        const data = await res.json();
        if (res.ok) setUserData(data);
        res.ok ? setCorrectUser(true) : setCorrectUser(false);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [searchUser]);

  return (
    <div className={styles.div_size}>
      <Header darkLight={darkLight} setDarkLight={setDarkLight} />
      <Search
        searchUser={searchUser}
        setSearchUser={setSearchUser}
        correctUser={correctUser}
        darkLight={darkLight}
      />
      <GithubUserInfo
        userData={userData}
        searchUser={searchUser}
        darkLight={darkLight}
      />
    </div>
  );
}
