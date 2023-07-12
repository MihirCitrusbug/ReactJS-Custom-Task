import { useEffect, useContext } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';

const ViewData = () => {
    const navigate = useNavigate()
    const [users,] = useContext(userContext)
    let queryString = window.location.search;
    queryString = queryString.replace('?', '');
    let params = queryString.split('=');
    let email = params[1];
    let resultArr = users.filter(user => user.email === email)

    useEffect(() => {
        // * Selected Technology data
        const technologyOpt = document.getElementById('technology').options
        for (let i = 0; i < technologyOpt.length; i++) {
            if (resultArr[0].technology.split(',').includes(technologyOpt[i].value)) {
                technologyOpt[i].selected = true
            }
        }

        // * Selected Hobby data 
        const hobbyListElem = document.querySelectorAll('input[name="hobby"]')
        hobbyListElem.forEach(element => {
            if (resultArr[0].hobby.split(',').includes(element.value)) {
                element.checked = true
            }
        });

        // * Select Gender data
        const genderListElem = document.querySelectorAll('input[name="gender"]')
        genderListElem.forEach(element => {
            if (element.value == resultArr[0].gender) {
                element.checked = true
            }
        });
    }, [])
    const dataList = () => {
        navigate("/data-list")
    }

    return (
        <>
            {resultArr && (
                <>
                    <h2 className="mb-2">User Information</h2>
                    <form method="post" action="" noValidate>
                        <div className="mb-3">
                            <label for="firstName" className="form-label">First name</label>
                            <input type="text" disabled value={resultArr[0].firstName} className="form-control" id="firstName" />

                        </div>

                        <div className="mb-3">
                            <label for="lastName" className="form-label">Last name</label>
                            <input type="text" disabled value={resultArr[0].lastName} className="form-control" id="lastName" />
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" disabled value={resultArr[0].email} className="form-control" id="email" />
                        </div>

                        <div className="mb-3">
                            <label for="phoneNo" className="form-label">Phone no.</label>
                            <input type="text" disabled value={resultArr[0].phoneNo} id="phoneNo" className="form-control" />
                        </div>

                        <label className="form-label">Gender</label>
                        <div className="input-group mb-3">
                            <div className="form-check m-0">
                                <input className="form-check-input" disabled type="radio" name="gender" id="male" value="male" />
                                <label className="form-check-label" for="male">Male</label>
                            </div>
                            <div className="form-check ms-2">
                                <input className="form-check-input" disabled type="radio" name="gender" id="female" value="female" />
                                <label className="form-check-label" for="female">Female</label>
                            </div>
                            <div className="form-check ms-2">
                                <input className="form-check-input" disabled type="radio" name="gender" id="other" value="other" />
                                <label className="form-check-label" for="other">Other</label>
                            </div>
                        </div>

                        <label className="form-label">Hobby</label>
                        <div className="input-group mb-3">
                            <div className="form-check">
                                <input className="form-check-input" disabled value="cricket" type="checkbox" name="hobby" />
                                <label className="form-check-label" for="cricket">Cricket</label>
                            </div>
                            <div className="form-check ms-2">
                                <input className="form-check-input" disabled value="reading" type="checkbox" name="hobby" />
                                <label className="form-check-label" for="reading">Reading</label>
                            </div>
                            <div className="form-check ms-2">
                                <input className="form-check-input" disabled value="traveling" type="checkbox" name="hobby" />
                                <label className="form-check-label" for="traveling">Traveling</label>
                            </div>
                            <div className="form-check ms-2">
                                <input className="form-check-input" disabled value="movies" type="checkbox" name="hobby" />
                                <label className="form-check-label" for="movies">Movies</label>
                            </div>
                        </div>

                        <div className="row  mb-3 ">
                            <div className="col-lg-4 col-md-6 d-flex  align-items-center">
                                <div className="inline w-100 field">
                                    <label>Technology</label>
                                    <select name="technology" id="technology" disabled multiple
                                        className="label ui selection fluid dropdown">
                                        <option value="python">Python</option>
                                        <option value="php">PHP</option>
                                        <option value="html">HTML</option>
                                        <option value="css">CSS</option>
                                        <option value="javascript">JavaScript</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button onClick={dataList} className="btn btn-primary">Back</button>
                    </form>
                </>
            )}
        </>
    )
}

export default ViewData