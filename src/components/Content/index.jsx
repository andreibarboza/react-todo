import { Styles } from "./styles"
import { useState } from 'react';
import { NoteExample } from '../NoteExample'
import { Header } from "../Header";

export const Content = () => {
    
  const [notes, setNotes] = useState([]);

  const deleteNote = (index) => {
    const newArr = [...notes];
    newArr.splice(index, 1);
    setNotes(newArr);
  }
    return (
      <Styles.Content>
        <Styles.Center>
          <Header notes={notes} setNotes={setNotes}/>
          <Styles.Notes>
            {notes.map((text, index) => (
              <NoteExample key={index} text={text} deleteNote={() => deleteNote(index)}/>
            ))}
          </Styles.Notes>
        </Styles.Center>
      </Styles.Content>
    )
}