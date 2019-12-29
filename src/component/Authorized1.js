import React from 'react'
import Authenticate from 'react-openidconnect';

// const OidcSettings = {
//     authority: 'https://idcs-862b2a8f4c42423b982ab5826c882693.identity.oraclecloud.com/',
//     client_id: 'e6b74aa176e24c5894e6530348e0ac57',
//     redirect_uri: 'http://140.238.53.137:3000/',
//     response_type: 'id_token token',
//     scope: 'openid profile roles',
//     post_logout_redirect_uri: 'http://140.238.53.137:3000/'
// };

const OidcSettings = {
    authority: 'https://idcs-862b2a8f4c42423b982ab5826c882693.identity.oraclecloud.com/',
    client_id: 'e6b74aa176e24c5894e6530348e0ac57',
    redirect_uri: 'https://demo.sugimount.tokyo/authorized1',
    response_type: 'id_token token',
    scope: 'openid profile roles',
    post_logout_redirect_uri: 'https://demo.sugimount.tokyo/authorized1'
};


export default class Authorized1 extends React.Component {
    constructor(props) {
        super(props);
        this.userLoaded = this.userLoaded.bind(this);
        this.userUnLoaded = this.userUnLoaded.bind(this);

        this.state = { user: undefined };
    }

    userLoaded(user) {
        if (user)
            this.setState({ "user": user });
    }

    userUnLoaded() {
        this.setState({ "user": undefined });
    }

    NotAuthenticated() {
        return <div>You are not authenticated, please click here to authenticate.</div>;
    }

    render() {
        return (
            <Authenticate OidcSettings={OidcSettings} userLoaded={this.userLoaded} userunLoaded={this.userUnLoaded} renderNotAuthenticated={this.NotAuthenticated}>
                <div>If you see this you are authenticated.</div>
            </Authenticate>
        )
    }
}