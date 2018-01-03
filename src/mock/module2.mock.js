import Mock from 'mockjs';

import MF from './mock.funs.js';

const getDataList = (req) => {
  const data = {
    list: [
      { id: 1, name: '刘德华' },
      { id: 2, name: '张学友' }
    ]
  };
  return MF.setMockData(null, data, req);
};

Mock.mock('api/auth/v1/users/list2?id=123', 'get', getDataList);
