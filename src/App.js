import { useState } from "react";
import ComponentForm from "./components/ComponentForm";
import Result from "./result/Result";
import UI from "./UI/UI";
function App() {
  const [componentForm, setComponetForm] = useState(null);

  const calculateHandler = (componentForm) => {
    setComponetForm(componentForm);
  };

  const yearlyData = [];
  if (componentForm) {
    let currentSavings = +componentForm["current-savings"];
    const yearlyContribution = +componentForm["yearly-contribution"];
    const expectedReturn = +componentForm["expected-return"] / 100;
    const duration = +componentForm["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <UI />
      <ComponentForm onCalculate={calculateHandler} />

      {!componentForm && (
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          {" "}
          No Investment Calculated Yet!{" "}
        </p>
      )}

      {componentForm && (
        <Result
          data={yearlyData}
          initialInvestment={componentForm["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
