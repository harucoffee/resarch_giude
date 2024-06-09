import { FC } from 'react';

type Props = {
    open: boolean;
    id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
    return (
        <nav id={id} aria-hidden={!open} className='navigation'>
            <ul>
                <li>
                    <a href="/" className="item-center">Home</a>
                </li>
                <li>
                    <a href="/reserve">Reserve</a>
                </li>
            </ul>
        </nav>
    );
}