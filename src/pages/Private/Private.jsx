import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Firebase';
 
export default function Private() {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              return <Navigate to='/Home' />
              const uid = user.uid;
              console.log("uid", uid)
            }
          });
         
    }, [])
 
  return (
    <>
    </>
  )
}
 
