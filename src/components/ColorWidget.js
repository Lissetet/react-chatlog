import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ColorWidget.css';

const ColorWidget = ({sender, setColor, type}) => {
  const [colors, setColors] = useState([
    { color: 'default', active: true},
    { color: 'red', active: false },
    { color: 'orange', active: false },
    { color: 'yellow', active: false },
    { color: 'green', active: false },
    { color: 'blue', active: false },
    { color: 'purple', active: false },
  ]);

  const handleColorChange = (e, color) => {
    setColors(colors.map((current) => {
      current.active = current.color === color.color;
      return current;
    }));
    setColor(color.color);
  };

  return (
    <div id={`${type}ColorWidget`}>
      <span>{sender.name}'s color:</span>
      <div className="colorButtons">
        {
          colors.map((current) => {
            const {color, active} = current;
            const bubbleClasses = `${color} ${type} ${active ? 'selected' : ''}`;
            return (
              <button
                key={color}
                onClick={(e) => handleColorChange(e, current)}
                className={`color-bubble ${bubbleClasses}`}
              >
              </button>
            );
          })
        }
      </div>
    </div>
  )
};

ColorWidget.propTypes = {
  sender: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  setColor: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default ColorWidget;
