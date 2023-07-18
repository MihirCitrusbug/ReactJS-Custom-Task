import React, { useEffect, useContext } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';
import CustomElements from './CustomElements';
import Gender from './Gender';
import Hobbies from './Hobbies';
import Options from './Options';


const ViewData = () => {
    const navigate = useNavigate()
    const technologies = ["python", "php", "html", "css", "javascript"]
    const hobbies = ["cricket", "reading", "traveling", "movies"]
    const gender = ["male", "female", "other"]
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
                        <CustomElements
                            id="firstName" type="text" text="First name" disabled="true"
                            value={resultArr[0].firstName} onChange='' ErrorState=''
                        />

                        <CustomElements
                            id="lastName" type="text" text="Last name" disabled="true"
                            value={resultArr[0].lastName} onChange='' ErrorState=''
                        />

                        <CustomElements
                            id="email" type="email" text="Email address" disabled="true"
                            value={resultArr[0].email} onChange='' ErrorState=''
                        />

                        <CustomElements
                            id="phoneNo" type="number" text="Phone no." disabled="true"
                            value={resultArr[0].phoneNo} onChange='' ErrorState=''
                        />

                        <label className="form-label">Gender</label>
                        <div className="input-group mb-3">
                            {gender.map(text => {
                                return resultArr[0].gender === text ? <Gender text={text} disabled="true" checked="true" onChange='' /> : <Gender text={text} disabled="true" checked='' onChange='' />
                            })}
                        </div>

                        <label className="form-label">Hobby</label>
                        <div className="input-group mb-3">
                            {hobbies.map(hobby => {
                                return resultArr[0].hobby === hobby ? <Hobbies text={hobby} disabled={true} checked123={true} onClick='' /> : <Hobbies text={hobby} disabled={true} checked123={false} onClick='' />
                            })}
                        </div>

                        <div className="row  mb-3 ">
                            <div className="col-lg-4 col-md-6 d-flex  align-items-center">
                                <div className="inline w-100 field">
                                    <label>Technology</label>
                                    <select name="technology" id="technology" disabled multiple
                                        className="label ui selection fluid dropdown">
                                        {technologies.map(technology => {
                                            return <Options value={technology} selected='' />
                                        })}
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

export default React.memo(ViewData)