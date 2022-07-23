import { useState } from 'react';
// import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { Styles } from './styles.jsx';
import { Checkbox } from '../Checkbox/index.jsx';

export const NoteExample = ({ text, deleteNote }) => {
    const [check, setCheck] = useState(false);

    const checkboxHandler = () => setCheck(prevBool => !prevBool);

    return (
        <Styles.NoteContent conclued={check}>
            <Checkbox value={check} funcClick={checkboxHandler}/>
            <Styles.ItemText>{text}</Styles.ItemText>
            <Styles.IconContent>
                {/* <AiOutlineEdit /> */}
                <MdDeleteOutline onClick={deleteNote}/>
            </Styles.IconContent>
        </Styles.NoteContent>
    );
}