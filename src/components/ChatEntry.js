import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const {id, sender, body, timeStamp, liked, local, color, onSetLike} = props;
  const entryClass = `${local ? 'local' : 'remote'} ${color || 'default'}`;
  
  return (
    <div className={`chat-entry ${entryClass}`}>
      <div className="entry-header">
        <h2 className="entry-name">{sender}</h2>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
      </div>
      <section className="entry-bubble">
        <p>{body}</p>
        <button 
          className={`like ${!liked ? 'like-outline' : null}`} 
          onClick={() => onSetLike(id)}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  local: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onSetLike: PropTypes.func.isRequired,
};

export default ChatEntry;
