import Axios from 'axios';
import mockPets from '../Moks/api';
import { UserData } from '../models/user';
const baseUrl = '';

export function delayPromise<T>(ms: number) {
  return (x: T): Promise<T> =>
    new Promise(resolve => setTimeout(() => resolve(x), ms));
}

export default {
  pets: {
    fecthAll: () => Promise.resolve(mockPets), // Mocks
    // fecthAll: () => Axios.get(baseUrl + 'pets').then((res) => res.data),
    create: (item: any) =>
      Axios.post(baseUrl + 'pets', { item }).then(res => res.data),
  },
  user: {
    request: (userdata: string): Promise<UserData> =>
      Promise.resolve(
        new UserData(
          'juandussan@s4n.co',
          '',
          '',
          'https://avatars0.githubusercontent.com/u/7362688?s=460&v=4',
          userdata,
        ),
      ),
    update: (userData: UserData) => delayPromise<UserData>(2000)(userData),
  },
};
