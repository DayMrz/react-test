import { useState } from "react";
import "./styles.css";

import { Button } from "../Button";

export function Counter({ initialValue = 1 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <div>Current value: {count}</div>

      <div className="buttons">
        <Button
          onClick={() => {
            setCount((currentValue) => currentValue + 1);
          }}
        >
          Add
        </Button>

        <Button
          onClick={() => {
            setCount((currentValue) =>
              currentValue > 0 ? currentValue - 1 : 0
            );
          }}
        >
          Subtract
        </Button>
      </div>
    </div>
  );
}
