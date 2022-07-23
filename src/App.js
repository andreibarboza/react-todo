import { useEffect, useState } from 'react';
import { Styles } from './AppStyles.jsx';
import { NoteExample } from './components/NoteExample'

export const App = () => {
  const [child, setChild] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setText('');
  }, [child]);

  const handleSetText = (value) => {
    setError('')
    setText(value);
  }
  
  
  const handleAdd = () => {
    if (text.length <= 3) {
      setError('Minimun 3 characters to create todo');
      return;
    };

    setChild([...child, text]);
  }
  
  const deleteNote = (index) => {
    const newArr = [...child];
    newArr.splice(index, 1);
    setChild(newArr);
  }
  
  return (
    <Styles.Content>
      <Styles.Center>
        <header>
          <span>Welcome to your To Do list!</span>
          <div onKeyUp={(e) => e.key === 'Enter' && handleAdd()}>
              <input type="text" value={text} onChange={(e) => handleSetText(e.target.value)} />
              <button type="button" className="button-create" onClick={handleAdd}>
                    Create new To Do
              </button>
            {error.length !== 0 && <div>{error}</div>}
          </div>
        </header>
        <Styles.Notes>
          {child.map((text, index) => (
            <NoteExample key={index} text={text} deleteNote={() => deleteNote(index)}/>
          ))}
        </Styles.Notes>
      </Styles.Center>
    </Styles.Content>
  );
}