import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import DataList from './components/DataList';
import ViewData from './components/ViewData';
import EditData from './components/EditData'

export const userContext = React.createContext()

const initUserState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'addUser': {
      return [...state, action.user]
      // return { ...state, state.user:  }
    }
    case 'deleteUser': {
      return state.filter(user => user.email !== action.user.email)
    }

    default: return state
  }
}


function App() {
  const [users, dispatch] = useReducer(reducer, initUserState)
  return (
    <userContext.Provider value={[users, dispatch]}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/data-list' element={<DataList />}></Route>
        <Route path='/view-data' element={<ViewData />}></Route>
        <Route path='/edit-user' element={<EditData />}></Route>
      </Routes>
    </userContext.Provider >
  );
}

export default App;
