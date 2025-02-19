import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import LoadingIndicator from '../shared/LoadingIndicator';
import ZipcodeDetails from '../components/ZipcodeDetails';
import { searchZipcode } from '../actions/zipcode';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const zipcodeState = useSelector((state) => state.zipcode, shallowEqual);

  const handleChange = useCallback((e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  }, []);

  const handleSearch = useCallback(() => {
    dispatch(searchZipcode(Number(value)));
  }, [dispatch, value]);

  const handleKeyUp = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  const isDisabled = useMemo(() => {
    return value?.length === 0;
  }, [value]);

  return (
    <div className="bp-app">
      <h4>Search information about zipcode.</h4>
      <p>Here are some examples: 90210, 33162</p>

      <div className="bp-app__search">
        <input
          tabIndex={0}
          type="number"
          placeholder="Zipcode..."
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyUp={handleKeyUp}
        />
        <button
          tabIndex={0}
          onClick={handleSearch}
          onKeyUp={handleSearch}
          disabled={isDisabled}
        >
          Search
        </button>
      </div>

      {zipcodeState.isFetching && <LoadingIndicator />}

      {zipcodeState.fetched && <ZipcodeDetails details={zipcodeState.data} />}
    </div>
  );
}

export default App;
