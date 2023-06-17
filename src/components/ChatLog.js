import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onSetLike, localSender, remoteSender}) => {
  entries.forEach((msg) => {
    msg.local = msg.sender === localSender?.name
    msg.color = msg.local ? localSender?.color : remoteSender?.color;
  });

  return (
    <div className="chat-log">
      {entries.map((msg) => {
        return (
        <ChatEntry
          {...msg}
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
  localSender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  remoteSender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  onSetLike: PropTypes.func.isRequired,
};

export default ChatLog;
