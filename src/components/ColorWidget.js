import React from 'react';
import PropTypes from 'prop-types';

const ColorWidget = ({sender, setColor}) => {
  const colors = [
    {color: 'red', emoji: '🔴'},  
    {color: 'orange', emoji: '🟠'},
    {color: 'yellow', emoji: '🟡'},
    {color: 'green', emoji: '🟢'},
    {color: 'blue', emoji: '🔵'},
    {color: 'purple', emoji: '🟣'},
  ]

  return (
    <div className="widget">
      <span>{sender.name}'s color:</span>
      <div className="colorButtons">
        {
          colors.map((color) => {
            return (
              <button 
                key={color.color} 
                onClick={() => setColor(color.color)}
              >
                {color.emoji}
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
};

export default ColorWidget;
