import React from 'react'
import './ListContent.css'
import OneTask from './oneTask';
import PlaceHolderTask from './PlaceHolderTask';

function ListContentDisplay(props) {

    const stuffArray = props.arr;
    const stuff = stuffArray.map((todo, index) => <OneTask stuff={todo} key={index}
        delete={props.delete}></OneTask>);

    let beginning = false;

    if(props.arr.length===0){
        beginning = true;
    }

    if(beginning){
        return (
            <table className="my-table">
                <thead>
                    <tr>
                        <th className="tree-column-1 "><p className='Task'>Task</p></th>
                        <th className='tree-column-2'></th>
                        <th className='tree-column-3'></th>
                    </tr>
                </thead>
                <tbody>
                    <PlaceHolderTask stuff={"Add a task"}></PlaceHolderTask>
                </tbody>
            </table>
        )
    }

    else{
        return (
            <table className="my-table">
                <thead>
                    <tr>
                        <th className="tree-column-1 "><p className='Task'>Task</p></th>
                        <th className='tree-column-2'></th>
                        <th className='tree-column-3'></th>
                    </tr>
                </thead>
                <tbody>
                    {stuff}
                </tbody>
            </table>
        )
    }

}

export default ListContentDisplay