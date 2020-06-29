const initialState = {
  user: null,
}

const SET_USER = 'SET_USER'

export function setUser(payload) {
  return { type: SET_USER, payload }
}

// export function getUser() {
//   const payload = axios
//     .get('/auth/user')
//     .then((results) => results)
//     .catch((err) => console.log(err))
//   return { type: GET_USER, payload }
// }

// export function registerUser(user) {
//   return {
//     type: REGISTER_USER,
//     payload: user,
//   }
// }

// export function loginUser(user) {
//   return {
//     type: LOGIN_USER,
//     payload: user,
//   }
// }

// export function logoutUser() {
//   return {
//     type: LOGOUT_USER,
//     payload: initialState,
//   }
// }

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    // case LOGIN_USER:
    //   return { ...state, user: action.payload, isLoggedIn: true }
    // case LOGOUT_USER:
    //   return initialState
    // case GET_USER + '_PENDING':
    //   return state
    // case GET_USER + '_FULFILLED':
    //   return { ...state, user: action.payload.data, isLoggedIn: true }
    // case GET_USER + '_REJECTED':
    //   return initialState
    default:
      return state
  }
}
