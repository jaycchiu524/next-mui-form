import { faker } from '@faker-js/faker'

export type Company = {
  id: string
  name: string
  address: string
  email: string
  phone: string
  description?: string
  city?: string
}

export function createRandomCompany(): Company {
  return {
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('+1##########'),
    description: faker.lorem.sentences(2),
  }
}
