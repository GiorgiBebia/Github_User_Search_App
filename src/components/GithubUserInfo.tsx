import { IoIosPin } from "react-icons/io";
import styles from "./GithubUserInfo.module.css";
import { FaXTwitter } from "react-icons/fa6";

type UserData = {
  avatar_url: string;
  name?: string;
  bio?: string;
  login?: string;
  created_at?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  location?: string;
  twitter_username?: string;
};

type Props = {
  userData: UserData | null;
  searchUser: string;
  darkLight: boolean;
};

export function GithubUserInfo({ userData, darkLight }: Props) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const formattedDate = userData.created_at
    ? new Date(userData.created_at).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className={darkLight ? styles.info_div_dark : styles.info_div}>
      <div className={styles.image_user}>
        <img
          className={styles.user_image}
          src={userData.avatar_url}
          alt="User Avatar"
        />
        <div className={styles.user_div}>
          <div className={styles.name_username_date}>
            <div className={styles.name_username}>
              <span
                className={
                  darkLight ? styles.user_name_text_dark : styles.user_name_text
                }
              >
                {userData.name}
              </span>
              <span className={styles.username_text}>@{userData.login}</span>
            </div>
            <span
              className={
                darkLight
                  ? styles.joined_time_text_dark
                  : styles.joined_time_text
              }
            >
              Joined {formattedDate}
            </span>
          </div>
          <p className={darkLight ? styles.bio_text_dark : styles.bio_text}>
            {userData.bio === null ? `This profile has no bio` : userData.bio}
          </p>
        </div>
        <p
          className={
            darkLight ? styles.bio_text_dark_tablet : styles.bio_text_tablet
          }
        >
          {userData.bio === null ? `This profile has no bio` : userData.bio}
        </p>
      </div>
      <div className={styles.statistic_div}>
        <div
          className={
            darkLight
              ? styles.repos_followers_following_dark
              : styles.repos_followers_following
          }
        >
          <div className={styles.repos}>
            <h4
              className={darkLight ? styles.repos_text_dark : styles.repos_text}
            >
              Repos
            </h4>
            <h4
              className={
                darkLight ? styles.repos_number_dark : styles.repos_number
              }
            >
              {userData.public_repos}
            </h4>
          </div>
          <div className={styles.followers}>
            <h4
              className={
                darkLight ? styles.followers_text_dark : styles.followers_text
              }
            >
              Followers
            </h4>
            <h4
              className={
                darkLight
                  ? styles.followers_number_dark
                  : styles.followers_number
              }
            >
              {userData.followers}
            </h4>
          </div>
          <div className={styles.following}>
            <h4
              className={
                darkLight ? styles.following_text_dark : styles.following_text
              }
            >
              Following
            </h4>
            <h4
              className={
                darkLight
                  ? styles.following_number_dark
                  : styles.following_number
              }
            >
              {userData.following}
            </h4>
          </div>
        </div>
        <div className={styles.city_link_x_git}>
          <div className={styles.city_link}>
            <div className={styles.city}>
              <IoIosPin
                className={darkLight ? styles.city_icon_dark : styles.city_icon}
              />
              <span
                className={darkLight ? styles.city_text_dark : styles.city_text}
              >
                {userData.location === null
                  ? `Not Avalaible`
                  : userData.location}
              </span>
            </div>
            <div className={styles.link}>
              <img
                className={darkLight ? styles.link_icon_dark : styles.link_icon}
                src="/icon-website.svg"
                alt=""
              />
              <span
                className={darkLight ? styles.link_text_dark : styles.link_text}
              >
                https://github.blog
              </span>
            </div>
          </div>
          <div className={styles.x_git}>
            <div className={styles.x}>
              <FaXTwitter
                className={darkLight ? styles.x_icon_dark : styles.x_icon}
              />
              <span className={darkLight ? styles.x_text_dark : styles.x_text}>
                {userData.twitter_username === null
                  ? `Not Avalaible`
                  : userData.twitter_username}
              </span>
            </div>
            <div className={styles.git}>
              <img
                className={darkLight ? styles.git_icon_dark : styles.git_icon}
                src="/icon-company.svg"
                alt=""
              />
              <span
                className={darkLight ? styles.git_text_dark : styles.git_text}
              >
                @{userData.login}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
