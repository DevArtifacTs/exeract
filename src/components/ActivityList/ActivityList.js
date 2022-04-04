import React from "react";
import './ActivityList.css'
import Button from "../Button/Button";

function ActivityList(props){
    
    return (
        <table>
                <tbody>
                    <tr className='table-header' >
                        <th className='column-header'> ID </th>
                        <th className='column-header'> Activity type </th> 
                        <th className='column-header'> Description </th>
                        <th className='column-header'> Date </th>
                        <th className='column-header'> Time </th>
                    </tr>
                </tbody>
                { props.activityList.map((activity, index)=> {
                    return (
                        <tbody key={index} >
                            <tr>
                                <td>{index + 1}</td>
                                <td>{activity.name}</td>
                                <td>{activity.description}</td>
                                <td>{activity.date}</td>
                                <td>{activity.duration}</td>
                                <Button btnName='edit' />
                            </tr>
                        </tbody>
                    )
                })
                } 
            </table>
    )
}
export default ActivityList ;