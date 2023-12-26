import { Link } from "react-router-dom";

const QuizList = ({ quizzes }) => {
  return (
    <div>
      {quizzes?.map((quiz) => (
        <div key={quiz.id}>
          {quiz.title}
          <Link to={`/edit-quiz/${quiz.id}`}>Edit</Link>
        </div>
      ))}
      <Link to="/add-quiz">Add New Quiz</Link>
    </div>
  );
};

export default QuizList;
