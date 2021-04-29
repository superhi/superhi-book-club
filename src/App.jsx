import React, {useState, useEffect} from 'react'

const App = () => {
  const [books, setBooks] = useState([])
  console.log('this message is going to load every time the component renders.')

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('when is this message going to load?')
  //   }, 2000)

  //   const fetchData = async () => {
  //     const response = await fetch('https://book-club-json.herokuapp.com/books')
  //     console.log(`here's what our fetch request returns:`, response)

  //     if (response.ok) {
  //       const books = await response.json()
  //       console.log(`our json-ified response:`, books)

  //       setBooks(books)
  //     }
  //   }

  //   // const fetchData = () => {
  //   //   fetch('https://book-club-json.herokuapp.com/books')
  //   //     .then((response) => {
  //   //       console.log(`here's what our fetch request returns:`, response)
  //   //       return response.json()
  //   //     })
  //   //     .then((books) => {
  //   //       console.log(`our json-ified response:`, books)
  //   //       return setBooks(books)
  //   //     })
  //   // }

  //   fetchData()
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log('when is this message going to load?')
    }, 2000)

    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        console.log(`here's what our fetch request returns:`, response)
        const books = await response.json()
        console.log(`our json-ified response:`, books)
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  console.log(`the books array in our state:`, books)

  return <>hello world</>
}

export default App
