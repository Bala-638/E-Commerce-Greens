export default function Login(){
    return(
            <>
                <div className="log">
                    <div class="login-box">
                        <div class="formbox2">

                            <h2>Log In</h2>

                            <form action="/">
                                <div class="inputbox2">
                                    <input type="text" placeholder="Enter Your Name"/>
                                    <label><i class="fa-solid fa-user"></i> User Id</label>
                                </div>
                                <div class="inputbox2">
                                    <input type="password" placeholder="Enter Password"/>
                                    <label><i class="fa-solid fa-lock"></i> Password</label>
                                </div>
                                <div class="remember">
                                    <label><input type="checkbox" />Remember Me</label>
                                </div>
                                <br/>
                                <input className="btn" type="submit" />
                                <div class="register">
                                    <p>Don't have an account?<a href="/signup">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div> 
            </>
    );
}