import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hoc({children}) {
    const navigate=useNavigate();
  useEffect(()=>{
    const account=localStorage.getItem('currAccount');
    if(!account){
        navigate('/');
    }
  },[])
  return (
    <>
     {children} 
    </>
  );
}
