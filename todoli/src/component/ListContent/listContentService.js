import React, { useState,useEffect } from 'react';
import ListContentDisplay from "./ListContentDisplay";
import { Outlet, useNavigate } from "react-router-dom";
import './ListContent.css';


function ContentService (props){
    const [stuffInCategoryArray,setStuff] = useState(JSON.parse(window.localStorage.getItem(props.category)));
    const [userInput, setInput] = useState("");

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }

    const navigate = useNavigate();

    const handleAddTask = () =>{
        if(userInput===""){
            alert("Please do not add empty task");
        }
        
        else if(stuffInCategoryArray.indexOf(userInput)!== -1){
            alert("Task already exist");
            document.getElementById("myinput").value="";
        }

        else{
            setStuff([...stuffInCategoryArray,userInput]);
            document.getElementById("myinput").value="";
        }
    }

    useEffect(
        ()=>{setStuff(JSON.parse(window.localStorage.getItem(props.category)))} ,[props.category]
    );

    useEffect(
        ()=>{window.localStorage.setItem(props.category,JSON.stringify(stuffInCategoryArray))} ,[stuffInCategoryArray,props.category]
    );

    const handleEditParent = (...params) =>{
       let indexToChange = stuffInCategoryArray.indexOf(params[0]);
       let task = params[1];
       if(task===""){
        alert("Please do not enter empty task");
       }
       else{
        if(indexToChange!== -1){
            stuffInCategoryArray[indexToChange] = task;
           }
           setStuff([...stuffInCategoryArray]);
           //navigate - 1 is to get rid of the edit,but also update the task
           navigate(-1);
       }
    }

    const handleDeleteParent = (e) =>{
        let filterArray = stuffInCategoryArray.filter(
                function(stuff) {return stuff !== e.target.value}
        );
        setStuff([...filterArray]);
    }

        return (
            <div>
                <br></br>
                <div className="card shadow p-3 mb-5 bg-body rounded mx-auto">
                <h5 className="card-header">
                    <div className="input-group mb-3">
                    <input id="myinput" type="text" className="form-control" placeholder="Enter Task here"
                     aria-label="Task" aria-describedby="basic-addon1" maxLength="60"
                     onChange={handleInputChange}></input>
                    <span><button type="button" className="btn btn-success ms-2" onClick={handleAddTask}>Add Task</button></span>
                    </div>
                </h5>
                <div className="pad">
                    <Outlet context={handleEditParent}></Outlet>
                </div>
                    <div className="card-body">
                        <ListContentDisplay arr = {stuffInCategoryArray} 
                          delete = {handleDeleteParent} ></ListContentDisplay>
                    </div>
                </div>
            </div>
        )

}

export default ContentService;