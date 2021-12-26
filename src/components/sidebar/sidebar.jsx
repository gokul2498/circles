import React  from 'react';
import './sidebar.scss';
import SidebarOption from './SidebarOption';






const menuContainer = [
    {
        imageSource:"dashboard",
        url:"/",
        text:"Dashboard",
       
    },
    {
        imageSource:"borrow",
        url:"borrow",
        text:"Borrow",
      
    },
    {
        imageSource:"lending",
        url:"lending",
        text:"Lending",
     
    },
    {
        imageSource:"saving",
        url:"saving",
        text:"Saving",
      
    },
    {
        imageSource:"circle",
        url:"circle",
        text:"Circles",
     
    }

];

 const SideBar = () => (

  <div className="sidebar">
    <div className="logo">
      {/* <i className="material-icons">connect_without_contact</i> */}
      <img src="images/circles/circle.png" alt="" />
      <h2 className='circles-finance'>Circles.finance</h2>
    </div>
    <div className="menu-container">
        {
            menuContainer.map(sidebar=> <SidebarOption key={sidebar.text} imageSource={sidebar.imageSource}  url={sidebar.url} text= {sidebar.text} />)
        }
 
    </div>
  </div>
);
export default SideBar;
