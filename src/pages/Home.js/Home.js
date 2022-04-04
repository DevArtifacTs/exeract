import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import ActivityType from "../../components/ActivityType/ActivityType";
import ActivityList from "../../components/ActivityList/ActivityList";

// mockup data
import activityListData from "../../components/MockupData/activityListData";

function Home(props){


    return(
        <>
            <Navbar/>
            <ActivityType/>
            <ActivityList activityList={activityListData} />
        </>
    )
}

export default Home ;