import React, {useState} from 'react'
import {Grid} from "@material-ui/core"
// API.
import {QuestionsAPI} from "./../api/index.api"
// Assets.
import "./Quiz.scss"
// Component
import QuestionCard from "../QuestionCard/QuestionCard"

type QuizPropes = {
    category: number,
    difficulty: string
}

const Quiz = ({category, difficulty}:QuizPropes) => {
    let questions_api = new QuestionsAPI()
    // Question prequisites
    const [isLoading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false)
    //

    // Accessing API.
    // useEffect(()=>{
    //     questions_api.getQuestions(10,9,'easy').then(response => {
    //         questions = response.data
    //         console.log("Questions")
    //         console.log(questions)
    //     })
    // },[])
    //
    console.log(`Category Number: ${String(category)}`)
    console.log(`Difficulty: ${difficulty}`)
    //
    return (
        <div className="quiz_container">
          <Grid container alignItems="center" justify="center">
               <Grid item xs={12} sm={12} md={6} lg={6}>
                   <QuestionCard />
               </Grid>
            </Grid>  
            {/* {questions.map(question => (
                <h2>{question.question}</h2>
            ))} */}
        </div>
    )
}

export default Quiz
