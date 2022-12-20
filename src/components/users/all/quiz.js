import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "react-cookies";
// import "./QQ.css";
// import { questions } from "./questions";
// import { useState } from "react";

const initialStateData = {
  text: "",
  description: "",
  questions:[""],
};
export default function QuizList() {
  const [data, setState] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/root/quiz/quiz`; //http://localhost:5000/root/wishList
    const quizlist = {
      text: data.text,
      description: data.description,
     question:data.questions,
    };
    
    const qestionlist = {
        text: data.text,
        type: data.type,
        hint:data.hint
       
      };
    const token = cookies.load("token");

    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url, bearer).then((res) => {
      setState(res.data.Quizs);
      console.log(res.data)

    //   console.log(res.data.Quizs[0].questions)

    //   console.log(res.data.Quizs)
    });
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((val, idx) => (
          <>
            <p>{val.text}</p>
            <p>{val.description}</p>
            <p>{val.questions.text}</p>

          </>
        ))}
    </div>
  );
}
