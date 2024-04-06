import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './UI/AppLayout'
import Home from './UI/Home'
import AboutUs from './UI/AboutUs'
import EmpManager from './Features/EmpManager/EmpManager'
import Error from './UI/Error'
import ViewList from './Features/EmpManager/ViewList'
import EmpCreate from './Features/EmpManager/EmpCreate'
import EmpUpdate from './Features/EmpManager/EmpUpdate'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {userType} from "./type";







function App() {
  // const [count, setCount] = useState(0)

  const [flag, setFlag]: any = useState(0);

  var tempCity: any = [];
  var temp: any = [];
  const [city, setCity]:any = useState(tempCity);

  const [finalFormData, setfinalFormData]: any = useState([]);

  const [errorData, setError]: any = useState({});


  // type userType = {
  //   name: string,
  //   email: string,
  //   date: Date,
  //   age: number,
  //   gender: string,
  //   status: string,
  //   state: string,
  //   city: string,
  //   hobbies: []
  // }
  // console.log(userForm);  
  const [formData, setData] = useState<userType>({
    name: "",
    email: "",
    date: new Date,
    age: 0,
    gender: "",
    status: "",
    state: "",
    city: "",
    hobbies: []
  });



  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/AboutUs',
          element: <AboutUs />
        },
        {
          path: '/EmpManager',
          element: <EmpManager />,
          children: [
            {
              path: '/EmpManager',
              element:
                <ViewList
                  setData={setData}
                  temp={temp}
                  setfinalFormData={setfinalFormData}
                  finalFormData={finalFormData}
                  setFlag={setFlag}
                  useNavigate={useNavigate}
                />,
                errorElement: <Error />,
            },
            {
              path: '/EmpManager/EmpCreate',
              element:
                <EmpCreate
                  setData={setData}
                  formData={formData}
                  city={city}
                  setCity={setCity}
                  tempCity={tempCity}
                  setError={setError}
                  errorData={errorData}
                  setfinalFormData={setfinalFormData}
                  finalFormData={finalFormData}
                />
            },
            {
              path: '/EmpManager/EmpUpdate/:id',
              element:
                <EmpUpdate
                  setData={setData}
                  formData={formData}
                  city={city}
                  setCity={setCity}
                  tempCity={tempCity}
                  setError={setError}
                  errorData={errorData}
                  setfinalFormData={setfinalFormData}
                  finalFormData={finalFormData}
                  setFlag={setFlag}

                />
            }
          ]
        }
      ]

    }
  ])



  return (
    <RouterProvider router={router} />
  )
}
export default App


{/*

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/EmpManager' element={<EmpManager />}>
            <Route
              index
              element={
                <ViewList
                  setData={setData}
                  temp={temp}
                  setfinalFormData={setfinalFormData}
                  finalFormData={finalFormData}
                  setFlag={setFlag}
                  useNavigate={useNavigate}
                />
              }
            />
            <Route
              path='/EmpManager/EmpCreate'
              element={
                <EmpCreate
                  setData={setData}
                  formData={formData}
                  city={city}
                  setCity={setCity}
                  tempCity={tempCity}
                  setError={setError}
                  errorData={errorData}
                  setfinalFormData={setfinalFormData}
                  finalFormData={finalFormData}
                />
              }
            />
            <Route
              path='/EmpManager/EmpUpdate/:id'
              element={
                <EmpUpdate
                  setData={setData}
                  formData={formData}
                  city={city}
                  setCity={setCity}
                  tempCity={tempCity}
                  setError={setError}
                  errorData={errorData}
                  setfinalFormData={setfinalFormData}
                  finalFormData={finalFormData}
                  setFlag={setFlag}
                 
                />
              }
            />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

*/}