import { useState } from "react";
import App from "../App";
import "./ComponentForm.css";

const ComponentForm = (props) => {
  const initialUserState = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 10,
    duration: 10,
  };

  const [componentForm, setComponentForm] = useState(initialUserState);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(componentForm);
  };
  const resetHandler = () => {
    setComponentForm(initialUserState);
  };
  const inputChangeHandler = (input, value) => {
    setComponentForm((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              value={componentForm["current-savings"]}
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              value={componentForm["yearly-contribution"]}
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              value={componentForm["expected-return"]}
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              value={componentForm.duration}
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default ComponentForm;
