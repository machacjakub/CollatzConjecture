import React, { useState } from 'react';
import React from 'react';

function HistoryList(props) {
  const arr = props.seznam;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
}

export default HistoryList;