import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onSetLike}) => {
  const local = entries.length > 0 ? entries[0]?.sender : '';
  entries.forEach((entry) => entry.local = entry.sender === local);

  return (
    <div className="chat-log">
      {entries.map((entry) => {
        return (
          <ChatEntry
            id={entry.id}
            key={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            local={entry.local}
            onSetLike={onSetLike}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onSetLike: PropTypes.func.isRequired,
};

export default ChatLog;
