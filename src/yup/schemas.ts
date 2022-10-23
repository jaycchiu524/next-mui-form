import { Company } from '@/pages/api/interfaces/company'
import { JobPost } from '@/pages/api/interfaces/job'
import * as yup from 'yup'

type SchemaShape<T extends object> = Partial<Record<keyof T, yup.AnySchema>>

export const CompanySchema = yup.object().shape<SchemaShape<Company>>({
  name: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().optional(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  description: yup.string().required(),
})

export const JobSchema = yup.object().shape<SchemaShape<JobPost>>({
  // company: yup.object().shape<SchemaShape<Company>>({
  //   id: yup.number().required(),
  // }),
  company: yup.string().required(),
  title: yup.string().required(),
  category: yup.string().required(),
  type: yup.string().required(),
  industry: yup.string().required(),
  description: yup.string().required(),
  payrate: yup.array().of(yup.number()).required(),
  startdate: yup.date().required(),
})
