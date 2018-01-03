import Mock from 'mockjs';

const mockFuns = {
  /**
	 * 进行mock参数验证，返回mock数据
	 * @template 请求参数模板
	 * @data 请求成功后返回的data
	 * @req http的request请求
	 * @return 返回mock数据
	 */
  setMockData: (template = null, data, req) => {
    let result = {};
    let valid = [];
    if (template) {
      valid = Mock.valid(template, JSON.parse(req.body));
    }
    // 请求参数验证成功
    if (valid.length === 0) {
      result = {
        code: 0,
        data,
        msg: ''
      };
    } else {
      result = {
        code: 1200,
        data: valid,
        msg: '参数错误'
      };
    }
    return result;
  }
};
export default mockFuns;
