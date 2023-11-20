import {useEffect, useState} from 'react';
import {messageProp} from '../../../types';
import MessageElem from './messageElem.tsx';

let lastDateTime = '?datetime=2023-11-20T09:18:42.826Z';

const AddMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getUrl = 'http://146.185.154.90:8000/messages' + lastDateTime;
    const interval = setInterval(async () => {
      const response = await fetch(getUrl);
      const messageData = await response.json();

      if (messageData.length > 0) {
        lastDateTime = messageData[messageData.length - 1].dateTime;
        setMessages(messageData);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {messages.map((elem: messageProp, index) => (
        <MessageElem message={elem.message} author={elem.author} dateTime={elem.datetime} key={index} />
      ))}
    </div>
  );
};

export default AddMessage;