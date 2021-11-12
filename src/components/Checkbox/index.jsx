import { Styles } from './styles.jsx';
import { BsCheckLg } from 'react-icons/bs';

export const Checkbox = ({ value, funcClick }) => {
    return (
        <Styles.CheckboxMain value={value} onClick={funcClick}>
            <BsCheckLg value={value}/>
        </Styles.CheckboxMain>
    );
}