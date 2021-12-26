import React , {useState,useContext} from 'react'
import {Link} from 'react-router-dom';
import './sidebarOption.scss';
import  {SidebarContext}  from './sidebarContext.jsx';
export default function SidebarOption(props) {
    
    const name  =  useContext(SidebarContext);
    console.log(name)

    const {imageSource, text, url } = props;
    let [clickFlag , setClickFlag] = useState(true);
    

    const handleMouseHover = (e)=>{
        console.log("Mouse over")
        if(e.querySelector("img")!=null){
           if(clickFlag)  { e.querySelector("img").src  = `/images/sidebar/${ e.id}-color.png`; console.log("state set to" , clickFlag)} 
        }
    }
    const handleMouseLeave=(e)=>{
        console.log("nouse leave")
        if(e.querySelector("img")!=null){
            if(clickFlag)  { e.querySelector("img").src = `/images/sidebar/${e.id}.png`;console.log("state set to mouse when leave the screen!!!" , clickFlag)} 
        }
    }
    const makeActiveId=(e)=>{
        setClickFlag(clickFlag = false)
        let childElements = e.target.parentElement.parentElement.parentElement.children;
        for(let elements of childElements)
        {
           if(elements.id ==  e.target.parentElement.parentElement.id){
                elements.className = "sidebarOption active";
                elements.querySelector("img").src  = `/images/sidebar/${elements.id}-color.png`;
              
            }
            else{
                elements.className= elements.className.replaceAll("active","");
                elements.querySelector("img").src = `/images/sidebar/${elements.id}.png`;
            }
        }
    }

     return (
        <div  id={imageSource}  className="sidebarOption"onMouseOver={(e)=>handleMouseHover(e.target)} onMouseLeave={(e)=>handleMouseLeave(e.target)} >
            <img src={`/images/sidebar/${imageSource}.png`} alt="image not found"/>
            <Link to={url} style={{ textDecoration: 'none' }}>
                <h3  onClick={makeActiveId} >{text}</h3>
                
            </Link> 
        </div>
    )
}
