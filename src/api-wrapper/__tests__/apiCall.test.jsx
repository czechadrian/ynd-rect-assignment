import { apiGet, createUrl } from '../apiCall';
import axios from 'axios';
jest.mock('axios');
describe('test apiCall', () => {
  const testUrl = 'testUrl';
  const defaultAxiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  beforeEach(() => {
    axios.mockClear();
  });
  const axiosConfig = {
    ...defaultAxiosConfig
  };
  test('should test apiGet', async () => {
    axios.get.mockResolvedValue({
      queryUrl: 'testData',
      config: { ...axiosConfig }
    });
    await apiGet(testUrl, { ...axiosConfig });

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(testUrl, { ...axiosConfig });
  });
  test('should test createUrl', () => {
    expect(createUrl('/test/createUrl')).toEqual('/test/createUrl');
    expect(createUrl('/test/createUrl', { val: 'abc' })).toEqual(
      '/test/createUrl?val=abc'
    );
  });
});
