import './SideBar.css';
import SideBarHeader, { ChatList, SideBarSearchBar } from './SideBarAccessories';


const SideBar = () => {
    return (
        <div className='sidebar_column-wrapper'>
            <SideBarHeader />
            <SideBarSearchBar />
            <ChatList />
        </div>
    )
}

export default SideBar;