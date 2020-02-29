import React from 'react'
import CookieCheck from './AuthorizedCookie';

export default class Authorized1 extends React.Component {
    constructor(props) {
        super(props);

        CookieCheck();
    }

    render() {
        return (
            <div>Login済みページ</div>
        )
    }
}