import { FC, MouseEventHandler} from 'react';
import { IoMdMenu } from 'react-icons/io';

type Props = {
    open: boolean;
    onclick: MouseEventHandler;
    controls: string;
    label: string;
};

export const ToggleButton: FC<Props> = ({ open, onclick, controls, label }) => {
    return (
        <button 
            aria-controls={controls}
            aria-expanded={open}
            aria-label={label}
            onClick={onclick}
            className='toggleButton'
        >
        </button>
    );
};
