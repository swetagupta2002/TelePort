import React, { useContext } from "react";
import Web3Context from "../context";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  const { account } = useContext(Web3Context);
  console.log(account);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h1>
          <span style={{ color: "black" }}>Tele</span>
          <span style={{ color: "blue" }}>Port</span>
        </h1>
      </div>
      <button className={styles.accountButton}>
        Hey,{" "}
        {`${String(account.currentAccount).slice(0, 9)}...${String(
          account.currentAccount
        ).slice(String(account.currentAccount).length - 9)}`}
      </button>
    </nav>
  );
};

export default Navbar;
