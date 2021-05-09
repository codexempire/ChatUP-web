import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const SideBarHeader = () => {
    return (
        <div className='sidebar_header-container'></div>
    );
}

export const SideBarSearchBar =  () => {
    const [lastInputIcon, setLastIcon] = useState(faSearch);
    const [inputIcon, setInputIcon] = useState(faSearch)
    const [inputRef, setInputRef] = useState(null);
    // const [searchButtonRef, setSearchButtonRef] = useState(null);

    const blurOut = () => {
        console.log("Blurring >>> ", lastInputIcon === faArrowLeft, inputIcon === faSearch);
        setLastIcon(inputIcon);
        setInputIcon(faSearch);
        console.log("Blurring >>> ", lastInputIcon === faSearch, inputIcon === faArrowLeft);
    }

    const focusOn = () => {
        console.log("Focusing >>> ", lastInputIcon === faSearch, inputIcon === faArrowLeft);
        setLastIcon(inputIcon);
        setInputIcon(faArrowLeft);
        console.log("Focusing >>> ", lastInputIcon === faArrowLeft, inputIcon === faSearch);
    }

    const focusIcon = () => {
        inputRef.focus();
    }

    const blurIcon = () => {
        inputRef.blur();
    }

    return (
        <div className='sidebar_search-container'>
            <div className='sidebar_search'>
                <div
                    className='sidebar_search-icon'
                    // ref = {buttonRef => setSearchButtonRef(buttonRef)}
                    onClick = {() => {
                        console.log("blurring out issues >>>>> ", lastInputIcon === faSearch, document.activeElement !== inputRef);

                       return lastInputIcon === faSearch ? focusIcon() : blurIcon();
                    }}
                >
                    <FontAwesomeIcon icon={inputIcon} />
                </div>
                <input
                    type='text'
                    className='sidebar_search-field'
                    placeholder='Search or start a new chat'
                    onFocus = {focusOn}
                    onBlur = {blurOut}
                    ref = {inputRev => setInputRef(inputRev)}
                />
            </div>
        </div>
    );
}

const ChatBox = () => {
    return (
        <div className='chatbox-container'>
            <div className='chat-image'>
                <div  className='circle'>
                    <img src='https://deadline.com/wp-content/uploads/2018/02/bill-gates-2.jpg?w=792' alt='profile' />
                </div>
            </div>
            <div className='mid-60'>
                <p className='chat-name'>Princewill Michael Ifeanyichuwku</p>
                <p className='chat-info'>weekend parol motherfucker owo mi da</p>
            </div>
            <div className='chat-sidebar-timer'>
                10:00am
            </div>
        </div>
    )
}

export const ChatList = () => {
    return (
        <div className='sidebar_chat-list-container'>
            <ChatBox />
            <div className='line' />
            <ChatBox />
        </div>
    )
}


export default SideBarHeader;