import React, { useState } from 'react';
import React from 'react';

function Finnish(props) {
  if (props.count == 1) {
    return (
      <>
        <h1 style={{ fontSize: 50, padding: 20 }}>1 : Finnish</h1>
      </>
    );
  } else {
    return <h1 style={{ fontSize: 50, padding: 20 }}>{props.count}</h1>;
  }
}

export default Finnish;
