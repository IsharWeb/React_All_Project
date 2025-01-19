import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/loginSlice'
import Logout from './Logout'
// import configSlice from '../store/loginSlice'
import '../App.css'
import Navbar from './Navbar'

function Login() {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [status, setStatus] = useState(false)
    const [showPass, setShowPass] = useState("password")
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.storeLogin.userLogin);

    //  console.log("login user =", user);
    //const selectUserLogin = (state) => state.storeLogin.userLogin;
    //console.log(selectUserLogin);

    const submitHandler = (e) => {

        e.preventDefault()
        if (user, pass, email, msg) {

            dispatch(login(

                {
                    userName: user,
                    userStatus: status,
                    userpass: pass,
                    userEmail: email,
                    userMsg: msg
                }

            ))
            setEmail("")
            setMsg("")
            setPass("")
            setUser("")

        } else {

            alert('Your name password email and message reaquird')

        }
    }
    // console.log("login addsubmitHandler username = ", user.userName);
    // console.log(showPass.type)

    const showPassword = () => {
        // console.log(showPass.type)
        // const showpassword = document.getElementById("ishar");
        //  console.log(x);

        if (showPass === "password") {
            //showPass.type = 'text';
            setShowPass("text")
        } else {
            //showPass.type = "password";
            setShowPass("password")
        }
        // console.log(showPass.type)

        // const show = document.getElementById('showPassword');
        // var x = document.getElementsByClassName("ishar");
        // if (x.type === "password") {
        //   x.type = "text";
        // } else {
        //   x.type = "password";
        // }
        // if (showPassword.type === "password") {
        //     showPassword.type = "text"

        // } else {
        //     showPassword.type = "password"  
        // }    
    }

    const rememberMe = () => {

        // console.log(showPass.type)
        // const remember = document.getElementById("remember");
        //  console.log(x);

        if (status === false) {
            //showPass.type = 'text';
            setStatus(true)
        } else {
            //showPass.type = "password";
            setStatus(false)
        }

    }

    const cancelBtn = () => {
        setEmail("")
        setMsg("")
        setPass("")
        setStatus("")
        setShowPass("")
        setUser("")
        const sty = document.getElementById('id01')
        sty.style.display = 'none'
    }

    const forgotPassword = () => {
        console.log('forgot password was clicked');
    }

    const closeBtn = () => {
        const sty = document.getElementById('id01')
        sty.style.display = 'none'
        const log = document.getElementById('log')
        log.style.display = 'block'

    }
    return (

        <>
            
            {/* {user ? <Navbar Login="Logout"  /> : <Navbar Login='Login' />} */}
           <Navbar Login="Login"/>

            <div id="id01" className="modal">
                <form className="modal-content animate" >
                    <div className="imgcontainer">
                        <span className="close" id='close' onClick={closeBtn} title="Close Modal">&times;</span>
                        <img src="" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label htmlFor="uname"><b>Your Name</b></label>
                        <input type="text"
                            placeholder="Enter Username" name="uname"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />

                        <label htmlFor="uemail"><b>Your Email</b></label>
                        <input type="email"
                            placeholder="Enter Username" name="uemail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            id='ishar'
                            type={showPass}
                            placeholder="Enter Password"
                            name="psw"
                            required
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />

                        <input type="checkbox" onClick={showPassword} /> Show Password <br />

                        <label htmlFor="msg"><b> Your Msg </b></label>
                        <textarea
                            className='ishar'
                            name="msg" value={msg}
                            onChange={e => setMsg(e.target.value)}
                            placeholder="Write something.."
                        >
                        </textarea>

                        <label>
                            <input
                                // id='remember'
                                type="checkbox"
                                value={status}
                                onClick={rememberMe}
                                name="remember"
                            />
                            <b> Remember me</b>
                        </label>

                        <button type="submit" onClick={submitHandler}>Login</button>
                        <Logout />

                    </div>

                    <div className="container" >
                        <button type="button" onClick={cancelBtn} className="cancelbtn">Cancel</button>
                        <span className="psw" onClick={forgotPassword}>Forgot password?</span>
                    </div>
                </form>
            </div>

        </>

    )
}

export default Login