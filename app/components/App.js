import React from 'react';
import Routes from '../routes';
import Menu from './ApplicationHeader';

const App = () =>
  <div>
    <Menu/>
    {Routes}
    <footer>

    </footer>
  </div>;

export default App;
