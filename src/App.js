import { NoteList } from './components/NoteList';
import { useEffect, useState } from 'react';
import { Styles } from './AppStyles.jsx';

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
            <button type="button" className="button-create" onClick={handleAdd}>
                  Create new To Do
            </button>
          </div>
        </header>
        <Styles.Notes>
          <NoteList noteList={child} deleteNote={deleteNote}/>
        </Styles.Notes>
      </Styles.Center>
    </Styles.Content>
  );
}