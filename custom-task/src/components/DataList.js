import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { userContext } from '../App'
import TableRows from './TableRows';

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
        const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
        const deletedUser = selectedElm[0].value
        Swal.fire({
            title: 'Do you want to Delete ' + deletedUser,
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {

            if (result.isConfirmed) {
                dispatch({
                    type: 'deleteUser',
                    user: {
                        email: deletedUser,
                    }
                })
                Swal.fire('User Deleted', deletedUser + ' is deleted successfully!', 'success')
                    .then(() => {
                        navigate("/data-list")
                    })
            }
        })
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
                    <TableRows users={users} onChange={enabledDisabledButtons} />
                </tbody>
            </table>
            <button type="button" id="editBtn" disabled={editButtonFlag} onClick={editUser} className="btn btn-warning ms-2">Edit</button>
            <button type="button" id="deleteBtn" disabled={deleteButtonFlag} onClick={deleteUser} className="btn btn-danger ms-2">Delete</button>
            <button className="btn btn-primary ms-2" onClick={back}>Back</button>
        </>
    )
}

export default React.memo(DataList)
