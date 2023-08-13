import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './Details.css';

function Details() {
    const list = useSelector((state)=> state.todoReducer.list);
    const date= new Date();

    return (
        <>
            <h1 className="Title text-center">Weekly Updates Are Available 🕊</h1>
  
            <div className="main-div bg-light list-group-item my-4">
                {list.map((elem) => (
                    <div className="details col-8 mx-auto" key={elem.id}>
                        <table className="my-4">
                            <tbody>
                                <tr className="taskname">
                                    <td className="tableTitle text-center" colSpan={7}>
                                        {elem.task + " : "}
                                        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                </tr>
                                <tr>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="status">
                                            <option value="volvo">None</option>
                                            <option value="saab" className="completed">Completed</option>
                                            <option value="opel" className="notcompleted">Not Completed</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Details;
