// * React Components
import React, { useReducer } from 'react';

// * Third party Components
import { Routes, Route } from 'react-router-dom'

// * Custom Components
import DataList from './components/DataList';
import EditData from './components/EditData'
import Home from './components/Home';
import ViewData from './components/ViewData';
import CounterTask from './components/CounterTask';
import CounterThree from './components/CounterThree';

// * Create Custom Context(userContext)
export const userContext = React.createContext()

// * Initial State for Reducer
const initUserState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, action.user]
    }
    case 'EDIT_USER': {
      return state.map(user => user.email === action.user.email ? action.user : user)
    }
    case 'DELETE_USER': {
      return state.filter(user => user.email !== action.user.email)
    }
    default: return state
  }
}


function App() {
  const [users, dispatch] = useReducer(reducer, initUserState)
  return (
    <CounterThree />
    // <CounterTask />
    // <userContext.Provider value={[users, dispatch]}>
    //   <Routes>
    //     <Route path='/' element={<Home />}></Route>
    //     <Route path='/data-list' element={<DataList />}></Route>
    //     <Route path='/view-data' element={<ViewData />}></Route>
    //     <Route path='/edit-user' element={<EditData />}></Route>
    //   </Routes>
    // </userContext.Provider >
  );
}

export default App;
