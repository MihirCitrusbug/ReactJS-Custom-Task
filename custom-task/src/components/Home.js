import React, { useContext, useState, useEffect, useCallback } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';
import Options from './Options';
import Hobbies from './Hobbies';
import Gender from './Gender';
import CustomElements from './CustomElements';


const Home = () => {
    const technologies = ["python", "php", "html", "css", "javascript"]
    const hobbies = ["cricket", "reading", "traveling", "movies"]
    const gender = ["male", "female", "other"]
    const [firstNameError, setFirstNameError] = useState({ value: '', message: '', flag: true });
    const [lastNameError, setLastNameError] = useState({ value: '', message: '', flag: true });
    const [emailError, setEmailError] = useState({ value: '', message: '', flag: true });
    const [phoneNoError, setPhoneNoError] = useState({ value: '', message: '', flag: true });
    const [genderError, setGenderError] = useState({ value: '', message: '', flag: true });
    const [hobbyError, setHobbyError] = useState({ value: '', message: '', flag: true });
    const [technologyError, setTechnologyError] = useState({ value: '', message: '', flag: true });
    const [, dispatch] = useContext(userContext)


    const navigate = useNavigate()

    useEffect(() => {
        const phoneInputField = document.querySelector("#phoneNo");
        window.intlTelInput(phoneInputField, {
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    }, [])

    const checkFirstName = useCallback((firstName) => {
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
    }, [firstNameError])

    const checkLastName = useCallback((lastName) => {
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
    }, [lastNameError])

    const checkEmail = useCallback((email) => {
        const email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
        if (email === "" || email === null) {
            setEmailError({ ...emailError, value: '', message: 'Email is required.', flag: true });
            return false
        }
        else if (email.match(email_regex)) {
            setEmailError({ ...emailError, value: email, message: '', flag: false });
            return email
        }
        else {
            setEmailError({ ...emailError, value: '', message: 'Invalid E-mail address!', flag: true });
            return false
        }
    }, [emailError])

    const checkPhoneNo = useCallback((phoneNo) => {
        const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneNo === "" || phoneNo === null) {
            setPhoneNoError({ ...phoneNoError, value: '', message: 'Phone No is required.', flag: true })
            return false
        }
        else if (phoneNo.match(phoneNo_regex)) {
            setPhoneNoError({ ...phoneNoError, value: phoneNo, message: '', flag: false })
            return phoneNo
        }
        else {
            setPhoneNoError({ ...phoneNoError, value: '', message: 'Invalid Phone No!', flag: true })
            return false
        }
    }, [phoneNoError])

    const checkGender = useCallback((gender) => {
        setGenderError({ ...genderError, value: gender, message: '', flag: false })
    }, [genderError])

    const checkHobby = useCallback(() => {
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
    }, [genderError])

    const checkTechnology = useCallback(() => {
        const technologyOpt = document.getElementById('technology').options
        if (technologyOpt.selectedIndex !== -1) {
            let technology = ''
            for (let i = 0; i < technologyOpt.length; i++) {
                if (technologyOpt[i].selected) {
                    technology += `${technologyOpt[i].value},`
                }
            }
            setTechnologyError({ ...technologyError, value: technology.replace(/.$/, ''), message: '', flag: false })
            return technology.replace(/.$/, '')
        }
        else {
            setTechnologyError({ ...technologyError, value: '', message: 'Please select any one Technology!', flag: true })
            return false
        }
    }, [technologyError])

    const submitForm = () => {
        if (!firstNameError.flag && !lastNameError.flag && !emailError.flag && !phoneNoError.flag && !genderError.flag && !hobbyError.flag && !technologyError.flag) {
            dispatch({
                type: 'addUser',
                user: {
                    firstName: firstNameError.value,
                    lastName: lastNameError.value,
                    email: emailError.value,
                    phoneNo: phoneNoError.value,
                    gender: genderError.value,
                    hobby: hobbyError.value,
                    technology: technologyError.value
                }
            })
            navigate("/data-list");
        }
        else {
            !firstNameError.flag || setFirstNameError({ ...firstNameError, value: '', message: firstNameError.message || 'First name is required.', flag: true })
            !lastNameError.flag || setLastNameError({ ...lastNameError, value: '', message: lastNameError.message || 'Last name is required.', flag: true })
            !emailError.flag || setEmailError({ ...emailError, value: '', message: emailError.message || 'Email is required.', flag: true })
            !phoneNoError.flag || setPhoneNoError({ ...phoneNoError, value: '', message: phoneNoError.message || 'Phone No is required.', flag: true })
            !genderError.flag || setGenderError({ ...genderError, value: '', message: 'Please select your Gender!', flag: true })
            !hobbyError.flag || setHobbyError({ ...hobbyError, value: '', message: hobbyError.message || 'Please select any one Hobby!', flag: true })
            !technologyError.flag || setTechnologyError({ ...technologyError, value: '', message: technologyError.message || 'Please select any one Technology!', flag: true })
        }
    }

    const dataList = () => {
        navigate("/data-list");
    }

    return (
        <>
            <h2 className="mb-3">Register Form</h2>
            <form method="post" action="" noValidate>
                <CustomElements
                    id="firstName" type="text" text="First name"
                    onChange={(e) => checkFirstName(e.target.value.trim())}
                    ErrorState={firstNameError}
                />

                <CustomElements
                    id="lastName" type="text" text="Last name"
                    onChange={(e) => checkLastName(e.target.value.trim())}
                    ErrorState={lastNameError}
                />

                <CustomElements
                    id="email" type="email" text="Email address"
                    onChange={(e) => checkEmail(e.target.value.trim())}
                    ErrorState={emailError}
                />

                <CustomElements
                    id="phoneNo" type="number" text="Phone no."
                    onChange={(e) => checkPhoneNo(e.target.value.trim())}
                    ErrorState={phoneNoError}
                />

                <label className="form-label">Gender</label>
                <div className="input-group mb-3">
                    {gender.map(text => {
                        return <Gender text={text} onChange={(e) => checkGender(e.target.value)} />
                    })}
                    {genderError.flag && (<div className="invalid-feedback2">{genderError.message}</div>)}
                </div>

                <label className="form-label">Hobby</label>
                <div className="input-group mb-3">
                    {hobbies.map(hobby => {
                        return <Hobbies text={hobby} onClick={checkHobby} />
                    })}
                    {hobbyError.flag && (<div className="invalid-feedback2">{hobbyError.message}</div>)}
                </div>

                <div className="row  mb-3 ">
                    <div className="col-lg-4 col-md-6 d-flex  align-items-center">
                        <div className="inline w-100 field">
                            <label>Technology</label>
                            <select name="technology" id="technology" onChange={checkTechnology} multiple
                                className="label ui selection fluid dropdown">
                                {technologies.map(technology => {
                                    return <Options value={technology} selected='' />
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                {technologyError.flag && (<div className="invalid-feedback2">{technologyError.message}</div>)}

                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                <button onClick={dataList} className="btn btn-success">View List</button>
            </form>
        </>
    )
}

export default React.memo(Home)
