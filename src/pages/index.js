import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, history } from "react-router-dom";
import { _AuthenticationX } from "../context/authenticationX";
import Home from "./home";
import Preloader from '../components/preloader';
// import LoginPage from "./login";
// import RegisterPage from "./register";
// import Completed from "./completed/completed";


const LoginPage = lazy(()=> import('./login/index'));
const RegisterPage = lazy(()=> import('./register/index'));
const Completed = lazy(()=> import('./completed/completed'));

export default function Index() {
  const url = "http://localhost:4000/";
  const [token, setToken] = useState("");
const [defaultInfo, setDefaultInfo] = useState(true);

const closeHandler = ()=> setDefaultInfo(e=> !e);    

  // const logInRef = useRef();

const [auth,setAuth] = useState(sessionStorage.getItem("_tk")? true : false);

let [regNum, setRegNum] = useState('');
let [pwd, setPwd] = useState('');

let regVal = e=> setRegNum(e.target.value);
let pwdVal = e=> setPwd(e.target.value);
let [checkRegNum, setCheckRegNum] = useState(false);
let [checkPassword, setCheckPasword] = useState(false);



  // setting Token and also persisting it with sessionStorage
  const setTokenHandler = (_payload) => {
    setToken(_payload);
    sessionStorage.setItem("_tk", _payload);
  };


const formHandler = async e => {
  e.preventDefault();
  // if(checkRegNum.length !== '8' && pwd !== '1234567'){
  //   setAuth(auth);
  //   setCheckPasword(true);
  //   setCheckRegNum(true);
  // }else{
  //   setAuth(!auth)
  // }



  try {
    const fetching  = await fetch(`${url}user/account/login`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            loginID: regNum, 
            password: pwd
        })
    })

    const response = await fetching.json()
if(response.error){
    setCheckPasword(true);
    setCheckRegNum(true);
  return
} else {
  console.log("response => ", response)
  setTokenHandler(response.data)
    setAuth(!auth)
}
    
} catch (error) {
    console.log("error => ", error)
}
// 08104164524





}

// const [areYouSure, setAreYouSure] = useState(true);

// const areYouSureHandler = ()=> setAreYouSure(!true);
    
  
  return (
      <BrowserRouter>
      <MainContext.Provider value={{url,
        token,
        setToken: setTokenHandler,}}>
      <Suspense fallback={<Preloader />}>
      {!auth &&
    <>
    
       <Routes>
         
        <Route path="/login" exact element={<LoginPage regNum={regNum} pwd={pwd} 
        regVal={regVal} 
        pwdVal={pwdVal}
        formHandler={formHandler}
        closeHandler={closeHandler}
        defaultInfo={defaultInfo}
        checkPassword={checkPassword}
        checkRegNum={checkRegNum}
        />} 
        />

        <Route path="register" exact element={
          <div>
            <RegisterPage/>

          </div>
        }/>
        <Route path="*" element={<Navigate to={'/login'}/>}/>
      </Routes>
    </>}
    {/* auth route  */}
      {auth && <Routes>
      <Route path="/login"  element={<Navigate to={'/'}/>}/>
      <Route path="/register"  element={<Navigate to={'/'}/>}/>
      {/* main element display  */}

      <Route path="/" exact element={<Home/>} />
      <Route path="/completed" exact element={<Completed />} />
      </Routes>}

      {/* if not logged in */}
        </Suspense>
        </MainContext.Provider>
      </BrowserRouter>
  );
}


export const MainContext = React.createContext({
  token: null,
  url: null,
  setToken: () => {},
});
