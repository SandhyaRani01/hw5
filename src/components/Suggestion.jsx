import React from 'react';

function Suggestion({ suggestion }) {
  return (
    <div>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default Suggestion;
