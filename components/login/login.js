import React from 'react'

class Login extends React.Component{
    render(){
        return (
            <div>
                <form action="">
                    <div>
                        <label htmlFor="">User</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login