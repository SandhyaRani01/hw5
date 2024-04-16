import React from 'react';

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Get Suggestion
    </button>
  );
}

export default Button;
