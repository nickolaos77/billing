import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/';
import * as types from '../../src/actions/types';
import expect from 'expect';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const url = 'https://timesheet-training-api.herokuapp.com/api/users';
// set up to mock axios methods

const _get = axios.get;

const sampleUsers = [
  {
    username: 'User_1',
    id: 1,
    email: 'user_1@aurity.co',
  },
  {
    username: 'User_2',
    id: 2,
    email: 'user_2@aurity.co',
  },
];

describe('async actions', () => {
    beforeEach(() => {
        // replace the .get method temporarily with a spy
        axios.get = expect.createSpy().andReturn(Promise.resolve(sampleUsers));
    })

    afterEach(() => {
        // restore the get method with our saved const
        axios.get = _get;
    })

  it('creates FETCH_USERS_SUCCESS when fetching of users has been done', () => {
    const store = mockStore({ users: [] })
      const expected = [
            {type: types.FETCH_USERS, payload: sampleUsers }
        ]
          console.log(actions.fetchUsers());
    return store.dispatch(actions.fetchUsers())
      .then(() => {
                expect(store.getActions()).toEqual(expected)
                expect(axios.get).toHaveBeenCalled()
                expect(axios.get).toHaveBeenCalledWith(url)
            })
    });
});
