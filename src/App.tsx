import React from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from './app/actions/users';

function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');

  const searchHandler = (search: string) => {
    setSearch(search);
  };

  return (
    <main>
      <input onChange={(val) => searchHandler(val.target.value)} />
      <button onClick={() => dispatch(getUsers(search))}>Search</button>
    </main>
  );
}

export default App;
