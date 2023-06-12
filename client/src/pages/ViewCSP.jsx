import React ,{useEffect,useState,useContext} from 'react'
import Web3Context from '../context';
import {getAllCSP} from '../context/useContract/readContract';
import Navbar from '../components/Navbar';
const ViewCSP=()=>{
    const {Contract}= useContext(Web3Context);
    const [csps, setCsp]=useState([]);
    useEffect(() => {
        getAllCSP(Contract).then((data) => {
            console.log(data);
            setCsp(csps=>csps=data);
          });
        
      
        console.log('CSP array updated:', csps);
        
      }, []);
    return (
        <div>
            <Navbar/>
            <h1>View CSPs</h1>
            <br/>
            <h3>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; Owner</h3>
            <ul>
                {
                    csps.map((csp,index)=>(
                        <li key={index}>
                              {csp.name} &emsp;&emsp; {csp.owner}
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}

export default ViewCSP ;