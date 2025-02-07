import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url =
  'https://api.unsplash.com/search/photos?client_id=api_key&query=office'

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)
      // console.log(result)

      return result.data
    },
  })
  console.log(response)

  if (response.isLoading) return <h1>Loading...</h1>
  if (response.isError) return <h1>Error</h1>
  return (
    <div>
      <h1>Gallery</h1>
      {response.data.results.map((image) => {
        return (
          <img
            src={image.urls.small}
            alt={image.alt_description}
            key={image.id}
          />
        )
      })}
    </div>
  )
}
export default Gallery
