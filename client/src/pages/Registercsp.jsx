import React from "react";
import Web3Context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { createCSP } from "../context/useContract/writeContract";
import { getAllCSP } from "../context/useContract/readContract";
const Registercsp = () => {
  const { Contract, account } = useContext(Web3Context);
 const navigate= useNavigate();
  const [Id, setId] = useState(0);
  const [Name, setName] = useState("");

  const handleView = () => {
    navigate("/viewCSP");
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Hi I am working");
    const obj = await createCSP(Contract, account.currentAccount, Name, Id);
    console.log(obj);
    // const data = await getAllCSP(Contract);
    // console.log(data);
    navigate('/csp');
  };


  return (
    <div className={styles.form}>
      {" "}
      {/* Use the CSS module class */}
      <div className={styles.formContainer}>
        {" "}
        {/* Use the CSS module class */}
        <h2 className={styles.formHeading}>Register Company</h2>
        <form onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label htmlFor="wallet">Company Wallet Address</label>
            <input
              name="wallet"
              placeholder="Enter Mobile No"
              type="text"
              value={account.currentAccount}
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="wallet">Company Name</label>
            <input
              name="CompanyName"
              placeholder="Enter Company Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="CompanyId">Company ID</label>
            <input
              name="CompanyId"
              placeholder="Enter Company ID"
              type="number"
              onChange={(e) => setId(e.target.value)}
              value={Id}
            />
          </div>
          <div className={styles.formButtons}>
            <button
              type="submit" className={styles.formButton}
              onClick={handleRegister}
            >
              Register
            </button>
            <button type="button" className={styles.formButton} onClick={handleView}>View</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registercsp;
