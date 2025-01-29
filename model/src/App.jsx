import {createBrowserRouter,RouterProvider} from   "react-router-dom"
import Loginpage from "./pages/Loginpage"
import Signuppage from "./pages/Signuppage"
import Homepage from "./pages/Homepage"
import Profilepage from "./pages/Profilepage"
import Eventpage from "./pages/Eventpage"
import Updatepage from "./pages/Updatepage"
import Forgot from "./pages/Forgot"
import About from "./pages/About"
import { useSelector } from "react-redux"
import Deletepage from "./pages/Deletepage"
import List from "./pages/List"


function App(){
  const localstoragevlue=useSelector((state)=>state.login.loginData)
  console.log('local valur',localstoragevlue);

const router=createBrowserRouter([
  {
    path:"/",
    element:<Loginpage/>
  },
  {
    path:"/signup",
    element:<Signuppage/>
  },{
    path:"/home",
    element:localstoragevlue?.jwttoken?<Homepage/>:<Loginpage/>
  },{
    path:"/pro",
    element:localstoragevlue?.jwttoken?<Profilepage/>:<Loginpage/>
  },{
    path:"/event",
    element:localstoragevlue?.jwttoken?<Eventpage></Eventpage>:<Loginpage/>
  },{
    path:"/updt",
    element:localstoragevlue?.jwttoken?<Updatepage></Updatepage>:<Loginpage/>
  },{
    path:"/forgot",
    element:<Forgot/>
  },{
    path:"/about",
    element:localstoragevlue?.jwttoken?<About/>:<Loginpage/>
  },{
    path:"/delete",
    element:localstoragevlue?.jwttoken? <Deletepage/>:<Loginpage/>
  },{
    path:"/list",
    element:localstoragevlue?.jwttoken?<List/>:<Loginpage/>
  }
])
return(
  <RouterProvider router={router}></RouterProvider>
)
}
export default App
