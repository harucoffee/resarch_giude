import { FC, useState } from 'react';
import { ToggleButton } from './toggleButton';
import { Navigation } from './navigation';
import { IoMdMenu } from 'react-icons/io';

const Header: FC = () => {
    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
        setOpen((prevState) => !prevState);
    };

    return (
      <header className='flex'>
        <ToggleButton
            open={open}
            controls='navigation'
            label="メニューを開きます"
            onclick={toggleFunction}
        />
        <Navigation id='navigation' open={open} />
      </header>
    );
};

export default Header;