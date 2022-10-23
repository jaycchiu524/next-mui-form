import { immer } from 'zustand/middleware/immer'
import create from 'zustand'
import { Company } from '@/pages/api/interfaces/company'
import { JobPost } from '@/pages/api/interfaces/job'

type Store = {
  companies: Company[]
  jobPosts: JobPost[]
  setCompanies: (companies: Company[]) => void
  setJobPosts: (jobPosts: JobPost[]) => void
}

export const useStore = create<Store>()(
  immer((set, get) => ({
    companies: [],
    jobPosts: [],
    setCompanies: (companies: Company[]) => set({ companies }),
    setJobPosts: (jobPosts: JobPost[]) => set({ jobPosts }),
  })),
)
