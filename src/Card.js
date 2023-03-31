import React from 'react'
import { useState } from 'react'
import questions from './data'
import Question from './Question'

const Card = () => {
    const [question, setQuestion]= useState(questions)
    console.log(question);
  return (
    <main>
         <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
        {
            question.map((ques)=>{
                console.log(ques);
                return(
                    
                    <Question  key={ques.id} ques ={ques}  />
                    )
                })
            }
            </section>
    </div>
    </main>
  )
}

export default Card
