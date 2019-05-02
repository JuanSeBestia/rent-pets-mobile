import * as Faker from 'faker';
import { iPet } from '../models/pets';
export const getPet = () => ({
  name: Faker.name.findName(),
  id: Faker.random.number({ min: 1 }),
  dimensions: {
    width: Faker.random.number({ min: 1 }) / 100,
    height: Faker.random.number({ min: 1, precision: 2 }) / 100,
    weight: Faker.random.number({ min: 1, precision: 2 }) / 100,
  },
  price: Faker.random.number({ min: 1, precision: 2 }) / 100,
  image:
    Faker.image.imageUrl(undefined, undefined, 'animals') +
    '?force_random=' +
    Faker.random.number({ min: 1 }),
  category: Faker.lorem.word(),
  description: Faker.lorem.paragraph(),
  like: Faker.lorem.paragraph(),
  dontlike: Faker.lorem.paragraph(),
  accesories: [],
});
const mockPets: iPet[] = [];
for (let index = 0; index < 19; index++) {
  mockPets.push(getPet());
}
console.log({ pets: mockPets });
export default mockPets;
