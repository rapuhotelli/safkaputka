import React from 'react';

export default function NewSafkaForm() {
  return (
    <div className="form-insert">
      <h2>I ate...</h2>
      <div className="form-insert__name">
        Name:<input type="text" />
      </div>
      <div className="form-insert__weight">
        Amount:<input type="text" />
      </div>
      <div className="form-insert__isGross">
        Gross? <input type="checkbox" />
      </div>
    </div>
  );
}
