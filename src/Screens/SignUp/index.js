import Button from "../../Component/Button/Button";


function SignUp(){
    return(
        <>
            <h1>Signup.</h1>
            <p> Sign up and get exclusive offers from us</p>
            <div className="form sign-in">
                <label>
                    <span>Name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>
                <label>
                    <span>Confirm your password</span>
                    <input type="password" />
                </label>
                <Button/>
                
                <p className="forgot-pass">Forgot password?</p>
                {/*<button type="button" class="submit">Sign In</button>*/}
                {/*<button type="button" class="fb-btn">Connect with <span>facebook</span></button>*/}
            </div>
            </>


    )
}