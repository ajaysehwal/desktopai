import './App.css'
import {Routes,Route} from "react-router-dom"
import AI from './components/AI';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <>
    <Routes>
     <Route path='/' element={<AI/>}/>
    </Routes>
    </>
  )
}

export default App
