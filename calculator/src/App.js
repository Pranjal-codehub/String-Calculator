import { useState } from 'react';
import add from './calculator';



function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAdd = () => {
    try {
      const res = add(input);
      setResult(res);
      setError("");
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>String Calculator</h1>
      <input
        style={{ padding: "0.5rem", width: "300px" }}
        placeholder="Enter string e.g. 1,2 or //;\n1;2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: "1rem" }} onClick={handleAdd}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;

