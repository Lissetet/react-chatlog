import React, {useState} from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import Header from './components/Header'
import './App.css';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [localSender, setLocalSender] = useState({
    name: messages[0]?.sender || '',
    color: ''
  });
  const [remoteSender, setRemoteSender] = useState({
    name: messages.find((msg) => msg.sender !== localSender.name).sender || '',
    color: ''
  });

  const numLikes = messages.filter((message) => message.liked).length;

  const setLocalColor = (color) => {
    setLocalSender((prev) => {
      return {...prev, color: color};
    });
  }

  const setRemoteColor = (color) => {
    setRemoteSender((prev) => {
      return {...prev, color: color};
    });
  }

  const setLike = (id) => {
    setMessages((prev) => {
      return prev.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        }
        return message;
      });
    });
  };

  return (
    <div id="App">
      <Header 
        localSender={localSender}
        remoteSender={remoteSender}
        setLocalColor={setLocalColor}
        setRemoteColor={setRemoteColor}
        numLikes={numLikes}
      />
      <main>
        <ChatLog 
          entries={messages} 
          localSender={localSender}
          remoteSender={remoteSender}
          onSetLike={setLike} 
          />
      </main>
    </div>
  );
};

export default App;
