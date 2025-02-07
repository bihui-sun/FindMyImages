const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.elements.search.value) get the value of the input field directly
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    console.log(searchValue)
  }
  return (
    <div>
      <h2>Unsplash image search</h2>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="dog" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
