import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Register from "./Pages/registerPage";
import Login from "./Pages/loginPage";
import ResetPassword from "./Pages/resetPasswordPage";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/homePage";

//pages

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="itemsSale" element={<ItemsSale />} />
//       <Route path="profile" element={<Profile />} />
//     </Route>
//   )
// );
function App() {
  return (
    <>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      <HomePage />
    </>

    // <>
    //   <RouterProvider router={router} />
    // </>
  );
}

export default App;
