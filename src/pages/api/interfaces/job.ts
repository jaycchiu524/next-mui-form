import { Company } from './company'

export type JobPost = {
  company: Company
  title: string
  category: string
  type: 'full-time' | 'part-time' | 'contract'
  industry: string
  description: string
  payrate: number
  startdate: Date | number
  // description: string
  // location: string
  // payrateType: string
}
