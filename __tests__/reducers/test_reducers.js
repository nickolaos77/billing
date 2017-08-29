import expect from 'expect'
import reducer from '../../src/reducers/daysReducer';
import { DAYS_ARRAY } from '../../src/actions/types';

describe('days reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle DAYS_ARRAY', () => {
    expect(
      reducer([], {
        type: DAYS_ARRAY,
        payload:[1, 2, 3, 4, 5, 6, 7],
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('should handle DAYS_ARRAY', () => {
    expect(
      reducer([], {
        type: DAYS_ARRAY,
        payload: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
