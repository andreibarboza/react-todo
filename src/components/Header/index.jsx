import { useEffect, useState } from 'react';
import { Styles } from './styles';
import { AiOutlinePlus } from 'react-icons/ai';

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
      <Styles.Container>
          <Styles.Textarea 
            type="text" 
            value={text} 
            onChange={(e) => handleSetText(e.target.value)}
          />
          <Styles.Button 
            type="button"
            onClick={handleAdd}
          >
            <AiOutlinePlus size={18}/>
          </Styles.Button>
        {error.length !== 0 && <Styles.Error>{error}</Styles.Error>}
      </Styles.Container>
    </Styles.Header>
  );
}