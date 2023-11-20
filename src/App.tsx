import './App.css';
import React, {useEffect, useState} from 'react';
import AddMessage from './Components/AddMessage/AddMessage.tsx';

interface Props {
  author: string;
  userMessage: string;
}

const url = 'http://146.185.154.90:8000/messages';

function App() {
  const [message, setMessage] = useState<Props>({
    author: '',
    userMessage: '',
  });

  useEffect(() => {
    const sendData = async () => {
      const data = new URLSearchParams();
      data.set('message', message.userMessage);
      data.set('author', message.author);

      await fetch(url, {
        method: 'post',
        body: data,
      });
    }

    void sendData();

  }, []);

  const changeAuthorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage((prev) => ({
      ...prev,
      author: e.target.value,
    }));
  };
  const changeMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage((prev) => ({
      ...prev,
      userMessage: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Автор"
            onChange={changeAuthorInput}
          />
          <input
            type="text"
            className="form-control"
            placeholder="сообщение"
            value={message.userMessage}
            onChange={changeMessageInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
      <AddMessage />
    </>
  )
}
export default App;
