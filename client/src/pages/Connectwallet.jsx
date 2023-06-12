import React, { useContext } from "react";
import Web3Context from "../context";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Mainpage.module.css";
import { FaChevronRight } from "react-icons/fa";

const Connectwallet = () => {
  const navigate = useNavigate();
  const { connectWallet, checkIfWalletIsConnected, account } =
    useContext(Web3Context);
  const handleConnect = () => {
    connectWallet();
    checkIfWalletIsConnected();
    
    console.log("Account Length", account);
    navigate("/main");
  };
  return (
    <div>
      {/* <div className={styles.welcomeContainer}> */}
      <div className={styles.mainpageContainer}>
        <div className={styles.mainpageLeft}>
          {" "}
          {/* Use the CSS module class */}
          <div className={styles.mainpageText}>
            <div className={styles.logo}>
              <h1>
                <span style={{ color: "black" }}>Tele</span>
                <span style={{ color: "blue" }}>Port</span>
              </h1>
            </div>
            <h1 className={styles.welcomeText}>Welcome to our website!</h1>
          </div>
          <div className={styles.mainpageButtons}>
            <button className={styles.btn1} onClick={handleConnect}>
              ConnectWallet💵 <FaChevronRight className={styles.i} />
            </button>
          </div>
        </div>
        <div className={styles.mainpageRight}>
          <img src="https://res.cloudinary.com/dsmiomcjv/image/upload/v1686378114/teleport_r1zls0.jpg" alt =""/>
        </div>
      </div>
    </div>
  );
};

export default Connectwallet;
