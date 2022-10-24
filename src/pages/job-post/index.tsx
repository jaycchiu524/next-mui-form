import { useStore } from '@/store'
import React, { useState, useEffect } from 'react'
import { Checkbox, IconButton, Button, Stack, Tooltip } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditSharpIcon from '@mui/icons-material/EditSharp'
import { useRouter } from 'next/router'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { jobIndustries, JobPost, jobTypes } from '@/pages/api/interfaces/job'
import { faker } from '@faker-js/faker'

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
import { Container, paginate } from '@/components/commons'
import Header from '@/components/Header'

type Props = {}

const JobPostHome = (props: Props) => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState<JobPost[]>([])
  const [selected, setSelected] = React.useState<string[]>([])

  const router = useRouter()
  const jobposts = useStore((state) => state.jobPosts)
  const remove = useStore((state) => state.removeJobPost)
  const bulkRemove = useStore((state) => state.bulkRemoveJobPost)

  useEffect(() => {
    setCurrentPage(paginate(jobposts, rowsPerPage, page))
  }, [jobposts, page, rowsPerPage])

  const columnHelper = createColumnHelper<JobPost>()
  const columns = [
    columnHelper.display({
      id: 'select',
      cell: (info) => (
        <Checkbox
          {...{
            inputProps: {
              'aria-label': `Select ${info.row.original.title} from ${info.row.original.company}`,
            },
          }}
          onChange={(e) => {
            if (e.target.checked) {
              setSelected((prev) => [...prev, info.row.original.id])
            } else {
              setSelected((prev) =>
                prev.filter((id) => id !== info.row.original.id),
              )
            }
          }}
          checked={selected.includes(info.row.original.id)}
        />
      ),
    }),
    columnHelper.accessor('title', {
      header: () => 'Title',
      cell: (job) => job.getValue(),
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor('company', {
      header: 'Company',
      cell: (job) => {
        const c = job.getValue()

        if (typeof c == 'string') {
          return c
        } else {
          return c?.name
        }
      },
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
          <>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.preventDefault()
                  router.push(`/job-post/edit/${job.row.original.id}`)
                }}
                color="info">
                <EditSharpIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.preventDefault()
                  const canRemove = confirm(
                    'Are you sure you want to remove this job post?',
                  )

                  if (canRemove) {
                    remove(job.row.original.id)
                  }
                }}
                color="error">
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </>
        )
      },
    }),
  ]
  const table = useReactTable({
    data: currentPage,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const pagination = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Pagination
        count={Math.ceil(jobposts.length / rowsPerPage)}
        shape="rounded"
        page={page}
        onChange={(_, page) => {
          setPage(page)
          window.scrollTo(0, 0)
        }}
      />
    </Stack>
  )

  return (
    <Container>
      <Header />
      <Stack
        sx={{ margin: 2 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        {selected.length > 0 && (
          <>
            <Button
              color="error"
              variant="contained"
              onClick={(e) => {
                e.preventDefault()
                const canRemove = confirm(
                  'Are you sure you want to remove all selected job posts?\nThis action cannot be undone.',
                )

                if (canRemove) {
                  bulkRemove(selected)
                  setSelected([])
                }
              }}>
              Delete All Selected
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault()
                setSelected([])
              }}>
              Unselect All
            </Button>
          </>
        )}
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault()
            router.push('/job-post/add')
          }}>
          Insert New Job Post
        </Button>
      </Stack>

      {pagination}
      <Table color="white" sx={{ marginY: 2 }}>
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
        {/* <TableFooter>
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
        </TableFooter> */}
      </Table>
      {pagination}
    </Container>
  )
}

export default JobPostHome
