import React from 'react';

const HistorySearch = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="order-id">order id</label>
          <input type="number" id="order-id" />
        </div>
      </form>
    </div>
  );
};

export default HistorySearch;
