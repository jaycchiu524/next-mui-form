import { immer } from 'zustand/middleware/immer'
import create from 'zustand'
import { Company } from '@/pages/api/interfaces/company'
import { JobPost } from '@/pages/api/interfaces/job'

// dummy data
import dummyJobPost from '@/pages/api/dummy/jobpost.json'

type Store = {
  companies: Company[]
  jobPosts: JobPost[]
  appendJobPost: (jobPost: JobPost) => void
  appendCompany: (company: Company) => void
  removeJobPost: (id: string) => void
  removeCompany: (id: string) => void
  setCompanies: (companies: Company[]) => void
  setJobPosts: (jobPosts: JobPost[]) => void
}

const defaultJobPosts = dummyJobPost as JobPost[]

export const useStore = create<Store>()(
  immer((set, get) => ({
    companies: [],
    jobPosts: [...defaultJobPosts],
    appendJobPost: (jobPost: JobPost) => {
      set((state) => {
        state.jobPosts.push(jobPost)
      })
    },
    appendCompany: (company: Company) => {
      set((state) => {
        state.companies.push(company)
      })
    },
    removeJobPost: (id: string) => {
      set((state) => {
        state.jobPosts = state.jobPosts.filter((jobPost) => jobPost.id !== id)
      })
    },
    removeCompany: (id: string) => {
      set((state) => {
        state.companies = state.companies.filter((company) => company.id !== id)
      })
    },
    setCompanies: (companies: Company[]) => set({ companies }),
    setJobPosts: (jobPosts: JobPost[]) => set({ jobPosts }),
  })),
)
