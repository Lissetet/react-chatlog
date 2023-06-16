import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const numLikes = messages.filter((message) => message.liked).length;

  const heartWidget = (
    <span className="widget" id="heartWidget">
      {`${numLikes} ❤️s`}
    </span>
  );

  const setLike = (id) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      return message;
    });
    setMessages(newMessages);
  };

  const localSender = messages.length > 0 ? messages[0].sender : '';
  const remoteSender = messages.find(message => 
    message.sender !== localSender)?.sender || '';

  return (
    <div id="App">
      <header>
        <h1>Chat between {localSender} and {remoteSender}</h1>
        <section>
          {numLikes !== 0 ? heartWidget : null}
        </section>
      </header>
      <main>
        <ChatLog entries={messages} onSetLike={setLike} />
      </main>
    </div>
  );
};

export default App;
