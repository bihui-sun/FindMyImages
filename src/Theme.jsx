import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useGlobalContext } from './context.jsx'

const Themes = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext()
  return (
    <section className="themes">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  )
}

export default Themes
