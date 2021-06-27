import React, {useRef, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
//  import {Scrollbars} from 'react-custom-scrollbars';

const languages = [
    {
        key: '1',
        label: 'Banvadi',
        nav: '/sites'
    },
    {
        key: '2',
        label: 'Pimpalwadi'
    },
    {
        key: '3',
        label: 'Chorambe'
    },
    {
        key: '4',
        label: 'Tikekarwad'
    },
    {
        key: '5',
        label: 'Lavhi Bk'
    },
    {
        key: '6',
        label: 'Chiluvuru '
    },
    {
        key: '7',
        label: 'Manchikallupudi'
    },
    {
        key: '8',
        label: 'K. R. Konduru'
    },
    {
        key: '9',
        label: 'Singupalem'
    },
    {
        key: '10',
        label: 'Penumudi'
    },
    {
        key: '11',
        label: 'Karumuru'
    },
    {
        key: '12',
        label: 'Bethapudi'
    }
];

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const {t} = useTranslation();

    const [dropdownState, setDropdownState] = useState({
        isDropdownOpen: false
    });

    const toggleDropdown = () => {
        setDropdownState({isDropdownOpen: !dropdownState.isDropdownOpen});
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownState({isDropdownOpen: false});
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
                false
            );
        };
    });

    let className = 'dropdown-menu dropdown-menu-right p-0';

    if (dropdownState.isDropdownOpen) {
        className += ' show';
    }
    return (
        <li
            ref={dropdownRef}
            className="nav-item d-none d-sm-inline-block dropdown"
        >
            <button
                onClick={toggleDropdown}
                type="button"
                className="btn btn-secondary dropdown-toggle"
                style={{width: 210}}
            >
                Go To Villages
            </button>
            <div className={className}>
                {languages.map((language) => (
                    <Link to={t(language.nav)} className="d-block">
                        <button type="button" className="dropdown-item">
                            <i className="fas fa-compass" />
                            <span>{t(language.label)}</span>
                        </button>
                    </Link>
                ))}
            </div>
        </li>
    );
};

export default Dropdown;
