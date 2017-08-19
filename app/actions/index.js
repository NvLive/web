import * as types from './types';
import { get } from './fetch';

/**
 * @param {string} header
 * @returns {Function}
 */
export function setApplicationHeader(header) {
  return function(dispatch) {
    return dispatch({
      type: types.SET_APPLICATION_HEADER,
      data: header
    });
  };
}

export function fetchShows() {
  return function(dispatch) {
    return get('shows/').then(json =>
      dispatch({
        type: types.FETCH_LIST,
        data: {
          list: json.list,
          sectionName: 'shows'
        }
      })
    );
  };
}

export function fetchBroadcasts(data = {}) {
  return function(dispatch) {
    let url = 'broadcasts/';
    if (data.showId) {
      url = url + data.showId + '/last/10';
    } else if (data.last) {
      url = url + 'last/' + data.last;
    } else {
      url = url + 'last/10';
    }
    return get(url).then(json =>
      dispatch({
        type: types.FETCH_LIST,
        data: {
          list: json.list,
          sectionName: 'broadcasts'
        }
      })
    );
  };
}

export function fetchCurrentBroadcasts() {
  return function(dispatch) {
    return get('broadcasts/current/').then(json => {
      dispatch({
        type: types.FETCH_LIST,
        data: {
          list: json.list,
          sectionName: 'broadcasts'
        }
      });
    });
  };
}
