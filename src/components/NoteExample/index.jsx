import './styles.css';
// import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

export const NoteExample = ({ text, deleteNote }) => {
    return (
        <div className="note-content">  
            <div className="header-title">
                {/* <AiOutlineEdit /> */}
                <MdDeleteOutline onClick={deleteNote}/>
            </div>
            <div className="separator"/>
            <span className="todo-item-text">{text}</span>
        </div>
    );
}