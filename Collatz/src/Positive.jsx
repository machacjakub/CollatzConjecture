import React, { useState } from 'react';
import React from 'react';

function Positive(props) {
  if (props.data < 1) {
    return <p>Please input only positive numbers</p>;
  } else {
    return null;
  }
}

export default Positive;