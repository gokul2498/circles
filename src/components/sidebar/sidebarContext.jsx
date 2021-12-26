 import React , {useState,createContext} from "react";
 import SidebarOption from './SidebarOption';

 export const SidebarContext  = createContext();


export default function SidebarProvider() {
    let [dashboard, setDashboard] = useState(true);
    let [borrow , setBorrow] = useState(true);
    let [lending , setLending] = useState(true);
    let [saving , setSaving] = useState(true);
    let [circle , setCircle] = useState(true);
    return (
        <div>
             <SidebarContext.Provider value={"checkme"}>
                <SidebarOption />
            </SidebarContext.Provider>
        </div>
    )
}

