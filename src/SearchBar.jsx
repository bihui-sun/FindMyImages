import { useGlobalContext } from './context'

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.elements.search.value) get the value of the input field directly
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    // console.log(searchValue)
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">Unsplash image search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="dog"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar
