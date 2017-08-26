import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { initialState as jpInitialState } from 'react-jplayer';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);

import 'react-jplayer/src/less/skins/sleek.less';
import 'react-jplayer/src/less/controls/iconControls.less';

import LivePlayer from '../components/Player';

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    {
      ...initialState,
      jPlayers: jpInitialState(LivePlayer),
    },
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(middleware),
      DevTools.instrument()
    )
  );
}
