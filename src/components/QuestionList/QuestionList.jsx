const QuestionList = ({ questions, onEditQuestion, onAddQuestion }) => {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} onClick={() => onEditQuestion(question.id)}>
          {question.text}
        </div>
      ))}
      <button onClick={onAddQuestion}>Add New Question</button>
    </div>
  );
};

export default QuestionList;
