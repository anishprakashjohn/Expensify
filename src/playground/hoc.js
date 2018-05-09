//Higher Order Component
//Reuse code, Rednder hijacking, prop manipu,ation, Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> The info is :{props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props)=> (
        <div>
            { props.isAdmin && <p> This is private info. Please don't share </p>}
            <WrappedComponent {...props}/>

        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
           {
               props.isAuth ? (
                   <WrappedComponent {...props} />
               ) :(<p> Please Login for viewing details </p>)
           }
            
        </div>

    )
}

const AdminInfo=withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="These are the details" />,document.getElementById('app'))