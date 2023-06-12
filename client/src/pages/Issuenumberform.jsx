import React, { useState, useContext } from "react";
import Web3Context from "../context";
import { createMobileNo } from "../context/useContract/writeContract";
import client from "../utils/ipfs";
import styles from "./Form.module.css";
const Issuenumberform = () => {
  const { Contract, account } = useContext(Web3Context);
  var number = 0;
  const [Name, setName] = useState("");
  const [coverImageURI, setCoverImageURI] = useState("");
  const [Coverimage, setCoverImage] = useState("");
  const [show, setshow] = useState("");
  //const [pic,setPic]=useState()
  const showPhoto = async (e) => {
    //console.log(e.target.files[0]);
    setCoverImage(e.target.files[0]);
    setshow(URL.createObjectURL(e.target.files[0]));
  };
  const UploadImage = async (e) => {
    e.preventDefault();
    var num = parseInt(Math.random() * 1000);
    console.log("Num value is ", num);
    number = num;

    console.log(number);

    const data = new FormData();
    data.append("file", Coverimage);
    data.append("upload_preset", "mystiq");
    data.append("cloud_name", "doybtqm8h");
    await fetch("https://api.cloudinary.com/v1_1/doybtqm8h/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        const res = data.url;
        setCoverImageURI(res);
        alert("Image Uploaded");
        handleData(res);
      })
      .catch((err) => console.log(err));
  };

  const handleData = async (res) => {
    const obj = {
      name: "NFT Warranty",
      description:
        "This a NFT Warranty and Proof of Ownership of the following product",
      image: res,
      attributes: [
        {
          display_type: "date",
          trait_type: "expiry",
          value: "Infinity",
        },
        {
          trait_type: "Mobile No",
          value: Number,
        },
      ],
    };

    const result = await client.add(JSON.stringify(obj));
    const str = "ipfs://";
    const finalResult = str.concat(String(result.path));
    // console.log(result)
    console.log("Generated TokenURI", finalResult);
    alert("NFT Data added"); //tokenURI=finalResult
    alert(`Mobile number issued ${number}`);
    console.log("Number in handledata", number);
    await createMobileNo(
      Contract,
      account.currentAccount,
      number,
      Name,
      finalResult,
      account.currentAccount
    );
    alert("NFT created");
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Issue New Number</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="wallet">Customer Wallet Address</label>
            <input
              name="wallet"
              placeholder="Enter Seller Wallet ID"
              type="text"
              value={account.currentAccount}
              readOnly
            />
          </div>
          {/* <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="Number"
                  className="w-2/4 p-2 text-white text-left"
                >
                 Mobile Number
                </label>
                <input
                  name="seller"
                  placeholder="Mobile No"
                  type="number"
                  className="w-2/4 p-2 rounded-md"
                  value={number}
                  readOnly
                  
                />
              </div> */}
          <div className={styles.formGroup}>
            <label htmlFor="seller">Company Name</label>
            <input
              name="seller"
              placeholder="Enter Company Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">User Image</label>
            {/* <img src={show} alt="" id="show" /> */}
            <input
              placeholder="Upload Image"
              type="file"
              accept="image/*"
              onChange={showPhoto}
            />
          </div>
          <button type="submit" className={styles.formButton}
            onClick={UploadImage}
          >
            Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Issuenumberform;
