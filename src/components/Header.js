import React from 'react';
import PropTypes from 'prop-types';
import ColorWidget from './ColorWidget';
import './Header.css';

const Header = (props) => {
  const {localSender, remoteSender, setLocalColor, setRemoteColor, numLikes} = props;
  const senderSpan = sender => <span className={sender.color}>{sender.name}</span>;

  return (
    <header>
      <h1>
        Chat between {senderSpan(localSender)} and {senderSpan(remoteSender)}
      </h1>
      <section>
        <ColorWidget sender={localSender} setColor={setLocalColor} />
        <span className="widget" id="heartWidget">
          {`${numLikes} ❤️s`}
        </span>
        <ColorWidget sender={remoteSender} setColor={setRemoteColor} />
      </section>
    </header>
  );
};

Header.propTypes = {
  localSender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  remoteSender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  setLocalColor: PropTypes.func.isRequired,
  setRemoteColor: PropTypes.func.isRequired,
  numLikes: PropTypes.number.isRequired
};

export default Header;
