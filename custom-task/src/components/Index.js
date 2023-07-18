import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../App'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Index = () => {
    const [users,] = useContext(userContext)
    const navigate = useNavigate()

    const dataList = () => {
        navigate("/data-list");
    }

    const checkFirstName = (firstName) => {
        console.log("first name =", firstName);
        // if (firstName === "") {
        //     setFirstNameError({ ...firstNameError, value: '', message: 'First name is required.', flag: true })
        //     return false;
        // } else {
        //     if (firstName.length > 20) {
        //         setFirstNameError({ ...firstNameError, value: '', message: 'Max 20 character.', flag: true })
        //         return false;
        //     }
        //     setFirstNameError({ ...firstNameError, value: firstName, message: '', flag: false })
        //     return firstName
        // }
    }

    // const checkLastName = (lastName) => {
    //     if (lastName === "") {
    //         setLastNameError({ ...lastNameError, value: '', message: 'Last name is required.', flag: true })
    //         return false;
    //     } else {
    //         if (lastName.length > 20) {
    //             setLastNameError({ ...lastNameError, value: '', message: 'Max 20 character.', flag: true })
    //             return false;
    //         }
    //         setLastNameError({ ...lastNameError, value: lastName, message: '', flag: false })
    //     }
    // }

    // const checkEmail = (email) => {
    //     const email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    //     if (email === "" || email === null) {
    //         setEmailError({ ...emailError, value: '', message: 'Email is required.', flag: true });
    //         return false
    //     }
    //     else if (email.match(email_regex)) {
    //         setEmailError({ ...emailError, value: email, message: '', flag: false });
    //         return email
    //     }
    //     else {
    //         setEmailError({ ...emailError, value: '', message: 'Invalid E-mail address!', flag: true });
    //         return false
    //     }
    // }

    // const checkPhoneNo = (phoneNo) => {
    //     const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //     if (phoneNo === "" || phoneNo === null) {
    //         setPhoneNoError({ ...phoneNoError, value: '', message: 'Phone No is required.', flag: true })
    //         return false
    //     }
    //     else if (phoneNo.match(phoneNo_regex)) {
    //         setPhoneNoError({ ...phoneNoError, value: phoneNo, message: '', flag: false })
    //         return phoneNo
    //     }
    //     else {
    //         setPhoneNoError({ ...phoneNoError, value: '', message: 'Invalid Phone No!', flag: true })
    //         return false
    //     }
    // }

    // const checkGender = (gender) => {
    //     setGenderError({ ...genderError, value: gender, message: '', flag: false })
    // }

    // const checkHobby = () => {
    //     const hobbyListElem = document.querySelectorAll('input[name="hobby"]:checked')
    //     if (hobbyListElem.length > 0) {
    //         let hobby = ''
    //         hobbyListElem.forEach(element => {
    //             hobby += `${element.value},`
    //         });
    //         setHobbyError({ ...genderError, value: hobby.replace(/.$/, ''), message: '', flag: false })
    //         return hobby.replace(/.$/, '')

    //     } else {
    //         setHobbyError({ ...genderError, value: '', message: 'Please select any one Hobby!', flag: true })
    //         return false
    //     }
    // }

    // const checkTechnology = () => {
    //     const technologyOpt = document.getElementById('technology').options
    //     if (technologyOpt.selectedIndex !== -1) {
    //         let technology = ''
    //         for (let i = 0; i < technologyOpt.length; i++) {
    //             if (technologyOpt[i].selected) {
    //                 technology += `${technologyOpt[i].value},`
    //             }
    //         }
    //         setTechnologyError({ ...genderError, value: technology.replace(/.$/, ''), message: '', flag: false })
    //         return technology.replace(/.$/, '')
    //     }
    //     else {
    //         setTechnologyError({ ...genderError, value: '', message: 'Please select any one Technology!', flag: true })
    //         return false
    //     }
    // }

    // const submitForm = () => {
    //     // console.log("user =", firstNameError)
    //     // console.log(firstNameError.flag ? setFirstNameError({ ...firstNameError, value: '', message: 'First name is required.', flag: true }) : '')
    //     if (firstNameError.flag && lastNameError.flag && emailError.flag && phoneNoError.flag && genderError.flag && hobbyError.flag && technologyError.flag) {
    //         dispatch({
    //             type: 'addUser',
    //             user: {
    //                 firstName: firstNameError.value,
    //                 lastName: lastNameError.value,
    //                 email: emailError.value,
    //                 phoneNo: phoneNoError.value,
    //                 gender: genderError.value,
    //                 hobby: hobbyError.value,
    //                 technology: technologyError.value
    //             }
    //         })
    //         navigate("/data-list");
    //     }
    //     else {
    //         // setFirstNameError({ ...firstNameError, value: '', message: 'First name is required.', flag: true })
    //         console.log(firstNameError.flag ? setFirstNameError({ ...firstNameError, value: '', message: 'First name is required.', flag: true }) : '')
    //         console.log(lastNameError.flag ? setLastNameError({ ...lastNameError, value: '', message: 'Last name is required.', flag: true }) : '')
    //         console.log(emailError.flag ? setEmailError({ ...emailError, value: '', message: 'Email is required.', flag: true }) : '')
    //         setPhoneNoError({ ...phoneNoError, value: '', message: 'Phone No is required.', flag: true })
    //         setGenderError({ ...genderError, value: '', message: 'Please select your Gender!', flag: true })
    //         setHobbyError({ ...genderError, value: '', message: 'Please select any one Hobby!', flag: true })
    //         setTechnologyError({ ...genderError, value: '', message: 'Please select any one Technology!', flag: true })
    //     }
    // }

    const submitForm2 = () => {
        console.log("user =", users)
    }

    return (
        <>
            <h2 className="mb-3">Register Form</h2>
            <form method="post" action="" noValidate>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" onChange={(e) => checkFirstName(e.target.value.trim())} className="form-control" id="firstName" />
                    {/* {firstNameError.flag && (<div className="invalid-feedback2">{firstNameError.message}</div>)} */}

                </div>

                {/* <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" onChange={(e) => checkLastName(e.target.value.trim())} className="form-control" id="lastName" />
                    {lastNameError.flag && (<div className="invalid-feedback2">{lastNameError.message}</div>)}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => checkEmail(e.target.value.trim())} className="form-control" id="email" />
                    {emailError.flag && (<div className="invalid-feedback2">{emailError.message}</div>)}
                </div>

                <div className="mb-3">
                    <label htmlFor="phoneNo" className="form-label">Phone no.</label><br />
                    <input type="number" onChange={(e) => checkPhoneNo(e.target.value.trim())} id="phoneNo" className="form-control" />
                    {phoneNoError.flag && (<div className="invalid-feedback2">{phoneNoError.message}</div>)}
                </div>

                <label className="form-label">Gender</label>
                <div className="input-group mb-3">
                    <div className="form-check ml-3">
                        <input className="form-check-input" onChange={(e) => checkGender(e.target.value)} type="radio" name="gender" id="male"
                            value="male" />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check ml-3">
                        <input className="form-check-input" onChange={(e) => checkGender(e.target.value)} type="radio" name="gender" id="female"
                            value="female" />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check ml-3">
                        <input className="form-check-input" onChange={(e) => checkGender(e.target.value)} type="radio" name="gender" id="other"
                            value="other" />
                        <label className="form-check-label" htmlFor="other">Other</label>
                    </div>
                    {genderError.flag && (<div className="invalid-feedback2">{genderError.message}</div>)}
                </div>

                <label className="form-label">Hobby</label>
                <div className="input-group mb-3">
                    <div className="form-check ml-3">
                        <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                            value="cricket" id="cricket" />
                        <label className="form-check-label" htmlFor="cricket">Cricket</label>
                    </div>
                    <div className="form-check ml-3">
                        <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                            value="reading" id="reading" />
                        <label className="form-check-label" htmlFor="reading">Reading</label>
                    </div>
                    <div className="form-check ml-3">
                        <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                            value="traveling" id="traveling" />
                        <label className="form-check-label" htmlFor="traveling">Traveling</label>
                    </div>
                    <div className="form-check ml-3">
                        <input className="form-check-input" onClick={checkHobby} type="checkbox" name="hobby"
                            value="movies" id="movies" />
                        <label className="form-check-label" htmlFor="movies">Movies</label>
                    </div>
                    {hobbyError.flag && (<div className="invalid-feedback2">{hobbyError.message}</div>)}
                </div>

                <div className="row  mb-3 ">
                    <div className="col-lg-4 col-md-6 d-flex  align-items-center">
                        <div className="inline w-100 field">
                            <label>Technology</label>
                            <select name="technology" id="technology" onChange={checkTechnology} multiple
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
                {technologyError.flag && (<div className="invalid-feedback2">{technologyError.message}</div>)} */}

                <button type="button" onClick={submitForm2} className="btn btn-primary">Submit</button>
                <button onClick={dataList} className="btn btn-success">View List</button>
            </form>
        </>
    )
}

export default React.memo(Index)
