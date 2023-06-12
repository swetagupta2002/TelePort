import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import Navbar from "../components/Navbar";
import { FaChevronRight } from "react-icons/fa";
const User = () => {
  const navigate = useNavigate();
  const handleIssue = () => {
    navigate("/issue");
  };
  const handlePort = () => {
    navigate("/port");
  };
  return (
    <div>
      <Navbar />
      <div className={styles.user}>
        <div className={styles.usercontainer}>
          <div className={styles.userleft}>
            <div className={styles.usertext}>
              <h1 className={styles.usertextheader}>Issue New Number</h1>
              <p className={styles.usertextbody}>
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Ea, veniam?
              </p>
            </div>
            <div className={styles.userbutton}>
              <button className={styles.btn1} onClick={handleIssue}>
                Issue New Number <FaChevronRight className={styles.i} />
              </button>
            </div>
          </div>
          <div className={styles.userright}>
            <div className={styles.usertext}>
              <h1 className={styles.usertextheader}>Port Number</h1>
              <p className={styles.usertextbody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                itaque.
              </p>
            </div>
            <div className={styles.userbutton}>
              <button className={styles.btn2} onClick={handlePort}>
                Port Number <FaChevronRight className={styles.i} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
