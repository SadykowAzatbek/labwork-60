import React from 'react';
import {messageProp} from '../../../types';

const MessageElem: React.FC<messageProp> = (elem) => {
  return (
    <>
      <div className="card m-2" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{elem.author}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{elem.dateTime}</h6>
          <p className="card-text">{elem.message}</p>
        </div>
      </div>
    </>
  );
};

export default MessageElem;