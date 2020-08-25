import React, {useEffect} from 'react'
// API.
import {QuestionsAPI} from "./../api/index.api"
// Assets.
import "./Quiz.scss"

type QuizPropes = {
    category: number,
    difficulty: string
}

const Quiz = ({category}:QuizPropes) => {
    let questions_api = new QuestionsAPI()
    let questions:any[] 

    // Accessing API.
    useEffect(()=>{
        questions_api.getQuestions(10,9,'easy').then(response => {
            questions = response.data
            console.log("Questions")
            console.log(questions)
        })
    },[])
    //
    console.log(`Category Number: ${String(category)}`)
    //
    return (
        <div className="quiz_container">
            <h1>Quiz started!</h1>
            {/* {questions.map(question => (
                <h2>{question.question}</h2>
            ))} */}
        </div>
    )
}

export default Quiz
