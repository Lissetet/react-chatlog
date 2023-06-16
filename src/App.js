import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const numLikes = messages.filter((message) => message.liked).length;

  const setLike = (id) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      return message;
    });
    setMessages(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>{numLikes} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={messages} onSetLike={setLike} />
      </main>
    </div>
  );
};

export default App;
