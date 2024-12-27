import "./Navbar.css"
import logo from "../../assets/flairminds-logo.png"

const Navbar = ({location}) =>{
    const origin="http://localhost:5173"
    const navLinks=[
      {
      name:"Home",
      activePath:"/",
    },
      {
      name:"Contact us",
      activePath:"/contact-us",
    },
  ]
const path=location?.href
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="logo" className='nav-logo' />
            </div>
        <ul className='nav_list'>
          {navLinks?.map((link,index)=>{
              return(<li key={index} className={`${(path===origin+link.activePath)&&'active'}`} > <a href={`${link?.activePath}`}>{link.name}</a> </li>)
          })}
            </ul>
    </div>
  )
}

export default Navbar