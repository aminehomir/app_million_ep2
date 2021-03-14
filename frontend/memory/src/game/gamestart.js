
import './game.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import React, { Component }  from 'react';

const Play = () => {

    const [question , setQuestion] = useState(null);
    const [questionNum , setQuestionNum] = useState(1);
    

    const [participantReady , setParticipantReady] = useState(true);

    const history = useHistory()

    let handleClick = (answer,idQuestion)=>{

        let questionCount = questionNum

        if (questionCount < 10) {
            
                    // get question from db 

                    axios.get(`http://localhost:8080/Question/getQuestion`)
                    .then(function (response) {

                        setQuestion(response.data)
                        setQuestionNum( questionCount + 1) 

                    }).catch(function (err) {
                    console.log(err);
                });



                //   create round 

                let idGroup = localStorage.getItem("group_code");
                console.log(idGroup);
                let id_participant = localStorage.getItem("idParticipant");




                const round = { 
                 
                    id_question : idQuestion ,
                    id_participant : id_participant, 
                    participant_answer :answer

                    };

            

                axios.post(`http://localhost:8080/round/add/${idGroup}`,round)
                .then(res => {

                
                
                
                })
            
        }else{

        let idGroup = localStorage.getItem("group_code");
        let token = localStorage.getItem("token");


        


        // check if we have 4 palyer ...

        axios.post(`http://localhost:8080/Finalwinner/add/${idGroup}`)
        .then(function (response) {




        localStorage.setItem('idWinner' , response.data.id_participant)
        localStorage.setItem('idGift' , response.data.id_gift)
        
        
         
            
          
            
        
        }).catch(function (err) {
          console.log(err);
      });

        

           

            history.push('/winner')

        }



 

        
    }

    useEffect(()=>{

        let idGroup = localStorage.getItem("group_code");

        console.log(idGroup);
     
      

        axios.get(`http://localhost:8080/round/add/${idGroup}`)
        .then(function (response) {


         if(!response.data.error){
            setParticipantReady(false)
         }
         
        
        
         
            
          
            
        
        }).catch(function (err) {
          console.log(err);
      });

        
       
        // console.log(numQuestion);

        axios.get(`http://localhost:8080/Question/getQuestion`)
        .then(function (response) {
        
         
            setQuestion(response.data)
          
            
        
        }).catch(function (err) {
          console.log(err);
      });
      
      },[])




    return ( 
        <div className="play">
            
            {participantReady ? (
                 <div className="endGame">
                 <h1>You need 2 player to Start the game ! </h1>
             </div>
            ):(
                <>
                    <div className="container ">
             
           

        <h3 className="question" >{ question && question.quest}</h3>

            

                <div className="row justify-content-around">
                    <div className="col-4">
                    
                    <button type="button" onClick={()=>{ handleClick(question.answer,question._id) }}   className="btn btn-light ">{ question && question.answer} </button>
                    </div>
                    <div className="col-4">
                    
                    <button type="button"  onClick={()=>{ handleClick(question && question.false_choices[0],question._id) }}  className="btn btn-light">{ question && question.false_choices[0]}</button>
                    
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-4">
                    
                    <button type="button"  onClick={()=>{ handleClick(question && question.false_choices[1],question._id) }}  className="btn btn-light">{ question && question.false_choices[1]}</button>
                    </div>
                    <div className="col-4">
                    
                    <button type="button"  onClick={()=>{ handleClick(question && question.false_choices[2],question._id) }}  className="btn btn-light">{ question && question.false_choices[2]}</button>
                    </div>
                </div>
            </div>
                </>
            )


            
            }

           


       
        
            
        </div>
     );
}
 
export default Play;