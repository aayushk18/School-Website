import React, { useState } from 'react'
import logo_image from '../../assets/img/Logo.jpg'
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <header className="bg-white  shadow-lg sticky top-0 z-50">
                <div className=" p-10   py-4">
                    <div className="flex  items-center justify-between">
                        <div className="flex  items-center gap-2 ">

                            <div className=" h-12 m-4 bg-blue-600 rounded-full flex items-center justify-center">


                                <img className='h-20' src={logo_image} alt="" srcset="" />

                                {/* <Building className="w-7 h-7 text-white" /> */}
                            </div>

                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Aayush Institute of Professional Studies</h1>
                                <p className="text-sm text-gray-600 hidden sm:block">Excellence in Education Since 2002</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <NavLink to="" className="text-blue-900 hover:text-blue-600 font-semibold transition-colors">Home</NavLink>
                            <NavLink to="Courses" className="text-blue-900 font-semibold hover:text-blue-600  transition-colors">Courses</NavLink>
                            <NavLink to="CorporateTraining" className="text-blue-900 font-semibold hover:text-blue-600  transition-colors">Corporate Training</NavLink>
                            <NavLink to="News&Updates" className="text-blue-900 font-semibold hover:text-blue-600  transition-colors">News & Updates</NavLink>
                            {/* <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Career Guidance</a> */}
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                                Apply Now
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
                            <div className="flex flex-col space-y-3">
                                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                                <a href="#academics" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
                                <a href="#admissions" className="text-gray-700 hover:text-blue-600 font-medium">Corporate Training</a>
                                <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium">News & Updates</a>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium w-fit">
                                    Apply Now
                                </button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header
