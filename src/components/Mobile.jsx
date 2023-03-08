import React from "react";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Venkatesh from "./Venkatesh";
import "../styles/mobile.css"
function MobileMenu() {
    return (
        <div className="menu-nar">
            <heading className="name">
                <a href="/"><Venkatesh /></a>
            </heading>
            <div className="menu-option">
                <DensitySmallIcon />
            </div>
        </div>
    )
}

export default MobileMenu;