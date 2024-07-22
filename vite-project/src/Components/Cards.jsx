import React from "react";

export default function Cards(props) {
    
    return (
        <div className="grid grid-cols-2 w-3/5 mt-12 text-left">
            <div>
            <img src= {`./images/${props.img}`} className=""></img>
            </div>
            <div>
                <div className="flex space-x-3">
                <p className="">{props.location} </p>
                <a className="underline" href={props.googleMapsUrl}>View on google Maps</a>

                </div>
            
            <h2 className="font-bold text-2xl ">{props.title}</h2>
            <h4 className="font-semibold mt-1">{`${props.startDate} - ${props.endDate}`}</h4>
            <p className="">{props.description}</p>

            </div>
            
        </div>
    )
}