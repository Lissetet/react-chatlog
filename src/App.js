import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js';

const App = () => {
  const { sender, body, timeStamp, id, liked } = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <section className="chatlog">
          <ChatEntry 
            id={id} 
            sender={sender} 
            body={body} 
            timeStamp={timeStamp} 
            liked={liked} 
          />
        </section>
      </main>
    </div>
  );
};

export default App;
