import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'react-jplayer/src/less/skins/sleek.less';
import 'react-jplayer/src/less/controls/iconControls.less';
import './styles/index.scss';

import theme from '!!sass-variable-loader!./styles/theme.scss';

injectTapEventPlugin();

const store = configureStore();

render(
  <MuiThemeProvider  muiTheme={getMuiTheme({
    palette: {
      ...theme
    },
  })}>
    <AppContainer>
      <Root store={store} history={history}/>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const newConfigureStore = require('./store/configureStore');
    const newStore = newConfigureStore.configureStore();
    const newHistory = newConfigureStore.history;
    const NewRoot = require('./containers/Root').default;
    render(
      <MuiThemeProvider  muiTheme={getMuiTheme({
        palette: {
          ...theme
        },
      })}>
        <AppContainer>
          <NewRoot store={newStore} history={newHistory}/>
        </AppContainer>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  });
}
