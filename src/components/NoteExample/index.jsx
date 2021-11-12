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
            <Styles.HeaderTitle>
                <Styles.HeaderLeft>
                    <Checkbox value={check} funcClick={checkboxHandler}/>
                </Styles.HeaderLeft>
                <Styles.HeaderRight>
                    {/* <AiOutlineEdit /> */}
                    <MdDeleteOutline onClick={deleteNote}/>
                </Styles.HeaderRight>
            </Styles.HeaderTitle>
            <Styles.Separator />
            <Styles.ItemText>{text}</Styles.ItemText>
        </Styles.NoteContent>
    );
}