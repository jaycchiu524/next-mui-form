import { useStore } from '@/store'
import React from 'react'
import { Stack, Paper, Button, Slider } from '@mui/material'
import { useRouter } from 'next/router'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { JobPost } from '../api/interfaces/job'

import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Pagination,
  Chip,
} from '@mui/material'
import { Container } from '@/components/commons'

type Props = {}

const JobPostHome = (props: Props) => {
  const router = useRouter()
  const jobposts = useStore((state) => state.jobPosts)
  const remove = useStore((state) => state.removeJobPost)

  const list = jobposts.map((jobpost) => {
    return <div key={jobpost.id}>{jobpost.title}</div>
  })

  console.log(list)

  const columnHelper = createColumnHelper<JobPost>()
  const columns = [
    columnHelper.accessor('title', {
      header: () => 'Title',
      cell: (job) => job.getValue(),
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor('company', {
      header: 'Company',
      cell: (job) => job.getValue(),
    }),
    columnHelper.accessor('industry', {
      header: () => 'Industry',
      cell: (job) => job.getValue(),
    }),
    columnHelper.accessor('payrate', {
      header: () => 'Payrate',
      cell: (job) => {
        const payrate = job.getValue()

        if (typeof payrate === 'number') {
          return payrate
        } else {
          return `${payrate[0]} - ${payrate[1]}`
        }
      },
    }),
    columnHelper.accessor('startdate', {
      header: () => 'Start Date',
      cell: (job) => {
        const date = job.getValue()
        if (date instanceof Date) {
          return date.toLocaleDateString()
        } else {
          return new Date(date).toLocaleDateString()
        }
      },
    }),
    columnHelper.accessor('type', {
      header: () => 'Type',
      cell: (job) => job.getValue(),
    }),
    columnHelper.display({
      header: () => 'Actions',
      id: 'actions',
      cell: (job) => {
        return (
          <div>
            {/* <Button
              onClick={(e) => {
                e.preventDefault()
                router.push(`/job-post/${job.row.original.id}`)
              }}>
              View
            </Button> */}
            <Button
              variant="outlined"
              onClick={(e) => {
                e.preventDefault()
                router.push(`/job-post/edit/${job.row.original.id}`)
              }}>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={(e) => {
                e.preventDefault()
                remove(job.row.original.id)
              }}>
              Delete
            </Button>
          </div>
        )
      },
    }),
  ]
  const table = useReactTable({
    data: jobposts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault()
          router.push('/job-post/add')
        }}>
        Insert
      </Button>
      <Table color="white">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {table.getFooterGroups().map((footerGroup) => (
            <TableRow key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableFooter>
      </Table>
      <div className="h-4" />
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </Container>
  )
}

export default JobPostHome
