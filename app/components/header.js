import Link from "next/link";

import { ImGithub } from "react-icons/im";
import styles from "@/app/styles/min/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>next-todos</div>
      <div className={styles.right}>
        <Link href="#"><ImGithub /></Link>
      </div>
    </div>
  );
};

export default Header;

