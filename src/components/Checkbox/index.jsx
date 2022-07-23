import { Styles } from './styles.jsx';
import { BsCheckLg } from 'react-icons/bs';

export const Checkbox = ({ value, checkboxHandler }) => {
    return (
        <Styles.CheckboxMain value={value} onClick={checkboxHandler}>
            <BsCheckLg value={value}/>
        </Styles.CheckboxMain>
    );
}