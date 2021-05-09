import { useEffect, useState } from 'react';
import ChatArea from '../../components/ChatArea/ChatArea';
import Container from '../../components/container/Container';
import SideBar from '../../components/sidebar/SideBar';

const ChatPage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    if(screenWidth > 768)
        return (
            <Container>
                <SideBar />
                <ChatArea />
            </Container>
    
        )

    return (
        <Container className='column'>
            <p>Please Download the Mobile Application</p>
            <button className='download-button'>DOWNLOAD APP</button>
        </Container>
    )
}
export default ChatPage;