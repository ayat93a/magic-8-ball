import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MagicBall from "./components/MagicBall";
import Head from "next/head";
import React , {useState} from "react";




function Home(){
  const [replay , setReplay] = useState (() =>{
    return "Ask me anything...."
  })

  const [question , setQuestion] = useState();

  const questionAskedHandler = (e) =>{
    e.preventDefault();
    const randomReply = Math.random() > 0.5 ? 'Yes' : 'No';
    setReplay(randomReply);
    question = e.target.question.value;
    setQuestion(question)
  }

  return(
    <>
      <Head>
        <title> Welcome to 8 Balls </title>
      </Head>
      <Header/>
      <Form questionAskedHandler = {questionAskedHandler}/>
      <MagicBall replay={replay}/>
      <Footer/>
    </>

  )
}

export default Home