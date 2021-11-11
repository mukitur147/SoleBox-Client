import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword ,signOut,onAuthStateChanged, updateProfile} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true)
    const [authError,setAuthError]=useState('')
    const [admin,setAdmin]=useState(false)
    
    const auth = getAuth()

    const registerUser = (email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setAuthError('');
            const newUser= {email,displayName : name } 
            setUser(newUser);
             // save user to database 
             saveUser(email,name);
             
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {  
              }).catch((error) => {
              });
           history.replace('/')
            
          })
          .catch((error) => {
           setAuthError(error.message);
          })
          .finally(()=>setIsLoading(false));
    };
    const loginUser =(email,password , location,history)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           const destination = location?.state?.from || '/';
           history.replace(destination)
            setAuthError('');
           
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=>setIsLoading(false));

    }


    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[])

    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            
        })
        .catch((error)=>{
            
        })
        .finally(()=>setIsLoading(false));
    }



    const saveUser = (email,displayName)=>{
        const user={email,displayName};
        fetch('https://dry-hamlet-68582.herokuapp.com/users',{
            method: 'POST',
            headers :{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    useEffect(()=>{
          fetch(`https://dry-hamlet-68582.herokuapp.com/users/${user.email}`)
          .then(res=>res.json())
          .then(data=>setAdmin(data.admin))
    },[user.email])



    return{
        user,
        admin,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
         
    }

}

export default useFirebase;