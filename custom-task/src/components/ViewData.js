import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App'
import CustomElements from './CustomElements';
import Gender from './Gender';
import Hobbies from './Hobbies';
import SelectElement from './SelectElement';


const ViewData = () => {
    const navigate = useNavigate()
    const gender = ["male", "female", "other"]
    const [users,] = useContext(userContext)
    let queryString = window.location.search;
    queryString = queryString.replace('?', '');
    let params = queryString.split('=');
    let email = params[1];
    let resultArr = users.filter(user => user.email === email)


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
                        <Hobbies
                            id={"hobby"}
                            hobbyList={resultArr[0].hobby.split(',')}
                            onClick=''
                            ErrorState=''
                            disabled={true}
                        />

                        <SelectElement
                            id={"technology"}
                            technologyList={resultArr[0].technology.split(',')}
                            onChange=''
                            ErrorState=''
                            disabled={true}
                        />

                        <button onClick={dataList} className="btn btn-primary">Back</button>
                    </form>
                </>
            )}
        </>
    )
}

export default React.memo(ViewData)