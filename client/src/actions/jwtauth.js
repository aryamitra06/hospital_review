import { handleSignUp, handleLogin } from "../api/api";

export const signUp = (authData) => async (dispatch) => {
  try {
    const { data } = await handleSignUp(authData);
    dispatch({ type: 'SIGN_UP', payload: data });
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  } catch (error) {
    console.log(error.response.data.message);
  }
}

export const signIn = (authData) => async (dispatch) => {
  try {
    const { data } = await handleLogin(authData);
    dispatch({ type: 'SIGN_IN', payload: data });
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  } catch (error) {
    console.log(error.response.data.message);
  }
}