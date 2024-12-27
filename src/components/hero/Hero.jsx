import "./Hero.css"
import curlyWhiteArrow from "../../assets/white-curly-arrow.png"
import arrow from "../../assets/arrow-small-right.png"

const Hero = () => {
  return (
    <div className='hero'>
        <h1 className='hero_heading'>Your Digital Transformation Partner</h1>
        <img src={curlyWhiteArrow} alt="arrow" className='hero_arrow'/>
        <br />
        <div className="hero_button_container">
        <button className='get_in_touch'>Get in Touch</button>
        <img src={arrow} alt="arrow" />
        </div>
    </div>
  )
}

export default Hero