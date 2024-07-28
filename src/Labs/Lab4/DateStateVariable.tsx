import React, { useState } from "react";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());

  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" : ""}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
  };

  return (
    <div id="wd-date-state-variables" style={{ margin: '20px', width: '400px' }}>
      <h2>Date State Variables</h2>
      <h3 style={{ wordWrap: 'break-word' }}>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
      />
      <hr/>
    </div>
  );
}
