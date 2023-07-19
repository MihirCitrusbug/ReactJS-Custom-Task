import React from 'react'
import { useNavigate } from 'react-router-dom';
import GenerateForm from './GenerateForm';


const EditData = () => {
    const navigate = useNavigate()
    let queryString = window.location.search;
    queryString = queryString.replace('?', '');
    let params = queryString.split('=');
    let emailString = params[1];

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
