import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { login, logout } from './featurs/authSlice'
import Footer from './components/Footer/Footer'
import conf from './config/conf'
import Header from './components/Header/Header'
function App() {

//  console.log("Appwrite URL:", conf.appwriteUrl);
//  console.log("Appwrite Project ID:", conf.appwriteProjectId);


  // start loding fun
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.getCorrentUser()
      .then((userData) => {

        if (userData) {

          dispatch(login({ userData }))

        } else {

          dispatch(logout())

        }

      }
    ).finally(() => setLoding(false))

  }, [])

  return !loding ? (
    <div className='bg-black text-white p-10 '>
      <div>
        <Header />
        <main>
          todo: {/* <Outlet /> */}
          {/* <p>On October 27, 2024, Vice President Kamala Harris spoke at a big rally in Philadelphia, Pennsylvania. She touched on key issues facing the nation and rallied supporters as the election nears. It’s a reminder that these rallies give us insight into each candidate's focus and priorities. Did you catch her speech? What did you think?</p> */}
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
