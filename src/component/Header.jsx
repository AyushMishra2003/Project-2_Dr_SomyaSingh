import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useLocation, NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg";
import { FiMenu, FiX , FiMinus } from 'react-icons/fi';

import { FiPlus } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();
  // const [activeDropdown, setActiveDropdown] = useState(null);
  // const [activeSubDropDown, setActiveSubDropDown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(); // Added reference for dropdown

  // const [activeDropdown, setActiveDropdown] = useState(false);
  // const [activeSubDropDown, setActiveSubDropDown] = useState('');


  const [activeSubDropDown, setActiveSubDropDown] = useState(null);
// const [activeDropdown, setActiveDropdown] = useState(false); // Active main treatment dropdown for desktop
// const [activeSubDropdown, setActiveSubDropdown] = useState(null); // Active sub-treatment dropdown

const [activeDropdown, setActiveDropdown] = useState(null);
const [activeSubDropdown, setActiveSubDropdown] = useState(null);

const [toogleTreatment,setToogleTreatment]=useState(false)
  const [sideDrop,setSideDrop]=useState(false)

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropMobiledown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close if the same dropdown is clicked again
    } else {
      setOpenDropdown(index); // Open the clicked dropdown
    }
  };

  const toggleTreatmentDropdown = (isActive) => {
    console.log("i am toogle tratment");
    
    setActiveDropdown(isActive);
  };

  const toggleTreatmentSubDropdown = (item) => {
   console.log(item);
   
    setActiveSubDropDown(activeSubDropDown === item ? null : item);
    console.log(activeSubDropDown);
    
  };



  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  //  const toggleTreatmentDropdown = () => {
  //   setActiveDropdown(!activeDropdown);
  // };

  // const toggleTreatmentSubDropdown = (type) => {
  //   setActiveSubDropDown(activeSubDropDown === type ? '' : type);
  // };

  const handleLinkClick = () => {

    console.log("handle link click 12");
    
    setActiveDropdown(null);
    setActiveSubDropDown(null);
  };


  const toggleDropdown = () => {
    console.log("handle link click 1234");
    setIsDropdownOpen(!isDropdownOpen);
  };


  const toogleSideDropDown=()=>{
     setSideDrop(true)
  }

  const handletoogleTreatment=()=>{
      setToogleTreatment(!toogleTreatment)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click is outside the menu and the dropdown
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu
        setActiveDropdown(null); // Reset active dropdown
        setActiveSubDropDown(null); // Reset active sub-dropdown
      }
    };

    // Only add the event listener if the menu is open
    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    // Clean up the event listener
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);



  const treatments = [
    {
      name: 'Gallbladder',
      subItems: [
        { name: 'Gallstones', path: '/treatment/gallbladder/gallbladderstones' },
        { name: 'Gallbladder Cancer', path: '/treatment/gallbladder/gallbladdercancer' },
        { name: 'Bile Duct Injury', path: '/treatment/gallbladder/Bileductinjury' },
      ],
    },
    {
      name: 'Hernia',
      subItems: [
        { name: 'Inguinal Hernia', path: '/treatment/hernia/Inguinalhernial' },
        { name: 'Ventral/Incisional Hernia', path: '/treatment/hernia/Ventralhernia' },
        { name: 'Umbilical Hernia', path: '/treatment/hernia/Umbilicalhernia' },
      ],
    },
    {
      name: 'Stomach Cancer',
      subItems: [
        { name: 'Polyps', path: '/treatment/stomach-cancer/polyps' },
        { name: 'Stomach Cancer', path: '/treatment/stomach-cancer/cancer' },
    
      ],
    },
    {
      name: 'Pancreas',
      subItems: [
        { name: 'Pancreatic Stones', path: '/treatment/pancreas/pancreaticestones' },
        { name: 'Pancreatic Cancer', path: '/treatment/pancreas/pancreaticcancer' },
        { name: 'Whipple Surger', path: '/treatment/pancreas/whipple' },
      ],
    },
    {
      name: 'Intestine',
      subItems: [
        { name: 'Obstruction / Strictures', path: '/treatment/intestine/obstruction' },
        { name: 'Perforation', path: '/treatment/intestine/perforation' },
        { name: 'Intestinal Cancer', path: '`/treatment/intestine/instestinecancer' },
      ],
    },
    {
      name: 'Colon Rectum',
      subItems: [
        { name: 'Polyps', path: '/treatment/colon-rectum/rectumpolyps' },
        { name: 'Inflammatory Bowel Diseases', path: '/treatment/colon-rectum/inflammatoryboweldiseases`' },
        { name: 'Colon/Rectal Cancer', path: 'treatment/colon-rectum/rectumcancer' },
      ],
    },
    {
      name: 'Liver',
      subItems: [
        { name: 'Cysts / Hydatid Cysts', path: '/treatment/liver/livercysts' },
        { name: 'Liver Cancer', path: '/treatment/liver/livercancer' },
        { name: 'Liver Mass', path: '/treatment/liver/livermass' },
      ],
    },
    {
      name: 'Whipple Surgery',
      subItems: [
        { name: 'Whipple Surgery', path: '/treatment/whipple/whipple-surgery' },
   
      ],
    },
    {
      name: 'Antireflux Procedure',
      subItems: [
        { name: 'Anti-Reflux Procedure', path: '/treatment/antireflux-procedure/antireflux-procedure' },
   
      ],
    },


    // Add more treatments as needed
  ];

  

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setActiveDropdown(null);
  //       setActiveSubDropDown(null);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('Menu is now:', isOpen);
  // }, [isOpen]);


  console.log(activeSubDropDown);

  console.log(activeDropdown);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto';   // Enable scroll
    }
    return () => {
      document.body.style.overflow = 'auto';   // Cleanup on component unmount
    };
  }, [isOpen]);
  
  

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-[#00072c] opacity-70 z-40" onClick={() => setIsOpen(false)}></div>}

      <header className="bg-white text-gray-900 px-4 sticky top-0 w-full font-[500] shadow-lg z-50 flex items-center justify-center">
        <div className="relative w-full flex justify-between px-10 items-center py-2">
          <Link to="/">
            <img src={logo} alt="Dr Manas logo" className='w-[15rem] lg:w-[17rem] h-auto object-cover ' />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden relative lg:flex p-8 lg:text-[1rem] text-[1.1rem] xl:text-[1.2rem] items-center px-4 lg:justify-around lg:gap-8">
            <Link to="/" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}>
              Home
              {location.pathname === '/' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link>

            <Link to="/about" className={`relative flex items-center gap-1 transition-all duration-300 hover:text-primary ${location.pathname.startsWith('/about') ? 'text-primary' : ''}`}>
              About
            </Link>

            {/* Treatment Dropdown */}
            {/* <div
      className="relative group"
      onMouseEnter={() => toggleTreatmentDropdown(true)}
      onMouseLeave={() => toggleTreatmentDropdown(false)}
    >
      <button
        className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeDropdown ? 'text-primary' : ''}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        Our Treatment <IoMdArrowDropdown className='text-[1.4rem] mt-1' />
      </button>

      {activeDropdown && (
        <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out transform-gpu">
          {['gallbladder', 'hernia', 'stomachCancer', 'pancreas', 'whippleSurgery', 'intestine', 'colonRectum', 'antirefluxProcedure', 'liver'].map((item) => (
            <div key={item} className="border-b last:border-b-0">
              <button
                onMouseEnter={() => toggleTreatmentSubDropdown(item)}
                onMouseLeave={() => toggleTreatmentSubDropdown(null)}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center justify-between rounded transition duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')} 
                <IoMdArrowDropdown className='inline-block' />
              </button>

         
              <div
                onMouseEnter={() => toggleTreatmentSubDropdown(item)}
                onMouseLeave={() => toggleTreatmentSubDropdown(null)}
                className={`${activeSubDropDown === item ? 'block' : 'hidden'} absolute left-full top-2  bg-white rounded-lg p-3 w-48 shadow-lg transition-all duration-300 ease-in-out transform-gpu`}
              >
                <div className="flex flex-col space-y-2">
              
                  {item === 'gallbladder' && (
                    <>
                      <Link to={`/treatment/gallbladder/gallbladderstones`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Gallstones</Link>
                      <Link to={`/treatment/gallbladder/gallbladdercancer`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Gallbladder Cancer</Link>
                      <Link to={`/treatment/gallbladder/Bile-duct-injury`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Bile Duct Injury</Link>
                    </>
                  )}
                  {item === 'hernia' && (
                    <>
                      <Link to={`/treatment/hernia/Inguinalhernial`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Inguinal Hernia</Link>
                      <Link to={`/treatment/hernia/Ventral-hernia`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Ventral/Incisional Hernia</Link>
                      <Link to={`/treatment/hernia/Umbilical-hernia`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Umbilical Hernia</Link>
                    </>
                  )}
                  {item === 'stomachCancer' && (
                    <>
                      <Link to={`/treatment/stomach-cancer/polyps`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Polyps</Link>
                      <Link to={`/treatment/stomach-cancer/cancer`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Stomach Cancer</Link>
                    </>
                  )}
                  {item === 'pancreas' && (
                    <>
                      <Link to={`/treatment/pancreas/stones`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Pancreatic Stones</Link>
                      <Link to={`/treatment/pancreas/cancer`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Pancreatic Cancer</Link>
                      <Link to={`/treatment/pancreas/whipple`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Whipple Surgery</Link>
                    </>
                  )}
                  {item === 'intestine' && (
                    <>
                      <Link to={`/treatment/intestine/obstruction`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Obstruction / Strictures</Link>
                      <Link to={`/treatment/intestine/perforation`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Perforation</Link>
                      <Link to={`/treatment/intestine/cancer`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Intestinal Cancer</Link>
                    </>
                  )}
                  {item === 'colonRectum' && (
                    <>
                      <Link to={`/treatment/colon-rectum/polyps`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Polyps</Link>
                      <Link to={`/treatment/colon-rectum/inflammatory-bowel-diseases`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Inflammatory Bowel Diseases</Link>
                      <Link to={`/treatment/colon-rectum/cancer`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Colon/Rectal Cancer</Link>
                    </>
                  )}
                  {item === 'liver' && (
                    <>
                      <Link to={`/treatment/liver/cysts`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Cysts / Hydatid Cysts</Link>
                      <Link to={`/treatment/liver/cancer`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Liver Cancer</Link>
                      <Link to={`/treatment/liver/mass`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Liver Mass</Link>
                    </>
                  )}
                  {item === 'whippleSurgery' && (
                    <Link to={`/treatment/whipple/whipple-surgery`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Whipple Surgery</Link>
                  )}
                  {item === 'antirefluxProcedure' && (
                    <Link to={`/treatment/antireflux-procedure`} className="block px-4 py-2 hover:bg-gray-200 rounded transition duration-200 border-b border-gray-300" onClick={() => setActiveDropdown(false)}>Anti-Reflux Procedure</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
           </div> */}

<div
  className="relative"
  onMouseEnter={() => setActiveDropdown('treatments')}
  onMouseLeave={() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }}
>
  <button className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeDropdown ? 'text-primary' : ''}`}
    style={{ whiteSpace: 'nowrap' }}>
    Our Treatments 
    {activeDropdown === null ? <IoMdArrowDropdown /> : <MdArrowDropUp />}
  </button>

  {activeDropdown === 'treatments' && (
    <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out transform-gpu">
      {treatments.map((treatment) => (
        <div
          key={treatment.name}
          className="border-b relative"
          onMouseEnter={() => setActiveSubDropdown(treatment.name)}
          onMouseLeave={() => setActiveSubDropdown(null)}
        >
          <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100">
            {treatment.name}
            <IoMdArrowDropright />
          </button>

          {activeSubDropdown === treatment.name && (
            <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
              {treatment.subItems.map((subItem, index) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className={`block px-4 py-2 hover:bg-gray-200 ${index !== treatment.subItems.length - 1 ? 'border-b border-gray-300' : ''}`} // Add border to all except last
                  onClick={() => {
                    setActiveDropdown(null); // Close main dropdown on click
                    setActiveSubDropdown(null); // Close sub-dropdown on click
                  }}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>


            <Link to="/cases" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/cases' ? 'text-primary' : ''}`}>
              Cases
              {location.pathname === '/cases' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link>

            <Link to="/blog" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/blog' ? 'text-primary' : ''}`}>
              Blog
              {location.pathname === '/blog' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link>

            <Link to="/testonomial" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/testimonial' ? 'text-primary' : ''}`}>
              Testimonial
              {location.pathname === '/testimonial' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link>

            <Link
              to="/contact"
              className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              Contact Us
              {location.pathname === '/contact' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link>
          </nav>

  
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

    
        {sideDrop && (
          <div
            className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity duration-300"
            onClick={toogleSideDropDown}
          />
        )}

      
<div
  className={`${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out`}
  style={{ overflowY: 'auto' }} // Enable sidebar scrolling
>
  <div className="flex justify-between items-center p-5 border-b">
    <span className="text-lg font-semibold">Menu</span>
    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
      <FiX className="w-8 h-8" />
    </button>
  </div>
  <div className="p-6 space-y-6 text-lg font-medium text-gray-700">
    <NavLink to="/" className="block hover:text-teal-600" onClick={toggleMenu}>
      Home
    </NavLink>
    <NavLink to="/about" className="block hover:text-teal-600" onClick={toggleMenu}>
      About Us
    </NavLink>
    <div>
      <button
        className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeDropdown ? 'text-primary' : ''}`}
        style={{ whiteSpace: 'nowrap' }}
        onClick={() => handletoogleTreatment()}
      >
        Our Treatments <IoMdArrowDropdown />
      </button>
    </div>

    {toogleTreatment && (
      <div className="space-y-4">
        {treatments.map((treatment, index) => (
          <div key={treatment.name} className="border-b pb-2">
            <button
              onClick={() => toggleDropMobiledown(index)}
              className="w-full text-left block hover:text-teal-600 flex items-center justify-between"
            >
              <span>{treatment.name}</span>
              {openDropdown === index ? <FiMinus className="ml-2" /> : <FiPlus className="ml-2" />}
            </button>

            {/* Submenu */}
            {openDropdown === index && (
              <div className="ml-4 space-y-2 mt-2">
                {treatment.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.path}
                    to={subItem.path}
                    className="block hover:text-teal-600"
                    onClick={toggleMenu}
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}

    <NavLink to="/cases" className="block hover:text-teal-600" onClick={toggleMenu}>
      Cases
    </NavLink>
    <NavLink to="/blog" className="block hover:text-teal-600" onClick={toggleMenu}>
      Blogs
    </NavLink>
    <NavLink to="/contact" className="block hover:text-teal-600" onClick={toggleMenu}>
      Contact Us
    </NavLink>
  </div>
</div>



      </header>
    </>
  );
};

export default Header;
