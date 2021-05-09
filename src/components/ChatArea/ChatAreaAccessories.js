import { faPaperclip, faPaperPlane, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const ChatListHeader = () => {
    return (
        <div className='chat_header-container'></div>
    );
}

const ChatItem = ({sender}) => {
    if(!sender) {
        return (
        <div className='item-wrapper'>
            <div className='item_item-container'>
                <div className='item_item-user'>
                    Princewill Michael
                </div>
                <div className='item_message'>
                    bhjnfkjdfbufjjojkpofbfjkndmf,andjhfbiurjfol;kfm,dbfjheuifjmlmncjidvuifvmvjhfbvjkfnvfkjbfnfjklmfnnfuiefkmfbefuhafiofkmf,fnieruhfuijemvnefjivbefuijfpokfpokfhbrjgknme,fanghreuifjerkfnefbvfj,nfkefiogfuigjefige
                    <span className='timer'>1035pm</span>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className='item-wrapper sender'>
            <div className='item_item-container'>
                <div className='item_item-user'>
                    Princewill Michael
                </div>
                <div className='item_message'>
                    bhjnfkjdfbufjjojkpofbfjkndmf,andjhfbiurjfol;kfm,dbfjheuifjmlmncjidvuifvmvjhfbvjkfnvfkjbfnfjklmfnnfuiefkmfbefuhafiofkmf,fnieruhfuijemvnefjivbefuijfpokfpokfhbrjgknme,fanghreuifjerkfnefbvfj,nfkefiogfuigjefige
                    <span className='timer'>1035pm</span>
                </div>
            </div>
        </div>
        )
}

export const ChatContainer = () => {
    const [listRef, setListRef] = useState(null);

    useEffect(() => {
        if(listRef) listRef.scrollTop = listRef.scrollHeight;
    }, [listRef])
    return (
        <div className='chat_content-container' ref={(lisRef) => setListRef(lisRef) }>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem sender={true} />
        </div>
    )
}

export const ChatInput = () => {
    const [openIcons, setOpenIcons] = useState(false)
    return (
        <div>
            <div className='chat_input-container'>
                <div className='chat_send-button'>
                    <FontAwesomeIcon icon={faSmile} rotate={50} className='send-logo hidden' />
                </div>
                <div className='chat_send-button'>
                    <FontAwesomeIcon icon={faPaperclip} rotate={50} className='send-logo'
                        onClick={() => setOpenIcons(!openIcons)}
                    />
                </div>
                <input type='text' placeholder='Type a message' className='chat_input-field' />
                <div className='chat_send-button'>
                    <FontAwesomeIcon icon={faPaperPlane} rotate={50} className='send-logo' />
                </div>
            </div>
            <div style={openIcons ? { display: "flex", justifyContent: "space-evenly", padding: '1rem', maxHeight: '20rem', flexWrap: 'wrap', overflowY: 'scroll', fontSize: '1rem', color: 'orange', margin: '1rem'} : {display: 'none'}}>
                {
                    // Object.keys(allIcon).map(key => {
                    //     return (key && key !== 'fas') && (
                    //     <div className='chat_send-button'>
                    //         <FontAwesomeIcon icon={allIcon[key]} key={`${key}`} rotate={50} className='send-logo' />
                    //     </div>
                    // )})
                }
            </div>
        </div>    
    )
}