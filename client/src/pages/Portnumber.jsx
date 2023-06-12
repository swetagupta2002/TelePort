import React, { useContext, useState } from "react";
import Web3Context from "../context";
import { transferMobileNo } from "../context/useContract/writeContract";
import styles from './Form.module.css';
import {
  getCSPByAddress,
  getCSPIdFromName,
  getCSPByID,
  getMobileNoDetails,
} from "../context/useContract/readContract";

const Portnumber = () => {
  const { Contract, account } = useContext(Web3Context);
  const [Old, setOld] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState(0);

  //const [NewAddress,setNewAddress]=useState("");
  const handlePort = (e) => {
    // find the csp address from csp name
    // token id from mobile no

    //console.log(_tokenId);
    //  const promise1=getCSPIdFromName(Contract,Name);
    //   promise1.then((_cspId)=>{
    //     const promise2=getCSPByID(Contract,_cspId);
    //     promise2.then((_csp)=>{
    //       const _cspAddress=_csp.CSPAddress;
    //       const promise= getMobileNoDetails(Contract,Number);
    //         promise.then((_mobile)=>{
    //         const _tokenId=_mobile.tokenId;
    //         const promise3=transferMobileNo(Contract,account.currentAccount,Name,Number,_cspAddress,_tokenId);
    //         promise3.then(()=>{
    //           alert("Mobile Number Ported Successfully");
    //         })
    //   })
    //     })
    //   })

    // getCSPIdFromName(Contract,Name).then((_cspId)=>{
    //   getCSPByID(Contract,_cspId).then((_csp)=>{
    //     const _cspAddress=_csp.CSPAddress;
    //      getMobileNoDetails(Contract,Number).then((_mobile)=>{
    //       const _tokenId=_mobile.tokenId;
    //       transferMobileNo(Contract,account.currentAccount,Name,Number,_cspAddress,_tokenId).then(()=>{
    //         alert("Mobile Number Ported Successfully");
    //       })
    //     })
    //   })
    // })
    e.preventDefault();
    transferMobileNo(Contract, account.currentAccount, Old, Number, Name).then(
      (res) => {
        console.log(res);
        alert(
          "Mobile Number " +
            Number +
            "Ported Successfully from " +
            Old +
            " to " +
            Name +
            ""
        );
      }
    );
  };
  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        {" "}
        {/* Use the CSS module class */}
        <h2 className={styles.formHeading}>Port Number</h2>
        {/* Use the CSS module class */}
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="wallet">Customer Wallet Address</label>
            <input
              name="wallet"
              placeholder="Wallet Address"
              type="text"
              value={account.currentAccount}
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="wallet">Mobile Number</label>
            <input
              name="MobileNo"
              placeholder="Enter Mobile No"
              type="text"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              value={Number}
            />
            {/* <label
                  htmlFor="wallet"
                  className="w-2/4 p-2 text-white text-left"
                >
                Token Id
                </label>
                <input
                  name="token Id"
                  placeholder="Enter Mobile No"
                  type="number"
                  className="w-2/4 p-2 rounded-md"
                  onChange={(e)=>{setTokenId(e.target.value)}}
                  value={TokenId}                 
                /> */}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="seller">Company From Port</label>
            <input
              name="seller"
              placeholder="Enter Company Name"
              type="text"
              onChange={(e) => {
                setOld(e.target.value);
              }}
              value={Old}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="seller">Company To Port</label>
            <input
              name="seller"
              placeholder="Enter Company Name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={Name}
            />
          </div>
          <button type="submit" className={styles.formButton}
            onClick={handlePort}
          >
            Port Number
          </button>
        </form>
      </div>
    </div>
  );
};

export default Portnumber;
