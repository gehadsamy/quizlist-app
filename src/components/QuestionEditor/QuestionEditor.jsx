import { useState } from "react";

const QuestionEditor = ({ onSaveQuestion, question = {} }) => {
  const [currentQuestion, setQuestion] = useState(question);

  const handleChange = (e) => {
    setQuestion({ ...currentQuestion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveQuestion(currentQuestion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        placeholder="Question text"
        value={currentQuestion.text || ''}
        onChange={handleChange}
      />
      <input
        name="feedback_true"
        placeholder="Feedback for correct answer"
        value={currentQuestion.feedback_true || ''}
        onChange={handleChange}
      />
      <input
        name="feedback_false"
        placeholder="Feedback for incorrect answer"
        value={currentQuestion.feedback_false || ''}
        onChange={handleChange}
      />
      <button type="submit">Save Question</button>
    </form>
  );
};

export default QuestionEditor;
