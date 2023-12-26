import generateId from '../utils/IdGenerator';
import initialData from '../utils/initialData.json'

const QuizService = {
  loadQuizzes: () => {
    return JSON.parse(localStorage.getItem('quizzes')) || initialData.quizzes;
  },

  saveQuiz: (quiz) => {
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || initialData.quizzes;

    if (quiz.id) {
      // Edit existing quiz
      quizzes = quizzes.map(q => q.id === quiz.id ? quiz : q);
    } else {
      // Add new quiz
      quiz.id = generateId();
      quizzes.push(quiz);
    }

    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    return quizzes;
  },
};

export default QuizService;
