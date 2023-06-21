import React from 'react';
import PropTypes from 'prop-types';
import ColorWidget from './ColorWidget';
import './Header.css';

const Header = (props) => {
  const {
    localSender, 
    remoteSender, 
    theme,
    settingsClass,
    setLocalColor, 
    setRemoteColor, 
    setTheme, 
    setSettingsClass,
    numLikes
  } = props;

  const senderSpan = (sender, type) => {
    return <span className={`sender-span ${sender.color || 'default'} ${type}`}>
      {sender.name}
    </span>;
  }

  let themeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fillOpacity="0"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"/></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"/></path></g><g fillOpacity="0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path fill="currentColor" strokeDasharray="56" strokeDashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1"/></path></g></svg>;
  if (theme === 'dark') {
    themeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="32" r="6" fill="currentColor"><animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"/></circle><g fill="none" stroke="currentColor" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"/></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"/></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>;
  }

  const settingsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01c0-.34-.03-.66-.07-.99l.01.02l2.44-1.92l-2.43-4.22l-2.87 1.16l.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01l-2.88-1.17l-2.44 4.22l2.44 1.92l.01-.02c-.04.33-.07.65-.07.99c0 .34.03.68.08 1.01l-.01-.02l-2.1 1.65l-.33.26l2.43 4.2l2.88-1.15l-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04l2.88 1.15l2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/></svg>;

  return (
    <header>
      <section>
        <button onClick={()=> setSettingsClass(settingsClass === '' ? 'hidden' : '')}>
          {settingsIcon}
        </button>
        <h1>
          Chat between {senderSpan(localSender, 'local')} and {senderSpan(remoteSender, 'remote')} 
        </h1>
        <span id="heartWidget">
          {`${numLikes}`} ❤️s
        </span>
      </section>
      <section id="settings" className={settingsClass}>
        <ColorWidget sender={localSender} setColor={setLocalColor} type="local"/>
        <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
          {themeIcon}
        </button>
        <ColorWidget sender={remoteSender} setColor={setRemoteColor} type="remote"/>
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
  theme: PropTypes.string.isRequired,
  settingsClass: PropTypes.string.isRequired,
  setLocalColor: PropTypes.func.isRequired,
  setRemoteColor: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
  setSettingsClass: PropTypes.func.isRequired,
  numLikes: PropTypes.number.isRequired
};

export default Header;
