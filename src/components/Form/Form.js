import React, {useState} from "react";
import './Form.css'
import Button from "../Button/Button";
import * as moment from 'moment';


function Form(props){

    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, SetLocation] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState();

    const  isNameOk = name.length >= 3
    function handleName(e){
        setName(e.target.value);
        console.log(name);
    }

    const  isDescriptionOk = description.length >= 10
    function handleDescription(e){
        setDescription(e.target.value)
        console.log(description)
    }

    const  isLocationOk = location.length > 2
    function handleLocation(e){
        SetLocation(e.target.value);
        console.log(location)
    }

    const  isDateOk = Boolean(date);
    function dateReformat(dateString){
        const dateArray = dateString.split('-');
        return dateArray[2]+ '/' + dateArray[1]+ '/' + dateArray[0];
    }

    const  isDurationOk = duration > 0
    function handleDuration(e){
        setDuration(e.target.value);
        console.log(duration);
    }

    function handleDate(e){
        const dateString = dateReformat(e.target.value)
        const isDate = moment(dateString, 'DD/MM/YYYY').isValid();
        if(isDate){
            setDate(dateString);
            console.log(date);
            return;
        } else {
            console.log('invalid date format')
            return;
        }   
    }

    const isInputFormOk =   
        Boolean(isNameOk) && 
        Boolean(isDescriptionOk) && 
        Boolean(isDateOk) && 
        Boolean(isLocationOk) && 
        Boolean(isDurationOk)

    function handleSubmit(e){
        e.preventDefault()
        console.log('name', e.target.name.value)
        console.log('description', e.target.description.value)
        console.log('date', e.target.date.value)
        console.log('location', e.target.location.value)
        console.log('duration', e.target.duration.value)
        console.log('isInputFormOk', isInputFormOk);
        if(isInputFormOk){
            // http post
            // fetch({ url : 'localhost:4001'})
            // return
        } else {
            // alert('valid value')
        }

    }

    return (
        <>
            <section className="form-container">
                <h3>Input Form</h3>
                <form className="activity-form" onSubmit={handleSubmit}>

                    <div className="name-label label-and-input">
                        <label htmlFor="name" style={{color : isNameOk? 'black' : 'red' }}>Name:</label>
                        <input id="name" type="text" 
                            placeholder="Activity Name" 
                            name='name'
                            onChange={handleName} 
                            value={name}
                        />
                    </div>

                    <div className="description-label label-and-input">
                        <label htmlFor="description" style={{color : isDescriptionOk? 'black' : 'red' }}>Description:</label>
                        <textarea id="description" name="description" rows="4" cols="50"
                            placeholder="describe what are you doing " 
                            onChange={handleDescription}
                            value={description}
                        ></textarea>
                    </div>

                    <div className="date-label label-and-input">
                        <label htmlFor="date" style={{color: isDateOk? 'black' : 'red'}}>Date:</label>
                        <input id="date" type="date" 
                            name='date'
                            onChange={handleDate}
                            date={date}
                        />
                    </div>

                    <div className="date-label label-and-input">
                        <label htmlFor="location" style={{color : isLocationOk? 'black' : 'red'}}>Location:</label>
                        <input id="location" type="text" 
                            name='location'
                            placeholder="location" 
                            onChange={handleLocation}
                            value={location}
                        />
                    </div>

                    <div className="name-label label-and-input">
                        <label htmlFor="duration" style={{color : isDurationOk? 'black' : 'red'}}>Time duration:</label>
                        <input id="duration" type="number" 
                            name='duration'
                            placeholder="set time duration" 
                            onChange={handleDuration}
                            value={duration}
                        />
                        <label htmlFor="duration">minute</label>
                    </div>

                    <Button type='submit' btnName='Submit' />
                </form>
            </section>
        </>
    )
}
export default Form ;