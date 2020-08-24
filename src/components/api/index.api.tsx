import axios from "axios"

export class QuestionsAPI {
    baseUrl: string = "https://opentdb.com/api.php"

    getQuestions(amount?:number, category?:number, difficulty?: string) {
        let questions = axios.get(`${this.baseUrl}?${String(amount)}&${category}&${difficulty}`)
        return questions
    }
}