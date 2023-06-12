import React, { useContext } from "react";
import styles from "./User.module.css";
import { FaChevronRight } from 'react-icons/fa';
import Web3Context from "../context";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Csp = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const handleView = () => {
    navigate("/view");
  };
  return (
    <div>
      <Navbar />
      <div className={styles.user}>
        <div className={styles.usercontainer}>
          <div className={styles.userleft}>
            <div className={styles.usertext}>
              <h1 className={styles.usertextheader}>Register CSP</h1>
              <p className={styles.usertextbody}>
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Ea, veniam?
              </p>
            </div>
            <div className={styles.userbutton}>
              <button className={styles.btn1} onClick={handleRegister}>
                Register CSP <FaChevronRight className={styles.i} />
              </button>
            </div>
          </div>
          <div className={styles.userright}>
            <div className={styles.usertext}>
              <h1 className={styles.usertextheader}>View Customer</h1>
              <p className={styles.usertextbody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                itaque.
              </p>
            </div>
            <div className={styles.userbutton}>
              <button className={styles.btn2} onClick={handleView}>
                View Customers <FaChevronRight className={styles.i} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Csp;
