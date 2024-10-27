import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useLocation, NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo_somya.jpeg";
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
  const [activeAbout,setActiveAbout]=useState(null)
// const [activeDropdown, setActiveDropdown] = useState(false); // Active main treatment dropdown for desktop
// const [activeSubDropdown, setActiveSubDropdown] = useState(null); // Active sub-treatment dropdown

const [activeDropdown, setActiveDropdown] = useState(null);
const [activeSubDropdown, setActiveSubDropdown] = useState(null);
const navigate=useNavigate()

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
      name: 'High RISK Pregnancy',
      hasSubItems: false,
      path:'/treatment/highriskpregnancy'
    },
    {
      name: 'Fetal Medicine',
      hasSubItems: false,
          path:'/treatment/fetalmedicine'
    },
    {
      name: 'Sustainable Menstruation',
      hasSubItems: false,
          path:'/treatment/sustainablemenstruation'
    },
    {
      name: 'Minimally invasive Gynaecology',
      hasSubItems: false,
      path: '/treatment/minimallyinvasivegynecology', // No corresponding treatment path, keeping it as placeholder
    },
    {
      name: 'Normal & Cesarean Delivery',
      hasSubItems: false,
            path:'/treatment/normalcesareandelivery'
    },
    {
      name: 'Infertility Treatment',
      hasSubItems: false,
          path:'/treatment/infertilitytreatment'
    },
    {
      name: 'Preventive Oncology',
      hasSubItems: false,
         path:'/treatment/preventiveoncology'
    },
    {
      name: 'M.T.P / D & C',
      hasSubItems: false,
          path:'/treatment/mtpdnc'
    },
    {
      name: 'Contraception Consultation',
      hasSubItems: false,
           path:'/treatment/contraceptionconsultation'
    },
    {
      name:'Hysterectomy',
      hasSubItems: false,
           path:'/treatment/hysterectomy'
    },
    {
      name:'Cancer Screening & Vaccination',
      hasSubItems: false,
         path:'/treatment/cancerscreeningvaccination'
    },
    {
      // name:'PreMarital and PreConception Counseling',
      name:'PreMarital and PreConception ',
      hasSubItems: false,
        path:'/treatment/premarital'
    },
   
  ];


  const aboutItems = [
    {
      name: "About Astitva Clinic",
      path: "/about/clinic",
      hasSubItems: false,
     
    },
    {
      name: "About Dr. Somya Singh",
      path: "/about/doctor",
      hasSubItems: false,
     
    },
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

            <div
  className="relative"
  onMouseEnter={() => setActiveAbout('about')}
  onMouseLeave={() => {
    setTimeout(() => {
      if (!activeDropdown) setActiveAbout(null);
    }, 200); // Delay hiding the dropdown
  }}
>
  <button
    className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${activeAbout === 'about' ? 'text-primary' : ''}`}
  >
    About <IoMdArrowDropdown />
  </button>

  {/* Dropdown Menu */}
  {activeAbout === 'about' && (
    <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out transform-gpu">
    {aboutItems.map((treatment) => (
      <div
        key={treatment.name}
        className="border-b relative"
        onMouseEnter={() => setActiveSubDropdown(treatment.name)}
        onMouseLeave={() => setActiveSubDropdown(null)}
      >
        <button
          className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
          onClick={() => {
            if (treatment.hasSubItems) {
              setActiveSubDropdown(treatment.name); // Show sub-items if available
            } else {
              // Navigate to the treatment page directly if no sub-items
              window.location.href = treatment.path; // Or use history.push if using react-router
            }
          }}
        >
          {treatment.name}
          {treatment.hasSubItems && <IoMdArrowDropright />} {/* Only show icon if there are sub-items */}
        </button>

        {activeSubDropdown === treatment.name && treatment.hasSubItems && (
          <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
            {treatment.subItems.map((subItem, index) => (
              <Link
                key={subItem.name}
                to={subItem.path}
                className={`block px-4 py-2 hover:bg-gray-200 ${index !== treatment.subItems.length - 1 ? 'border-b border-gray-300' : ''}`}
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







           <div
  className="relative "
  onMouseEnter={() => setActiveDropdown('treatments')}
  onMouseLeave={() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }}
>
  <button
    className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${
      activeDropdown ? 'text-primary' : ''
    }`}
    style={{ whiteSpace: 'nowrap' }}
  >
    Our Treatments 
    {activeDropdown === null ? <IoMdArrowDropdown /> : <MdArrowDropUp />}
  </button>

  {activeDropdown === 'treatments' && (
  <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out">
  {treatments.map((treatment, index) => (
    <div
      key={treatment.name}
      className="relative border-b last:border-0"
      onMouseEnter={() => setActiveSubDropdown(treatment.name)}
      onMouseLeave={() => setActiveSubDropdown(null)}
    >
      <button
        className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100 focus:outline-none"
        onClick={() => {
          if (treatment.hasSubItems) {
            setActiveSubDropdown(treatment.name); // Show sub-items if available
          } else {
            // Navigate to the treatment page directly if no sub-items
            window.location.href = treatment.path; // Or use history.push if using react-router
          }
        }}
      >
        {treatment.name}
        {treatment.hasSubItems && <IoMdArrowDropright />} {/* Only show icon if there are sub-items */}
      </button>

      {/* Sub-dropdown (if applicable) */}
      {activeSubDropdown === treatment.name && treatment.hasSubItems && (
        <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
          {treatment.subItems.map((subItem, subIndex) => (
            <Link
              key={subItem.name}
              to={subItem.path}
              className={`block px-4 py-2 hover:bg-gray-200 ${subIndex !== treatment.subItems.length - 1 ? 'border-b border-gray-300' : ''}`}
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

            {/* <Link to="/blog" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/blog' ? 'text-primary' : ''}`}>
              Blog
              {location.pathname === '/blog' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link> */}

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
          onClick={() => {
            // If treatment has no subItems, navigate directly to its path
            if (!treatment.hasSubItems) {
              navigate(treatment.path); // Replace with your navigation method
            } else {
              toggleDropMobiledown(index); // Toggle dropdown if it has subItems
            }
          }}
          className="w-full text-left  hover:text-teal-600 flex items-center justify-between"
        >
          <span>{treatment.name}</span>
          {/* Show plus/minus sign only for items with subItems */}
          {treatment.hasSubItems && (
            <>
              {openDropdown === index ? <FiMinus className="ml-2" /> : <FiPlus className="ml-2" />}
            </>
          )}
        </button>

        {/* Submenu */}
        {openDropdown === index && treatment.hasSubItems && (
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
