// * React Components
import React, { useContext, useState, useCallback } from 'react'

// * Third party Components
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

// * Custom Components
import { userContext } from '../App'
import CustomElements from './CustomElements';
import Gender from './Gender';
import Hobbies from './Hobbies';
import SelectElement from './SelectElement';


const GenerateForm = ({ email, active }) => {
    const navigate = useNavigate()
    const [users, dispatch] = useContext(userContext)

    let userData = users.filter(user => user.email === email)[0]
    const [firstNameState, setFirstNameState] = useState({ value: userData.firstName, message: '', flag: true });
    const [lastNameState, setLastNameState] = useState({ value: userData.lastName, message: '', flag: true });
    const [phoneNoState, setPhoneNoState] = useState({ value: userData.phoneNo, message: '', flag: true });
    const [genderState, setGenderState] = useState({ value: userData.gender, message: '', flag: true });
    const [hobbyState, setHobbyState] = useState({ value: userData.hobby, message: '', flag: true });
    const [technologyState, setTechnologyState] = useState({ value: userData.technology, message: '', flag: true });


    const checkFirstName = useCallback((firstName) => {
        if (firstName === "") {
            setFirstNameState({ ...firstNameState, value: '', message: 'First name is required.', flag: true })
            return false;
        } else {
            if (firstName.length > 20) {
                setFirstNameState({ ...firstNameState, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            setFirstNameState({ ...firstNameState, value: firstName, message: '', flag: false })
            return firstName
        }
    }, [firstNameState])

    const checkLastName = useCallback((lastName) => {
        if (lastName === "") {
            setLastNameState({ ...lastNameState, value: '', message: 'Last name is required.', flag: true })
            return false;
        } else {
            if (lastName.length > 20) {
                setLastNameState({ ...lastNameState, value: '', message: 'Max 20 character.', flag: true })
                return false;
            }
            setLastNameState({ ...lastNameState, value: lastName, message: '', flag: false })
        }
    }, [lastNameState])

    const checkPhoneNo = useCallback((phoneNo) => {
        const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneNo === "" || phoneNo === null) {
            setPhoneNoState({ ...phoneNoState, value: phoneNo, message: 'Phone No is required.', flag: true })
            return false
        }
        else if (phoneNo.match(phoneNo_regex)) {
            setPhoneNoState({ ...phoneNoState, value: phoneNo, message: '', flag: false })
            return phoneNo
        }
        else {
            setPhoneNoState({ ...phoneNoState, value: phoneNo, message: 'Invalid Phone No!', flag: true })
            return false
        }
    }, [phoneNoState])

    const checkGender = useCallback((gender) => {
        setGenderState({ ...genderState, value: gender, message: '', flag: false })
    }, [genderState])

    const checkHobby = useCallback((e) => {
        const hobbyListElem = document.querySelectorAll(`input[name="hobby_${email}"]:checked`)
        if (hobbyListElem.length > 0) {
            let hobby = ''
            hobbyListElem.forEach(element => {
                hobby += `${element.value},`
            });
            setHobbyState({ ...hobbyState, value: hobby.replace(/.$/, ''), message: '', flag: false })
            return hobby.replace(/.$/, '')

        } else {
            setHobbyState({ ...hobbyState, value: '', message: 'Please select any one Hobby!', flag: true })
            return false
        }
    }, [email, hobbyState])

    const checkTechnology = useCallback((e) => {
        const technologyOpt = document.getElementById('technology_' + email).options
        if (technologyOpt.selectedIndex !== -1) {
            let technology = ''
            for (let i = 0; i < technologyOpt.length; i++) {
                if (technologyOpt[i].selected) {
                    technology += `${technologyOpt[i].value},`
                }
            }
            setTechnologyState({ ...technologyState, value: technology.replace(/.$/, ''), message: '', flag: false })
            return technology.replace(/.$/, '')
        }
        else {
            setTechnologyState({ ...technologyState, value: '', message: 'Please select any one Technology!', flag: true })
            return false
        }
    }, [email, technologyState])

    const doNothing = () => {
        return
    }

    const updateUser = () => {

        if (firstNameState.value && lastNameState.value && phoneNoState.value && genderState.value && hobbyState.value && technologyState.value) {
            dispatch({
                type: 'EDIT_USER',
                user: {
                    firstName: firstNameState.value,
                    lastName: lastNameState.value,
                    email: email,
                    phoneNo: phoneNoState.value,
                    gender: genderState.value,
                    hobby: hobbyState.value,
                    technology: technologyState.value
                }
            })
            Swal.fire('User Updated', 'User Data Updated successfully!', 'success')
                .then(() => {
                    navigate("/data-list")
                });
        }
        else {
            firstNameState.value || setFirstNameState({ ...firstNameState, value: '', message: firstNameState.message || 'First name is required.', flag: true })
            lastNameState.value || setLastNameState({ ...lastNameState, value: '', message: lastNameState.message || 'Last name is required.', flag: true })
            phoneNoState.value || setPhoneNoState({ ...phoneNoState, value: '', message: phoneNoState.message || 'Phone No is required.', flag: true })
            genderState.value || setGenderState({ ...genderState, value: '', message: 'Please select your Gender!', flag: true })
            hobbyState.value || setHobbyState({ ...hobbyState, value: '', message: hobbyState.message || 'Please select any one Hobby!', flag: true })
            technologyState.value || setTechnologyState({ ...technologyState, value: '', message: technologyState.message || 'Please select any one Technology!', flag: true })
        }
    }

    return (
        <>
            <div className={active ? "carousel-item active" : "carousel-item"} >
                <form className="container" method="post" action="" noValidate>
                    <CustomElements
                        id="firstName" type="text" text="First name"
                        value={firstNameState.value}
                        onChange={(e) => checkFirstName(e.target.value.trim())}
                        InputFieldState={firstNameState}
                    />

                    <CustomElements
                        id="lastName" type="text" text="Last name"
                        value={lastNameState.value}
                        onChange={(e) => checkLastName(e.target.value.trim())}
                        InputFieldState={lastNameState}
                    />

                    <CustomElements
                        id="email" type="email" text="Email address" disabled={true}
                        onChange={doNothing}
                        value={userData.email} InputFieldState=''
                    />

                    <CustomElements
                        id="phoneNo" type="number" text="Phone no."
                        value={phoneNoState.value}
                        onChange={(e) => checkPhoneNo(e.target.value.trim())}
                        InputFieldState={phoneNoState}
                    />

                    <label className="form-label">Gender</label>
                    <div className="input-group mb-3">
                        <Gender
                            gender={genderState.value}
                            onChange={(e) => checkGender(e.target.value)}
                            RadioFieldState={genderState}
                        />
                    </div>

                    <SelectElement
                        id={"technology_" + email}
                        technologyList={technologyState.value.split(',')}
                        onChange={(e) => checkTechnology(e)}
                        SelectFieldState={technologyState}
                    />

                    <label className="form-label">Hobby</label>
                    <Hobbies
                        id={"hobby_" + email}
                        hobbyList={hobbyState.value.split(',')}
                        onClick={(e) => checkHobby(e)}
                        GenderFieldState={hobbyState}
                    />

                    <button type="button" onClick={updateUser} className="btn btn-success">Update</button>
                </form>
            </div>
        </>
    )
}

export default React.memo(GenerateForm)
