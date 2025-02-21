import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'

// console.log(import.meta.env.VITE_API_KEY)

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  console.log(searchTerm)
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}+${searchTerm}`)
      return data
    },
  })
  // console.log(response)

  if (response.isLoading)
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  if (response.isError)
    return (
      <section>
        <h1>There was an error...</h1>
      </section>
    )

  const images = response.data.results
  if (images.length < 1)
    return (
      <section>
        <h1>No images found</h1>
      </section>
    )
  return (
    <section className="image-container">
      {images.map((image) => {
        const url = image?.urls?.small
        return (
          <img
            src={url}
            alt={image.alt_description}
            key={image.id}
            className="img"
          />
        )
      })}
    </section>
  )
}
export default Gallery
