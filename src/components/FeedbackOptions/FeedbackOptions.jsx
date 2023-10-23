const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button name={option} key={option} onClick={onLeaveFeedback}>
          {option.slice(0, 1).toUpperCase()}
          {option.slice(1, option.length)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
