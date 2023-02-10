import React from 'react'
import LogIn from '../components/Auth/Login'







const LogInPage = () => {
   return(
    <LogIn/>
   )
}


export default LogInPage 





{/* <h1>로그인</h1>
                    
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
                      
                        <Link to='/hosp/Reg'>회원가입</Link>
                    </span>
                </p>  */}