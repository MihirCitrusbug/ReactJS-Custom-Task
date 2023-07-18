import React, { useContext, useSta, useEffect } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';
import GenerateForm from './GenerateForm';


const EditData = () => {
    const navigate = useNavigate()
    const [users,] = useContext(userContext)
    let queryString = window.location.search;
    queryString = queryString.replace('?', '');
    let params = queryString.split('=');
    let emailString = params[1];

    // useEffect(() => {
    //     console.log("Use Effect User Data =", users)

    //     const sliderEditForm = document.querySelector('.sliderEditForm')

    //     // * Selected Technology data
    //     const selectedTechnology = async (id, technology) => {
    //         const technologyOpt = document.getElementById(id).querySelectorAll('option')
    //         for (let i = 0; i < technologyOpt.length; i++) {
    //             if (technology.split(',').includes(technologyOpt[i].value)) {
    //                 let html = `<a className="ui label transition visible" data-value="${technologyOpt[i].value}" style="display: inline-block !important;">${technologyOpt[i].value}<i className="delete icon"></i></a>`
    //                 // $(html).insertAfter(document.getElementById(id));
    //                 technologyOpt[i].selected = true
    //             }
    //         }
    //     }

    //     // * Selected Hobby data
    //     const selectHobby = async (selector, hobby) => {
    //         const hobbyListElem = document.querySelectorAll(selector)
    //         hobbyListElem.forEach(element => {
    //             if (hobby.split(',').includes(element.value)) {
    //                 console.log("element =", element.value)
    //                 element.checked = true
    //             }
    //         });
    //     }

    //     // * Selected Gender
    //     const selectGender = async (selector, gender) => {
    //         const genderListElem = document.querySelectorAll(selector)
    //         genderListElem.forEach(element => {
    //             if (element.value == gender) {
    //                 element.checked = true
    //             }
    //         });
    //     }

    //     emailString.split(',').forEach((email, index) => {
    //         // console.log("email =", email)
    //         let myData = users.filter(user => user.email === email)
    //         let activeClass = index === 0 ? 'active' : ''
    //         const nextBtn = document.getElementById('nextBtn')
    //         const prevBtn = document.getElementById('prevBtn')
    //         if (index > 0) { nextBtn.style.display = 'inline'; prevBtn.style.display = 'inline' }
    //         else { nextBtn.style.display = 'none'; prevBtn.style.display = 'none' }
    //         return <GenerateForm user={myData[0]} />
    //         // let html = `<div className="carousel-item ${activeClass}">
    //         //         <form className="container" method="post" id="${myData[0].email}" action="" noValidate>
    //         //             <div className="mb-3">
    //         //                 <label for="firstName" className="form-label">First name</label>
    //         //                 <input type="text" oninput="firstNameValidation(this, 'firstNameRequiredError_${myData[0].email}', 'firstNameMaxLengthError_${myData[0].email}')" value="${myData[0].firstName}" className="form-control" id="firstName">
    //         //                 <div id="firstNameRequiredError_${myData[0].email}" className="invalid-feedback">
    //         //                     First name is required.
    //         //                 </div>
    //         //                 <div id="firstNameMaxLengthError_${myData[0].email}" className="invalid-feedback">
    //         //                     Max 20 character.
    //         //                 </div>

    //         //             </div>

    //         //             <div className="mb-3">
    //         //                 <label for="lastName" className="form-label">Last name</label>
    //         //                 <input type="text" oninput="lastNameValidation(this, 'lastNameRequiredError_${myData[0].email}', 'lastNameMaxLengthError_${myData[0].email}')" value="${myData[0].lastName}" className="form-control" id="lastName">
    //         //                 <div id="lastNameRequiredError_${myData[0].email}" className="invalid-feedback">
    //         //                     Last name is required.
    //         //                 </div>
    //         //                 <div id="lastNameMaxLengthError_${myData[0].email}" className="invalid-feedback">
    //         //                     Max 20 character.
    //         //                 </div>
    //         //             </div>

    //         //             <div className="mb-3">
    //         //                 <label for="email" className="form-label">Email address</label>
    //         //                 <input type="email" disabled value="${myData[0].email}" className="form-control" id="email">
    //         //                 <div id="emailRequiredError" className="invalid-feedback">
    //         //                     Email is required.
    //         //                 </div>
    //         //             </div>

    //         //             <div className="mb-3">
    //         //                 <label for="phoneNo" className="form-label">Phone no.</label><br>
    //         //                 <input type="number" oninput="phoneNoValidation(this, 'phoneNoRequiredError_${myData[0].email}', 'phoneNoInvalidError_${myData[0].email}')" value="${myData[0].phoneNo}" name="phoneNo" id="phoneNo${index}" className="form-control">
    //         //                 <div id="phoneNoRequiredError_${myData[0].email}" className="invalid-feedback">
    //         //                     Phone No is required.
    //         //                 </div>
    //         //                 <div id="phoneNoInvalidError_${myData[0].email}" className="invalid-feedback">
    //         //                     Invalid Phone No!
    //         //                 </div>
    //         //             </div>

    //         //             <label className="form-label">Gender</label>
    //         //             <div className="input-group mb-3">
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onchange="genderValidation('gender_${myData[0].email}', 'genderRequiredError_${myData[0].email}')" type="radio" email="${myData[0].email}" name="gender_${myData[0].email}"
    //         //                         id="male" value="male">
    //         //                     <label className="form-check-label" for="male">Male</label>
    //         //                 </div>
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onchange="genderValidation('gender_${myData[0].email}', 'genderRequiredError_${myData[0].email}')" type="radio" email="${myData[0].email}" name="gender_${myData[0].email}"
    //         //                         id="female" value="female">
    //         //                     <label className="form-check-label" for="female">Female</label>
    //         //                 </div>
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onchange="genderValidation('gender_${myData[0].email}', 'genderRequiredError_${myData[0].email}')" type="radio" email="${myData[0].email}" name="gender_${myData[0].email}"
    //         //                         id="other" value="other">
    //         //                     <label className="form-check-label" for="other">Other</label>
    //         //                 </div>
    //         //                 <div id="genderRequiredError_${myData[0].email}" className="invalid-feedback">
    //         //                     Please select your Gender!
    //         //                 </div>
    //         //             </div>

    //         //             <div className="row  mb-3 ">
    //         //                 <div className="col-lg-4 col-md-6 d-flex  align-items-center">
    //         //                     <div className="inline w-100 field">
    //         //                         <label>Technology</label>
    //         //                         <select className="label ui selection fluid dropdown" onchange="technologyValidation('technology_${myData[0].email}', 'technologyRequiredError_${myData[0].email}')" name="technology" id="technology_${myData[0].email}" multiple>
    //         //                             <option value="python">Python</option>
    //         //                             <option value="php">PHP</option>
    //         //                             <option value="html">HTML</option>
    //         //                             <option value="css">CSS</option>
    //         //                             <option value="javascript">JavaScript</option>
    //         //                         </select>
    //         //                     </div>
    //         //                 </div>
    //         //             </div>
    //         //             <div id="technologyRequiredError_${myData[0].email}" className="invalid-feedback">
    //         //                 Please select any one technology!
    //         //             </div>

    //         //             <label className="form-label">Hobby</label>
    //         //             <div className="input-group mb-3">
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onclick="hobbyValidation('hobby_${myData[0].email}', 'hobbyRequiredError_${myData[0].email}')" type="checkbox" name="hobby_${myData[0].email}"
    //         //                         value="cricket" id="cricket">
    //         //                     <label className="form-check-label" for="cricket">Cricket</label>
    //         //                 </div>
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onclick="hobbyValidation('hobby_${myData[0].email}', 'hobbyRequiredError_${myData[0].email}')" type="checkbox" name="hobby_${myData[0].email}"
    //         //                         value="reading" id="reading">
    //         //                     <label className="form-check-label" for="reading">Reading</label>
    //         //                 </div>
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onclick="hobbyValidation('hobby_${myData[0].email}', 'hobbyRequiredError_${myData[0].email}')" type="checkbox" name="hobby_${myData[0].email}"
    //         //                         value="traveling" id="traveling">
    //         //                     <label className="form-check-label" for="traveling">Traveling</label>
    //         //                 </div>
    //         //                 <div className="form-check ml-3">
    //         //                     <input className="form-check-input" onclick="hobbyValidation('hobby_${myData[0].email}', 'hobbyRequiredError_${myData[0].email}')" type="checkbox" name="hobby_${myData[0].email}"
    //         //                         value="movies" id="movies">
    //         //                     <label className="form-check-label" for="movies">Movies</label>
    //         //                 </div>
    //         //                 <div id="hobbyRequiredError_${myData[0].email}" className="invalid-feedback">
    //         //                     Please select any one Hobby!
    //         //                 </div>
    //         //             </div>    

    //         //             <button type="button" onclick="updateForm(this)" email="${myData[0].email}" className="btn btn-success">Update</button>
    //         //         </form>
    //         //     </div>`
    //         // sliderEditForm.innerHTML += html
    //         // setTimeout(async () => {
    //         //     await selectGender(`input[name="gender_${myData[0].email}"]`, myData[0].gender);
    //         //     await selectHobby(`input[name="hobby_${myData[0].email}"]`, myData[0].hobby);
    //         //     await selectedTechnology(`technology_${myData[0].email}`, myData[0].technology);
    //         //     const phoneInputField = document.querySelector(`#phoneNo${index}`);
    //         //     const phoneInput = window.intlTelInput(phoneInputField, {
    //         //         utilsScript:
    //         //             "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    //         //     });
    //         // }, 1);

    //     })
    // }, [])

    // let resultArr = users.filter(user => user.email === email)

    const dataList = () => {
        navigate("/data-list")
    }
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide container mt-xl-5" data-bs-ride="true">
                <h2 className="mb-2">Update data</h2>
                <div className="carousel-inner sliderEditForm">
                    {emailString.split(',').map((email, index) => {
                        return <GenerateForm email={email} active={index === 0 ? 'active' : ''} />
                    })}
                </div>
                <div className="container mt-3">
                    <button className="btn btn-primary" id="nextBtn" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="btn btn-primary" id="prevBtn" type="button" data-bs-target="#carouselExampleRide"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <button onClick={dataList} className="btn btn-primary">Back</button>
                </div>
            </div >
        </>
    )
}

export default React.memo(EditData)
