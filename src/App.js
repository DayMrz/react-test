import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(10);

  function handleTipChange(event) {
    if (event.target.checked) {
      setTip(event.target.value);
    }
  }

  return (
    <div>
      <div className="Conatiner-title">
        <h1 className="Title">
          Spli <br /> tter
        </h1>
      </div>

      <div className="Container-calculator">
        <section className="Section-form-user">
          <form>
            <div className="Block-1">
              <h2 className="Subtitle">Bill</h2>
              <label className="DollarSign" htmlFor="billAmount"></label>

              <input
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
                className="Input-user"
                inputMode="decimal"
                pattern="[0-9]+\.?[0-9]+"
                placeholder="0.0"
                type="number"
              />
            </div>

            <div className="Block-2">
              <h2 className="Subtitle-tip">Select Tip %</h2>
              <div className="Wrapper-tip">
                <input
                  className="Input-radio"
                  type="radio"
                  value="5"
                  id="tip-5"
                  name="tip"
                  onChange={handleTipChange}
                />
                <label className="Bt Btn-tip Grid-1" htmlFor="tip-5">
                  <span>5%</span>
                </label>

                <input
                  className="Input-radio"
                  type="radio"
                  value="10"
                  id="tip-10"
                  name="tip"
                  onChange={handleTipChange}
                />
                <label className="Bt Btn-tip Grid-2" htmlFor="tip-10">
                  <span>10%</span>
                </label>

                <input
                  className="Input-radio grid-3"
                  type="radio"
                  value="15"
                  id="tip-15"
                  name="tip"
                  onChange={handleTipChange}
                />
                <label className="Bt Btn-tip Grid-3" htmlFor="tip-15">
                  <span>15%</span>
                </label>

                <input
                  className="Input-radio"
                  type="radio"
                  value="25"
                  id="tip-25"
                  name="tip"
                  onChange={handleTipChange}
                />
                <label className="Bt Btn-tip Grid-4" htmlFor="tip-25">
                  <span>25%</span>
                </label>

                <input
                  className="Input-radio"
                  type="radio"
                  value="50"
                  id="tip-50"
                  name="tip"
                  onChange={handleTipChange}
                />
                <label className="Bt Btn-tip Grid-5" htmlFor="tip-50">
                  <span>50%</span>
                </label>

                <label>
                  <input
                    className="Bt Input-custom Grid-6"
                    type="text"
                    placeholder="Custom"
                    name="tip"
                    inputMode="decimal"
                    onChange={(event) => {
                      setTip(event.target.value);
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="Block-3">
              <h3 className="Subtitle">Number of People</h3>

              {people < 1 && <p id="Alert">Can't be zero!</p>}

              <label className="UserIcon" htmlFor="amountPeople">
                <input
                  onChange={(event) => {
                    setPeople(event.target.value);
                  }}
                  className="Input-user"
                  type="number"
                  inputMode="decimal"
                  pattern="[0-9]+"
                  min="1"
                />
              </label>
            </div>
          </form>
        </section>

        <section className="Section-form-show">
          <div className="Display-show">
            <div className="Row-show">
              <div className="Content-description">
                <h4 className="Subtitle-total">Tip Amount</h4>
                <p className="P-description">/ person</p>
              </div>
              <div className="Show-total">
                <h2 id="tipPerPerson" className="Span-total-tip">
                  $ {(amount * tip) / 100}
                </h2>
              </div>
            </div>
            <div className="Row-show">
              <div className="Content-description">
                <h4 className="Subtitle-total">Total</h4>
                <p className="P-description">/ person</p>
              </div>
              <div className="Show-total">
                <h2 id="totalPerPerson" className="Span-total">
                  $ {(amount * tip) / 100 / people}
                </h2>
              </div>
            </div>
          </div>
          <div className="container-btn">
            <button type="reset" className="Btn-reset">
              Reset
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
