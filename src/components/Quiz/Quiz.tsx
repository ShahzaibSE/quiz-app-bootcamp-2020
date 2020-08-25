import React, {useEffect} from 'react'
// API.
import {QuestionsAPI} from "./../api/index.api"
// Assets.
import "./Quiz.scss"
// Component
import Question from "./../Question/Question"

type QuizPropes = {
    category: number,
    difficulty: string
}

const Quiz = ({category, difficulty}:QuizPropes) => {
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
    console.log(`Difficulty: ${difficulty}`)
    //
    return (
        <div className="quiz_container">
            <Question/>
            {/* {questions.map(question => (
                <h2>{question.question}</h2>
            ))} */}
        </div>
    )
}

export default Quiz
