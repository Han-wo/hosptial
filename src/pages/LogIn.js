import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from 'axios';
import Register from './Register';


const LOGIN_URL = '/auth';

const LogIn = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    /*
    const로 변수 지정해주고 필요한 유저 비밀번호 에러메시지 성공메시지를 지정해주고
    useState값을 null값으로 지정해준다*/


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3004/post',
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('서버가 존재하지 않습니다');
            } else if (err.response?.status === 400) {
                setErrMsg('아이디 혹은 비밀번호가 없습니다');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('로그인 실패');
            }
            errRef.current.focus();
        }
    }
    /* try catch 문을 이용하여 로그인 성공 및 실패를 구성해준다
    catch문 및에는 조건문을 이용해서 각각의 에러 상황을 지정해준다
    */

    return (
        <>
            {success ? (
                <section>
                    <h1 margin-bottom ='30px'>로그인 성공!</h1>
                    <br />
                    <p>
                        <a href="#">홈으로 이동</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>로그인</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">아이디:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>로그인</button>
                    </form>
                    <p>
                        계정을 만드시겠습니까?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">회원가입</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default LogIn