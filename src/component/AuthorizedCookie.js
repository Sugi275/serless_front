import cookie from 'react-cookies';
import { push } from 'connected-react-router'
import store from '../store/configureStore';

function CookieCheck(props) {
    const sessionid = cookie.load("sessionid")
    console.log(sessionid);

    // ログイン済みではなかった場合、/login を表示する
    if (!sessionid) {
        store.dispatch(push('/login'));
    }
}

export default CookieCheck;