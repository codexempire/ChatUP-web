import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ChatPage from './pages/chats/ChatPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chat" component={ChatPage} />
                <Route path="*" redirect="/chat" />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;