import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo";
import LogoutBtn from "./Logoutbtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

function Header() {

    // selet status frome store
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    // create array for loop
    const navItems = [

        {
            name: 'Home',
            slug: '/',
            active: true

        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },

    ]

    return (

        <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px'   />
  
                </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={ID}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
          </Container>
      </header>
        // <Container>

        // <ul>
        //     {navItems.map((navitems) => 
        //     navitems.active ? (
        //      <li
        //      onClick={() => navigate(navitems.slug)} 
        //      key={ID}
        //      >
        //         {/* {navitems.name} */}
        //         <button>{navitems.name}</button>
        //      </li>
        //     ) : null)}

        // </ul>

        // {authStatus && (
        //     <li>
        //         <LogoutBtn />
        //     </li>
        // )}  

        // </Container>
    )
}
export default Header;
