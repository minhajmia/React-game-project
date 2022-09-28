import React from "react";

const QuestionAnswer = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium font-bold">
          1. How does React work ?
        </div>
        <div className="collapse-content">
          <p>
            React goes through its virtual DOM ,creates a list of those changes
            that need to be made to the actual DOM and then does it all in one
            single process
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium font-bold">
          2.What is the difference between props and state ?
        </div>
        <div className="collapse-content">
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium font-bold">
          3.Where does to use useEffect without data loading ?
        </div>
        <div className="collapse-content">
          <p>
            The useEffect Hook allows you to perform side effects in your
            components. Some examples of side effects are: fetching data,
            directly updating the DOM, and timers
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
