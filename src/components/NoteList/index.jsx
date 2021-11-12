import { NoteExample } from "../NoteExample"

export const NoteList = ({ noteList, deleteNote }) => {
    return (
        <>
            {noteList.map((text, index) => (
                <NoteExample key={index} text={text} deleteNote={() => deleteNote(index)}/>
            ))}
        </>
    );
}