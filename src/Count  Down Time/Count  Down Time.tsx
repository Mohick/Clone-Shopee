import React, { ClassType } from "react";


type allClass = {
    classFrame:string,
    classItems:string,
    classNumbersCountDown:string
} ;





const CountDownTime:React.FC<allClass> = (classCountDown) =>{
    console.log(classCountDown);
    
    return <div>
        <div>
            <div></div>
            <div></div>
        </div>
        <div></div>
        <div></div>
    </div>
}

export default CountDownTime