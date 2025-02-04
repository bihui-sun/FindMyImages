import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useGlobalContext } from './context.jsx'

const Themes = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext()
  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  )
}

export default Themes
