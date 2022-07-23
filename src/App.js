import { useEffect, useState } from 'react';
import { Styles } from './AppStyles.jsx';
import { NoteExample } from './components/NoteExample'

export const App = () => {
  const [child, setChild] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setText('');
  }, [child]);
  
  
  const handleAdd = () => {
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
          <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit" className="button-create" onClick={handleAdd}>
                  Create new To Do
            </button>
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