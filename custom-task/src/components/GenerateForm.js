import React, { useContext, useState } from 'react'
import { userContext } from '../App'
import Options from './Options';
import CustomElements from './CustomElements';
import Gender from './Gender';


const GenerateForm = ({ email, active }) => {

    const technologies = ["python", "php", "html", "css", "javascript"]
    const hobbies = ["cricket", "reading", "traveling", "movies"]
    const gender = ["male", "female", "other"]
    const [users,] = useContext(userContext)
    let userData = users.filter(user => user.email === email)[0]
    const hobbyList = userData.hobby.split(',')
    const technologyList = userData.technology.split(',')
    const [firstNameError, setFirstNameError] = useState({ value: userData.firstName, message: '', flag: true });
    const [lastNameError, setLastNameError] = useState({ value: userData.lastName, message: '', flag: true });
    const [phoneNoError, setPhoneNoError] = useState({ value: userData.phoneNo, message: '', flag: true });
    const [genderError, setGenderError] = useState({ value: userData.gender, message: '', flag: true });
    const [hobbyError, setHobbyError] = useState({ value: userData.hobby, message: '', flag: true });
    const [technologyError, setTechnologyError] = useState({ value: userData.technology, message: '', flag: true });

    const checkFirstName = (firstName) => {
        if (firstName === "") {
            setFirstNameError({ ...firstNameError, value: '', message: 'First name is required.', flag: true })
            return false;
        } else {
            if (firstName.length > 20) {
                setFirstNameError({ ...firstNameError, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            setFirstNameError({ ...firstNameError, value: firstName, message: '', flag: false })
            return firstName
        }
    }

    const checkLastName = (lastName) => {
        if (lastName === "") {
            setLastNameError({ ...lastNameError, value: '', message: 'Last name is required.', flag: true })
            return false;
        } else {
            if (lastName.length > 20) {
                setLastNameError({ ...lastNameError, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            setLastNameError({ ...lastNameError, value: lastName, message: '', flag: false })
        }
    }

    const checkPhoneNo = (phoneNo) => {
        const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneNo === "" || phoneNo === null) {
            setPhoneNoError({ ...phoneNoError, value: phoneNo, message: 'Phone No is required.', flag: true })
            return false
        }
        else if (phoneNo.match(phoneNo_regex)) {
            setPhoneNoError({ ...phoneNoError, value: phoneNo, message: '', flag: false })
            return phoneNo
        }
        else {
            setPhoneNoError({ ...phoneNoError, value: phoneNo, message: 'Invalid Phone No!', flag: true })
            return false
        }
    }

    const checkGender = (gender) => {
        setGenderError({ ...genderError, value: gender, message: '', flag: false })
    }

    const checkHobby = () => {
        const hobbyListElem = document.querySelectorAll('input[name="hobby"]:checked')
        if (hobbyListElem.length > 0) {
            let hobby = ''
            hobbyListElem.forEach(element => {
                hobby += `${element.value},`
            });
            setHobbyError({ ...genderError, value: hobby.replace(/.$/, ''), message: '', flag: false })
            return hobby.replace(/.$/, '')

        } else {
            setHobbyError({ ...genderError, value: '', message: 'Please select any one Hobby!', flag: true })
            return false
        }
    }

    const checkTechnology = () => {
        const technologyOpt = document.getElementById('technology').options
        if (technologyOpt.selectedIndex !== -1) {
            let technology = ''
            for (let i = 0; i < technologyOpt.length; i++) {
                if (technologyOpt[i].selected) {
                    technology += `${technologyOpt[i].value},`
                }
            }
            setTechnologyError({ ...genderError, value: technology.replace(/.$/, ''), message: '', flag: false })
            return technology.replace(/.$/, '')
        }
        else {
            setTechnologyError({ ...genderError, value: '', message: 'Please select any one Technology!', flag: true })
            return false
        }
    }

    const updateUser = () => {
        console.log("Update User")
    }


    return (
        <>
            <div className={active ? "carousel-item active" : "carousel-item"} >
                <form className="container" method="post" action="" noValidate>
                    <CustomElements
                        id="firstName" type="text" text="First name"
                        value={firstNameError.value}
                        onChange={(e) => checkFirstName(e.target.value.trim())}
                        ErrorState={firstNameError}
                    />

                    <CustomElements
                        id="lastName" type="text" text="Last name"
                        value={lastNameError.value}
                        onChange={(e) => checkLastName(e.target.value.trim())}
                        ErrorState={lastNameError}
                    />

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" readOnly defaultValue={userData.email} className="form-control" />
                    </div>

                    <CustomElements
                        id="phoneNo" type="number" text="Phone no."
                        value={phoneNoError.value}
                        onChange={(e) => checkPhoneNo(e.target.value.trim())}
                        ErrorState={phoneNoError}
                    />

                    <label className="form-label">Gender-{userData.gender}</label>

                    <div className="input-group mb-3">
                        {gender.map(text => {
                            return genderError.value === text ? <Gender text={text} checked="true" onChange={(e) => checkGender(e.target.value)} /> : <Gender text={text} checked='' onChange={(e) => checkGender(e.target.value)} />
                        })}
                        {genderError.flag && (<div className="invalid-feedback2">{genderError.message}</div>)}
                    </div>

                    <div className="row  mb-3 ">
                        <div className="col-lg-4 col-md-6 d-flex  align-items-center">
                            <div className="inline w-100 field">
                                <label>Technology-{userData.technology}</label>
                                <select className="label ui selection fluid dropdown" onChange={checkTechnology} id="technology" name="technology" multiple>
                                    {technologies.map(technology => {
                                        return <Options value={technology} selected={technologyList.includes(technology)} />
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    {technologyError.flag && (<div className="invalid-feedback2">{technologyError.message}</div>)}

                    <label className="form-label">Hobby</label>
                    <div className="input-group mb-3">
                        <div className="form-check ml-3">
                            <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                                defaultValue="cricket" checked={hobbyList.includes('cricket')} />
                            <label className="form-check-label" htmlFor="cricket">Cricket</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                                defaultValue="reading" checked={hobbyList.includes('reading')} />
                            <label className="form-check-label" htmlFor="reading">Reading</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                                defaultValue="traveling" checked={hobbyList.includes('traveling')} />
                            <label className="form-check-label" htmlFor="traveling">Traveling</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                                defaultValue="movies" checked={hobbyList.includes('movies')} />
                            <label className="form-check-label" htmlFor="movies">Movies</label>
                        </div>
                        {hobbyError.flag && (<div className="invalid-feedback2">{hobbyError.message}</div>)}
                    </div>

                    <button type="button" onClick={updateUser} className="btn btn-success">Update</button>
                </form>
            </div>
        </>
    )
}

export default React.memo(GenerateForm)
