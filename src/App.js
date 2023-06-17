import React, {useState} from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [localSender, setLocalSender] = useState({
    name: messages[0]?.sender || '',
    color: 'black'
  });
  const [remoteSender, setRemoteSender] = useState({
    name: messages.find((msg) => msg.sender !== messages[0]?.sender)?.sender || '',
    color: 'black'
  });

  const numLikes = messages.filter((message) => message.liked).length;

  const colors = [
    {color: 'red', emoji: '🔴'},  
    {color: 'orange', emoji: '🟠'},
    {color: 'yellow', emoji: '🟡'},
    {color: 'green', emoji: '🟢'},
    {color: 'blue', emoji: '🔵'},
    {color: 'purple', emoji: '🟣'},
  ]

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

  const setColorWidget = (sender, setColor) => {
    return (
      <div className="widget">
        <span>{sender.name}'s color:</span>
        <div className="colorButtons">
          {colors.map((color) => {
            return (
              <button 
                key={color.color} 
                onClick={() => setColor(color.color)}
              >
                {color.emoji}
              </button>
            );
        })}
        </div>
      </div>
    )
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
      <header>
        <h1>Chat between {localSender.name} and {remoteSender.name}</h1>
        <section>
          {setColorWidget(localSender, setLocalColor)}
          <span className="widget" id="heartWidget">
            {`${numLikes} ❤️s`}
          </span>
          {setColorWidget(remoteSender, setRemoteColor)}
        </section>
      </header>
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
