import { faker } from '@faker-js/faker'

export const jobIndustries = [
  'IT',
  'Finance',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Retail',
  'Hospitality',
  'Construction',
  'Transportation',
  'Other',
] as const

export const jobTypes = [
  'full-time',
  'part-time',
  'contract',
  'internship',
] as const

export type JobIndustry = typeof jobIndustries[number]
export type JobType = typeof jobTypes[number]

export interface JobPost {
  id: string
  company: string
  title: string
  category: string
  type: JobType
  industry: JobIndustry
  description: string
  payrate: number[] | number
  startdate: Date | number
}

export function createRandomJobPost(): JobPost {
  return {
    id: faker.datatype.uuid(),
    company: faker.company.name(),
    title: faker.name.jobTitle(),
    category: faker.name.jobDescriptor(),
    type: faker.helpers.arrayElement(jobTypes),
    industry: faker.helpers.arrayElement(jobIndustries),
    description: faker.lorem.sentences(2),
    payrate: [
      faker.datatype.number({ max: 40000, precision: 1000 }),
      faker.datatype.number({ min: 41000, precision: 1000 }),
    ],
    startdate: faker.date.past(),
  }
}
