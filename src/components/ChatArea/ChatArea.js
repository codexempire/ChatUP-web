import './ChatArea.css';
import {ChatContainer, ChatInput, ChatListHeader} from './ChatAreaAccessories';

const ChatArea = () => {
    return (
        <div className='chat_column-wrapper'>
            <ChatListHeader />
            <div className='chat_content-wrapper'>
                <ChatContainer />
                <ChatInput />
            </div>
        </div>
    )
}

export default ChatArea