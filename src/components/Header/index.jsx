import { useEffect, useState } from 'react';
import { Styles } from './styles';

export const Header = ({ notes, setNotes }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleSetText = (value) => {
    setError('')
    setText(value);
  }
  const handleAdd = () => {
    if (text.length <= 3) {
      setError('Minimun 3 characters to create todo');
      return;
    };

    setNotes([...notes, text]);
  }

  useEffect(() => {
    setText('');
  }, [notes]);
  
  return (
    <Styles.Header>
      <Styles.Title>Welcome to your To Do list!</Styles.Title>
      <div onKeyUp={(e) => e.key === 'Enter' && handleAdd()}>
          <input type="text" value={text} onChange={(e) => handleSetText(e.target.value)} />
          <button type="button" className="button-create" onClick={handleAdd}>
                Create new To Do
          </button>
        {error.length !== 0 && <div>{error}</div>}
      </div>
    </Styles.Header>
  );
}