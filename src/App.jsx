import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import QuizList from './components/QuizList/QuizList';
import QuizService from './services/QuizService';
import initialData from './utils/initialData.json'
import QuizEditor from './components/QuizEditor/QuizEditor';

function App() {
  const [quizzes, setQuizzes] = useState([]);

  const handleSaveQuiz = (quiz) => {
    const updatedQuizzes = QuizService.saveQuiz(quiz);
    setQuizzes(updatedQuizzes);
  };
  
  useEffect(() => {
    // Load quizzes from the service
    const loadedQuizzes = QuizService.loadQuizzes();
    setQuizzes(loadedQuizzes);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <QuizList quizzes={quizzes} />,
    },
    {
      path: "/edit-quiz/:id",
      element: <QuizEditor onSaveQuiz={handleSaveQuiz} quizzes={quizzes} />,
    },
    {
      path: "/add-quiz",
      element: <QuizEditor onSaveQuiz={handleSaveQuiz} quizzes={quizzes} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
