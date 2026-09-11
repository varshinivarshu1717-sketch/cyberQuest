import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    alert(`You entered: ${message}`);
    setMessage("");
  };

  return (
    <div className="app">
      <header className="navbar">
        <h1>🛡️ CyberQuest</h1>
        <span>Cybersecurity Learning Platform</span>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Welcome to CyberQuest</h2>
          <p>
            Learn cybersecurity through interactive challenges,
            quizzes and practical security tasks.
          </p>

          <button onClick={() => alert("CyberQuest started!")}>
            Start CyberQuest
          </button>
        </section>

        <section className="cards">
          <div className="card">
            <h3>🔍 Reconnaissance</h3>
            <p>Learn about network scanning and information gathering.</p>
          </div>

          <div className="card">
            <h3>🌐 Web Security</h3>
            <p>Explore common web application vulnerabilities.</p>
          </div>

          <div className="card">
            <h3>🛡️ Network Security</h3>
            <p>Understand basic network security concepts.</p>
          </div>
        </section>

        <section className="chat-section">
          <h2>CyberQuest Assistant</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask a cybersecurity question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;