import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App'
import CustomElements from './CustomElements';
import Gender from './Gender';
import Hobbies from './Hobbies';
import SelectElement from './SelectElement';


const ViewData = () => {
    const navigate = useNavigate()
    const [users,] = useContext(userContext)
    let queryString = window.location.search;
    queryString = queryString.replace('?', '');
    let params = queryString.split('=');
    let email = params[1];
    let resultArr = users.filter(user => user.email === email)[0]

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
                            value={resultArr.firstName} onChange='' ErrorState=''
                        />

                        <CustomElements
                            id="lastName" type="text" text="Last name" disabled="true"
                            value={resultArr.lastName} onChange='' ErrorState=''
                        />

                        <CustomElements
                            id="email" type="email" text="Email address" disabled="true"
                            value={resultArr.email} onChange='' ErrorState=''
                        />

                        <CustomElements
                            id="phoneNo" type="number" text="Phone no." disabled="true"
                            value={resultArr.phoneNo} onChange='' ErrorState=''
                        />

                        <label className="form-label">Gender</label>
                        <Gender
                            gender={resultArr.gender}
                            disabled={true}
                            onChange=''
                            ErrorState=''
                        />

                        <label className="form-label">Hobby</label>
                        <Hobbies
                            id={"hobby"}
                            hobbyList={resultArr.hobby.split(',')}
                            onClick=''
                            ErrorState=''
                            disabled={true}
                        />

                        <SelectElement
                            id={"technology"}
                            technologyList={resultArr.technology.split(',')}
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