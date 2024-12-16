import "./Ecobin_hero.css"
import image from "../assets/DoHero.png"
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineRecycling } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";



const Ecobin_hero =()=> {
    return(

        <div className="Wrapper">
            <div className="Wrapper_1">
                <h1>Dispose Waste <br />Properly and Promote <br /> Recycling; For A <br />Greener  Future!</h1>

                <h2>Ready to be an eco-champion? Let's team up to ensure proper <br /> waste disposal and promote recycling within our communities. <br /> Small actions can make a big impact on our planet! 
                    <div id="icons">
                        <MdOutlineRecycling />
                        <FaEarthAmericas />

                    </div>
                </h2>

                <button id="Ecobutton">Join Now! <div id="iconbutton"><AiOutlineGlobal /> </div></button>

            </div>


            <div className="Image">
                <img src={image}/>
            </div>

        </div>
    )
}




export default Ecobin_hero
