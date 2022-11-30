import React from "react" ;

import Place from "./Place";
import UserBlock from "./UserBlock";
import LogoBlock from "./LogoBlock";

export default function Header() {

    return (
        <div className = {`flex items-center border-[2px] justify-between h-[5%]`}>
            <LogoBlock/>
            <Place />
            <UserBlock/>

        </div>
    ) ;

}