import React ,{useEffect,useContext}from 'react'
import ViewCSP from './pages/ViewCSP';
import Connectwallet from "./pages/Connectwallet";
import Issuenumberform from "./pages/Issuenumberform";
import Mainpage from "./pages/Mainpage";
import User from "./pages/User";
import Portnumber from "./pages/Portnumber";
import Registercsp from "./pages/Registercsp";
import Csp from "./pages/Csp";
import Viewusers from './pages/Viewusers';
import { Route, Routes } from "react-router-dom";
import Web3Context from './context';
import Hoc from './hoc/hoc';

export default function App() {
  // const { checkIfWalletIsConnected,Contract,account} = useContext(Web3Context);
  // window.ethereum&&window.ethereum.on('accountsChanged', function (accounts) {
  //   setTimeout(window.location.reload(true), 1000);
  // });
  // useEffect(()=>{
  //         checkIfWalletIsConnected()
  //         console.log(account)
  // },[account])
return (
  <div>
    <Routes>
      <Route path='/' element={<Connectwallet />} />
      <Route path='/issue' element={<Hoc><Issuenumberform /></Hoc>}/>
      <Route path='/main' element={<Hoc><Mainpage /></Hoc>} />
      <Route path='/user' element={<Hoc><User /></Hoc>}/>
      <Route path='/port' element={<Hoc><Portnumber /></Hoc>}/>
      <Route path='/register' element={<Hoc><Registercsp /></Hoc>}/>
      <Route path='/csp' element={<Hoc><Csp /></Hoc>}/>
      <Route path='/view' element={<Hoc><Viewusers /></Hoc>}/>
      <Route path='/viewCSP' element={<Hoc><ViewCSP /></Hoc>}/>
    </Routes>
  </div>
)
}
