import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const QuizEditor = ({ onSaveQuiz, quizzes }) => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(quizzes?.filter((q) => q.id == id)[0]);
  console.log(quizzes?.filter((q) => q.id == id))
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
    // navigate('/')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveQuiz(quiz);
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <input className="rounded" name="title" value={quiz?.title} onChange={handleChange} />
      <textarea
        name="description"
        value={quiz?.description}
        onChange={handleChange}
        className="rounded"
      />
      <input className="rounded" name="url" value={quiz?.url} onChange={handleChange} />
      <Button  variant="primary" className="rounded" type="submit">Save Quiz</Button>
    </form>
  );
};

export default QuizEditor;
