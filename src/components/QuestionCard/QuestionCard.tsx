import React, {useState} from 'react'
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import NavigateNext from "@material-ui/icons/NavigateNext"
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// Assets.
import {questionStyles} from "./QuestionCard.style";
import "./QuestionCard.scss";

type QuestionProps = {
    question: string;
    answers: string[];
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<QuestionProps> = ({question, answers, questionNum, callback, totalQuestions}) => {
    const classes = questionStyles()
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    // For question type.
    let type:string = "boolean"

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setHelperText(' ');
        setError(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // if (value === 'best') {
        // //   setHelperText('You got it!');
        //   setError(false);
        // } else if (value === 'worst') {
        // //   setHelperText('Sorry, wrong answer!');
        //   setError(true);
        // } else {
        // //   setHelperText('Please select an option.');
        //   setError(true);
        // }
    };
    //
    //
    return (
        <div> 
        <form>   
            {/* <Card className={classes.root}> */}
                
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Question: {questionNum} / {totalQuestions}
                    </Typography>
                    <Typography className={classes.question_text} variant="h5">{question}</Typography>
                    <RadioGroup className={classes.form_container} 
                                aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                        {answers.map(answer => (
                            <FormControlLabel key={answer} value={answer} control={<Radio onChange={callback} />} 
                                    label={answer} />
                        ))}
                    </RadioGroup>
                </CardContent>

                {/* <CardActions className={classes.card_actions_container}>
                    <Fab color="primary"><NavigateNext/></Fab>
                </CardActions> */}

            {/* </Card> */}
        </form>
    </div>  
    )
    //
}

export default QuestionCard
