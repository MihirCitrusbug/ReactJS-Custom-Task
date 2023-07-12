import { useContext, useEffect } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';

const DataList = () => {
    const navigate = useNavigate()
    const [users,] = useContext(userContext)
    const back = () => {
        navigate("/")
    }
    return (
        <>
            <h1>User List</h1>
            <table className="table table-striped mb-3">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Technology</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody id="tableBodyData">
                    {users && users.map(user => {
                        return (
                            <tr draggable="true" ondragstart="start()" ondragover="dragover()">
                                <td><input className="form-check-input" type="checkbox" name="checkbox" /></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.hobby}</td>
                                <td>{user.technology}</td>
                                <td><button type="button" onClick={() => navigate(`/view-data?email=${user.email}`)} className="btn btn-primary">View</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type="button" id="editBtn" disabled className="btn btn-warning">Edit</button>
            <button type="button" id="deleteBtn" disabled className="btn btn-danger">Delete</button>
            <button className="btn btn-primary" onClick={back}>Back</button>
        </>
    )
}

export default DataList
