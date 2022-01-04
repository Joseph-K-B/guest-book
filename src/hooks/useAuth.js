import { useContext } from "react";
import  { authCtx }  from '../context/AuthCtx';

function useAuth() {
  const ctx = useContext(authCtx);

  if(ctx === undefined) {
    throw new Error('useAuth may only be called as a child of the auth provider');
  }
  return ctx;
}


export default useAuth;