import styled from '@emotion/styled'

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding: 15vh 0;
  background: white;
`

export function paginate<T>(
  array: T[],
  page_size: number,
  page_number: number,
): T[] {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}
