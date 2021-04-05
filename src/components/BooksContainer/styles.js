import styled from 'styled-components'

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;

  @media (max-width: 800px) {
    padding: 114px 20px 60px 20px;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  padding-top: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 60px;
  }
`
