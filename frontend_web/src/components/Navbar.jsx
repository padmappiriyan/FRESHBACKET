import { useState } from "react"
import { NavLink } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";
import profile from "../assets/profile.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {user,setUser,setshowUserLogin,navigate}= useAppContext();
  
    const logout =async ()=>{
        setUser(null);
        navigate('/');
    }
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to={'/'} onClick={()=>setOpen(false)}>
               <h1 className="text-2xl text-blue-600 font-extrabold" >FreshBasket</h1>
            </NavLink>

            
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/All-products'>AllProducts</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <IoSearch className="w-4 h-4 text-gray-500"/>
                </div>

                <div className="relative cursor-pointer " 
                onClick={()=> navigate('/card')}>
                    <FiShoppingCart className="w-4 h-4 "/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
                </div>
                { !user ? (
                <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
                )
                :
                (
                    <div className="relative group">
                        <img src={profile} alt="person_icon" className="w-7 h-7"/>
                        <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5  w-30 rounded-md text-sm z-40">
                            <li className="cursor-pointer p-1.5 pl-3 hover:bg-blue-600 "
                            onClick={()=>navigate('/My-Orders')}>MyOrders</li>
                            <li className="cursor-pointer p-1.5 pl-3 hover:bg-blue-600 "
                            onClick={logout}>Logout</li>
                        </ul>

                    </div>

                )
                }
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
               
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            { open && (
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to='/'  className="block" onClick={()=>setOpen(false)}>Home</NavLink>
                <NavLink to='/All-products' onClick={()=>setOpen(false)} className="block">AllProducts</NavLink>
                {user &&
                <NavLink to='MyOrders' className="block" onClick={()=>setOpen(false)}>My-Orders</NavLink>
                }
                <NavLink to='Contact' className="block" onClick={()=>setOpen(false)}>Contact</NavLink>

                {user ? (
                  <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
                  onClick={logout}>
                    Logout
                </button>
                ): (
                     <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
                     onClick={()=>{
                        setOpen(false);
                        setshowUserLogin(true);
                     }}>
                    Login
                </button>
                )}
               
            </div>
            )}

        </nav>
  )
}

export default Navbar