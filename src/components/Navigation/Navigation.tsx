import React, { ReactElement } from 'react';

interface INavigationProps {
    setToggleBurger: (toggleBurger: boolean) => void,
    toggleBurger: boolean,
    ul: ReactElement
}

const Navigation: React.FC<INavigationProps> = ({ ul, setToggleBurger, toggleBurger }) => {
    return (
        <nav>
            <div onClick={() => setToggleBurger(!toggleBurger)} className={!toggleBurger ? `menu-icon` : 'menu-icon burgerOpen'}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {ul}
        </nav>

    );
};

export default Navigation;
