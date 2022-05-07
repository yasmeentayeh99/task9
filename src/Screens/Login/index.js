

function Login(){
    return(
    <div>
        Login<br /><br />
        <h6> Login with your data that you entered during registration</h6>
        <div>
            Username<br />
            <input type="text" {...username} autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
            Password<br />
            <input type="password" {...password} autoComplete="new-password" />
        </div>
    </div>
    )
}

export default Login;