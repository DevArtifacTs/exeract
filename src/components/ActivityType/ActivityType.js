import React, {useEffect, useState} from "react";
import preparedActivity from "../MockupData/preparedActivity";
import './ActivityType.css'
import Form from "../Form/Form";

function ActivityType(props){

    return (
        <div className="activity-type-container">
            {
                preparedActivity.map((activity)=> {
                    return(
                        <>
                            <div className="activity-card-container">
                                <h4 className="activity-card-header">{activity.name}</h4>
                                <img className="activity-card-image" src={activity.imageSrc} alt="" />
                            </div>
                        </>
                    )
                })
            }
            <Form/>
        </div>
    )
}

export default ActivityType;