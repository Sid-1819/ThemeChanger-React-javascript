
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lighttheme = () =>{
    setThemeMode('light');
  }

  const darktheme = () =>{
    setThemeMode('dark');
  }

  useEffect(() => {
    document.querySelector('html').remove("light","dark");
    document.querySelector('html').add(themeMode);

  }, [themeMode])
 

  return (
    <ThemeProvider value={{themeMode, lighttheme, darktheme}}>
    <h1 className='text-xl text-blue-700'>Hello</h1>
    </ThemeProvider>  )
}

export default App
