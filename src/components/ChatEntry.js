import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const {id, sender, body, timeStamp, liked, local, color, onSetLike} = props;
  
  return (
    <div key={id} className={`chat-entry ${local ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => onSetLike(id)}>{liked ? '❤️' : '🤍'}</button>
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
