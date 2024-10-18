import { authService } from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { login, logout } from './featurs/authSlice'
function App() {

  // start loding fun
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.gerCorrentUser()
      .then((userData) => {

        if (userData) {

          dispatch(login({ userData }))

        } else {

          dispatch(logout())

        }

      })
      .finally(() => setLoding(false))

  }, [])

  return !loding ? (
    <div className='bg-black text-white p-10 '>
      <div>
        <Header />
        <main>
          todo: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null);



  {/* <h1 className='bg-black text-white p-10'>Hello react           id: 66f2883600060c27cbd0   url: https://cloud.appwrite.io/v1
        databaseid: 66f289e3000772a065eb databasecollection: 66f28a50000bb81dc731  bucketimages: 66f28cd3001d97535f3a
      </h1> */}

}
export default App
