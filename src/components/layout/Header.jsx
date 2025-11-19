import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { Menu, X, LogOut, LogIn } from "lucide-react";

const Header = () => {
     const { user, logout } = useAuthStore();
     const [menuOpen, setMenuOpen] = useState(false);
     const navigate = useNavigate();

     const navLinks = user
          ? [
               { to: "/", label: "Home" },
               { to: "/chat", label: "Chat" },
          ]
          : [{ to: "/home/login", label: "Login", icon: LogIn }];

     const photoUrl = user?.profilePhoto?.data
          ? `data:${user.profilePhoto.contentType};base64,${user.profilePhoto.data}`
          : 'https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg';


     return (
          <header className="flex items-center justify-between w-full p-3 bg-amber-200">
               <a href="/getstarted" aria-label="Jerry AI" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../../public/jerrylogo.svg" class="w-8 h-8" alt="" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jerry</span>
               </a>
               <nav className="hidden md:flex gap-4">
                    {navLinks.map((link) => {
                         const Icon = link.icon;
                         return (
                              <NavLink key={link.to} to={link.to} className="flex items-center gap-1">
                                   {Icon && <Icon size={16} />}
                                   {link.label}
                              </NavLink>
                         );
                    })}

                    {user && (

                         <div>
                              <button
                                   className={`flex items-center space-x-0.5 px-2 py-1 rounded-md text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-1`}
                                   aria-label="Open profile menu"
                                   aria-haspopup="true"
                              >
                                   <Link to='/myprofile'>
                                        <img
                                             src={photoUrl}
                                             alt="Profile"
                                             className="w-6 h-6 rounded-full object-cover border border-cyan-500"
                                        />
                                   </Link>
                              </button>
                              <button onClick={logout} className="flex items-center gap-1">
                                   <LogOut size={16} /> Logout
                              </button>
                         </div>
                    )}
               </nav>

               <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
               >
                    {menuOpen ? <X /> : <Menu />}
               </button>

               {menuOpen && (
                    <nav className="absolute top-14 left-0 w-full bg-white shadow p-4 flex flex-col gap-3 md:hidden">
                         {navLinks.map((link) => {
                              const Icon = link.icon;
                              return (
                                   <NavLink
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center gap-1"
                                   >
                                        {Icon && <Icon size={16} />}
                                        {link.label}
                                   </NavLink>
                              );
                         })}

                         {user && (
                              <div>
                                   <Link
                                        to="/myprofile"
                                        onClick={() => setMenuOpen(false)}
                                        className="w-full flex items-center gap-1 cursor-pointer"
                                   >
                                        <img
                                             src={photoUrl}
                                             alt="Profile"
                                             className="w-6 h-6 rounded-full object-cover border border-cyan-500"
                                        />
                                        Profile
                                   </Link>


                                   <button
                                        onClick={() => {
                                             logout();
                                             setMenuOpen(false);
                                        }}
                                        className="flex items-center gap-1"
                                   >
                                        <LogOut size={16} /> Logout
                                   </button>
                              </div>
                         )}
                    </nav>
               )}
          </header>

     );
};

export default Header;
