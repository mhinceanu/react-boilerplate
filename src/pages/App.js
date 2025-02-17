import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { searchZipcode } from '../actions/zipcode';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  const zipcodeState = useSelector((state) => state.zipcode, shallowEqual);

  useEffect(() => {
    if (!zipcodeState.fetched) {
      dispatch(searchZipcode(707319));
    }
  }, [dispatch, zipcodeState.fetched]);

  // useEffect(() => {
  //   fetch('https://api.zippopotam.us/us/33162').then(res => res.json()).then(res => console.log(res)).catch(err => console.error(err));
  // }, []);

  return <div className="App"></div>;
}

export default App;
