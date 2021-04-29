import React, {useState, useEffect} from 'react'

const App = () => {
  const [books, setBooks] = useState([])
  console.log('this message is going to load every time the component renders.')

  useEffect(() => {
    setTimeout(() => {
      console.log('when is this message going to load?')
    }, Math.random() * 1000)

    const fetchData = async () => {
      console.log('then after the component has rendered, this effect hook is going to run.')
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      console.log('here is the original response from the API: ', response)
      const books = await response.json()
      console.log('and the jsonified books array', books)
      setBooks(books)
    }

    fetchData()
  }, [])

  console.log(`our state's books array:`, books)

  return <>hello world</>
}

export default App
