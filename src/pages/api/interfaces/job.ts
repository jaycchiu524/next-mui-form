import { Company } from './company'

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
  // company: Company | null
  company: string
  title: string
  category: string
  type: JobType
  industry: JobIndustry
  description: string
  payrate: number[] | number
  startdate: Date | number
  // description: string
  // location: string
  // payrateType: string
}
