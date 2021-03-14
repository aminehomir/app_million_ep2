import { useEffect, useState } from 'react';
import React, { Component }  from 'react';
import axios from 'axios';



const Winner = () => {

    const [winner ,setWinner] = useState('');

    const [gift ,setGift] = useState('');

    useEffect(()=>{
        let idWinner = localStorage.getItem("idWinner");

        let idGift = localStorage.getItem("idGift");

     
        // console.log(idWinner);

        axios.get(`http://localhost:8080/Participant/get/${idWinner}`)
        .then(function (response) {
         
          setWinner(response.data)
            // console.log(response.data);
        
        }).catch(function (err) {
          console.log(err);
      });


      axios.get(`http://localhost:8080/Gifts/getGift/${idGift}`)
      .then(function (response) {
       
        setGift(response.data)
          console.log(response.data);
      
      }).catch(function (err) {
        console.log(err);
    });

    
       
    
      
      },[])

    return ( 
        <div className="winner">
            <h1 >The Winner is :  </h1>
            <h1 >{winner.full_name}</h1>
            <h1 >Gift :{gift.name} </h1>
            <img className="image" src={gift.image} />
        </div>
     );
}
 
export default Winner;