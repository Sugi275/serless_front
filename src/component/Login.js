import React from 'react';
import cookie from 'react-cookies';
import uuid from 'react-uuid'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        cookie.save('loginState', uuid(), { path: '/' })
    }

    render() {
        return (
            <React.Fragment>
                <div><a href="http://140.238.53.137:8080/login?provider=oracle">Oracle でログイン</a></div>
                <div><a href="http://140.238.53.137:8080/login?provider=twitter">Twitter でログイン(未実装)</a></div>
            </React.Fragment>
        )
    }
}
