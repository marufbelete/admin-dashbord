// import { signupActions } from "./signup-slice"
import { loginActions } from "./login-slice"
import { loadingActions } from "./loading-slice"
import axios from "axios"
import { errorActions } from "./error-slice"
import { userinfoActions } from "./userinfo-slice"
// export const registerUser=(data)=>{
//     return async(dispatch)=>{
//         try{
//             console.log(data)
//             const res=await axios.post('http://localhost:8000/register',data)
//             dispatch(signupActions.status("success"))
//         }
//        catch(err)
//        {
//            console.log(err)
//            console.log(err.response)
//         dispatch(signupActions.status("error"))

//        }

//     }
// }

export const loginUser=(data)=>{
    console.log(data)
    return async(dispatch)=>{
        try{
            const res=await axios.post('https://sultan-lm2.herokuapp.com/login',data,{ withCredentials: true })
            console.log(res)
            dispatch(loginActions.isLoged(true))
            dispatch(loadingActions.status('done'))
            dispatch(userinfoActions.setUser({username:res.data.username,role:res.data.role}))
        }
       catch(err)
       {
        console.log(err)
     !!err.response&&dispatch(loginActions.isLoged(false))
     !!err.response&&dispatch(errorActions.Message(err.response.data.message))
     !err.response&&dispatch(errorActions.Message('connection error please try again'))
     dispatch(loadingActions.status('done'))
     
       }

    }
}