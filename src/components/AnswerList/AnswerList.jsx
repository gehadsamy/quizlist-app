const AnswerList = ({ answers, onEditAnswer, onAddAnswer }) => {
  return (
    <div>
      {answers?.map((answer) => (
        <div key={answer.id} onClick={() => onEditAnswer(answer.id)}>
          {answer.text}
        </div>
      ))}
      <button onClick={onAddAnswer}>Add New Answer</button>
    </div>
  );
};

export default AnswerList;
