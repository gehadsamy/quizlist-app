import { useState } from 'react';

const AnswerEditor = ({ onSaveAnswer, answer = {} }) => {
  const [currentAnswer, setAnswer] = useState(answer);

  const handleChange = (e) => {
    if (e.target.name === 'is_true') {
      setAnswer({ ...currentAnswer, [e.target.name]: e.target.checked });
    } else {
      setAnswer({ ...currentAnswer, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveAnswer(currentAnswer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        placeholder="Answer text"
        value={currentAnswer.text || ''}
        onChange={handleChange}
      />
      <label>
        Correct Answer?
        <input
          name="is_true"
          type="checkbox"
          checked={currentAnswer.is_true || false}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save Answer</button>
    </form>
  );
};

export default AnswerEditor;
