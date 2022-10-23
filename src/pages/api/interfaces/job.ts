import { Company } from './company'

export type JobIndustry =
  | 'IT'
  | 'Finance'
  | 'Healthcare'
  | 'Education'
  | 'Other'

export interface JobPost {
  id: string
  // company: Company | null
  company: string
  title: string
  category: string
  type: 'full-time' | 'part-time' | 'contract'
  industry: JobIndustry
  description: string
  payrate: number[] | number
  startdate: Date | number
  // description: string
  // location: string
  // payrateType: string
}
