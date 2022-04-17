import { useState, useEffect } from "react";
import Link from "next/link"
import { useAuth } from '../../AuthUserProvider';

export default function Navbar() {

	const { authUser } = useAuth();
	const [activeMobileMenu, setActiveMobileMenu] = useState(false);
	
  return (
    <div>
	    <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div> 
							<a href="#" className="flex items-center py-4 px-2">
								<span className="font-semibold text-gray-500 text-lg">VideoBlog Geek</span>
								{authUser && <img className="w-1/5 px-2 rounded-full" src={authUser.photoURL}></img>}
							</a>
						</div>
					
						<div className="hidden md:flex items-center space-x-1">
							{authUser &&
								<Link href="/">
									<a className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
								</Link>}
						</div>
					</div>
					
					<div className="hidden md:flex items-center space-x-3 ">
					{!authUser && 
								<Link href="/login">
									<a  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Login</a>
								</Link>}
							
							{!authUser && 
								<Link href="/register">
									<a  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Register</a>
								</Link>}
							{authUser && 
								<Link href="/logout">
									<a  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Logout</a>
								</Link>}
					</div>
					
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button"
							onClick={() => setActiveMobileMenu(!activeMobileMenu)}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			
			<div className={!activeMobileMenu ? "hidden mobile-menu" : "mobile-menu"}>
				<ul className="">
					<li>
						<Link href="/">
							<a className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a>
						</Link>
					</li>
					{!authUser && <li>
						<Link href="/login">
							<a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Login</a>
						</Link>
					</li>}
					{!authUser && <li>
						<Link href="/register">
							<a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Register</a>
						</Link>
					</li>}
					{authUser && <li>
						<Link href="/logout">
							<a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">LogOut</a>
						</Link>
					</li>}
				</ul>
			</div>

		</nav>
    </div>
  )
}
