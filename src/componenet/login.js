export default function Login(){
    return(
            <>
                <div className="log">
                    <div className="login-box">
                        <div className="formbox2">

                            <h2>Log In</h2>

                            <form action="/">
                                <div className="inputbox2">
                                    <input type="text" placeholder="Enter Your Name"/>
                                    <label><i className="fa-solid fa-user"></i><span className="loginLable"> User Id</span> </label>
                                </div>
                                <div className="inputbox2">
                                    <input type="password" placeholder="Enter Password"/>
                                    <label><i className="fa-solid fa-lock"></i><span className="loginLable"> Password</span> </label>
                                </div>
                                <div className="remember">
                                    <label><input type="checkbox" />Remember Me</label>
                                </div>
                                <br/>
                                <input className="btn" type="submit" />
                                <div className="register">
                                    <p>Don't have an account?<a href="/signup">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div> 
            </>
    );
}