import React from 'react'
import Navbar from '../components/Navbar';
import { useContext ,useState } from 'react';
import Web3Context from '../context';
import {getAllMobileNo,getCSPNameById,getCSPIdByAddress} from '../context/useContract/readContract';
const Viewusers=()=>{
    const [users,setUser]=useState([]);
    const {Contract,account} = useContext(Web3Context);
    const _cspAddress=account.currentAccount;
    console.log("Current Address : ",_cspAddress);
    const printValue=()=>{
        //e.preventDefault();
        console.log("User value updated to :",users);
        users.map((user)=>{ return <h1>{user.address}</h1>})
    }
    getCSPIdByAddress(Contract,_cspAddress)
            .then((_cspId)=>{
                getCSPNameById(Contract,_cspId).then((_cspName)=>{
                    getAllMobileNo(Contract,_cspName).then((res)=>{
                        console.log(res);
                        //setUser(res);
                        
                    })
                })
            })
    //const promise1=getCSPIdByAddress(Contract,_cspAddress);
    // promise1.then((_cspId)=>{
    //     const promise2=getCSPNameById(Contract,_cspId);
    //     promise2.then((_cspName)=>{
    //         const promise3=getAllMobileNo(Contract,_cspName);
    //         promise3.then((res)=>{
    //             console.log(res);
    //         })
            
    //     });
        
    // })
    
    // const _cspName= getCSPNameById(Contract,_cspId);
    // console.log(_cspName);
    // const res= getAllMobileNo(Contract,_cspName);
    // console.log(res);
    return(
        <div>
            <Navbar />
            <h1>View Users</h1>
            {/* {this.printValue()} */}
        </div>
    )
}

export default Viewusers;