import Stack from '@mui/material/Stack'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'

function App() {
       
  return (
    <>
      <Navbar/>
      <Stack direction={'row'} justifyContent={'space-between'} spacing={1}><Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
      
    </>
  )
}

export default App
