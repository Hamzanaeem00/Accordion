import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ ques }) => {
  const [open, setOpen] = useState(false);
  const opnBtn= ()=>{
    if(open=== false){

        setOpen(true)
    }
    else{
        setOpen(false)
    }
}
  console.log("===>", ques);
  return (
    <section className="info">
      <article className="question">
        <header>
          <h4>{ques.title}</h4>
          <button className="btn" onClick={opnBtn}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {open ? <div>{ques.info}</div>:""}
      </article>
    </section>
  );
};

export default Question;
