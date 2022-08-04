import React, {useState, useEffect} from "react";
import './Login.css';
import axios from "axios";
// import storage from "../../lib/storage";

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {

        axios
            .post('http://localhost:1337/auth/local', {
                'identifier': inputId,
                'password': inputPw,
            })
            .then((response) => {
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                localStorage.setItem('user', JSON.stringify(response.data.jwt))
            })
            .catch((error) => {
                console.log('An error occurred:', error.response);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:1337/users')
            .then(res => console.log(res.data))
            .catch()
    }, [])

    return (
        <div className='wrap'>
            <div className='login'>
                <h2>Login</h2>
                <div>
                    <label htmlFor="identifier">ID : </label>
                    <input type="text" name='identifier' value={inputId} onChange={handleInputId}/>
                </div>
                <div>
                    <label htmlFor="password">PW : </label>
                    <input type="password" name='password' value={inputPw} onChange={handleInputPw}/>
                </div>
                <div>
                    <button type='button' onClick={onClickLogin}>Login</button>
                </div>
            </div>

        </div>
    );
}
export default Login;