import './App.css';
import { NoteList } from './components/NoteList';
import { useEffect, useState } from 'react';

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
    <div className="content">
      <div className="center">
        <header>
          <span>Bem-vindo à sua lista de tarefas!</span>
          <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" className="button-create" onClick={handleAdd}>
                  Criar uma nova tarefa
            </button>
          </div>
        </header>
        <div className="notes">
          <NoteList noteList={child} deleteNote={deleteNote}/>
        </div>
      </div>
    </div>
  );
}