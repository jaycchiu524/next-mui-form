import { Company } from '@/pages/api/interfaces/company'
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
