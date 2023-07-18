import React, { useContext, useState } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const DataList = () => {
    const navigate = useNavigate()
    const [users, dispatch] = useContext(userContext)
    const [editButtonFlag, setEditButtonFlag] = useState(true)
    const [deleteButtonFlag, setDeleteButtonFlag] = useState(true)
    const back = () => {
        navigate("/")
    }

    const enabledDisabledButtons = () => {
        const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
        if (selectedElm.length === 0) {
            setEditButtonFlag(true)
            setDeleteButtonFlag(true)
        }
        else if (selectedElm.length === 1) {
            setEditButtonFlag(false)
            setDeleteButtonFlag(false)
        }
        else {
            setDeleteButtonFlag(true)
        }
    }

    const editUser = () => {
        const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
        let emails = ''
        selectedElm.forEach((element, index) => {
            emails += `${element.value},`
        });
        navigate(`/edit-user?emails=${emails.replace(/.$/, '')}`)
        // window.location = `/slider.html?emails=${emails.replace(/.$/, '')}`
    }

    const deleteUser = () => {
        Swal.fire('Delete User?', 'Are you sure want to delete?', 'question')
            .then(() => {
                const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
                const deletedUser = selectedElm[0].getAttribute('email')
                dispatch({
                    type: 'deleteUser',
                    user: {
                        email: deletedUser,
                    }
                })
            });
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
                            <tr draggable="true">
                                <td><input className="form-check-input" onChange={enabledDisabledButtons} value={user.email} type="checkbox" name="checkbox" /></td>
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
            <button type="button" id="editBtn" disabled={editButtonFlag} onClick={editUser} className="btn btn-warning b-">Edit</button>
            <button type="button" id="deleteBtn" disabled={deleteButtonFlag} onClick={deleteUser} className="btn btn-danger">Delete</button>
            <button className="btn btn-primary" onClick={back}>Back</button>
        </>
    )
}

export default React.memo(DataList)
