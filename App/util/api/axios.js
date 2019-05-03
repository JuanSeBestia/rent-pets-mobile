import Axios from 'axios';
import mockPets from '../Moks/api';
const baseUrl = '';
export default {
  pets: {
    fecthAll: () => Promise.resolve(mockPets), // Mocks
    // fecthAll: () => Axios.get(baseUrl + 'pets').then((res) => res.data),
    create: (item) =>
      Axios.post(baseUrl + 'pets', {item}).then((res) => res.data),
  },
};
