import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname : "",
        phone : "",
        email : "",
        msg : "",
    });
 const InputEvent = (event) => {
     const {name, value} = event.target;
     setData((prevalue) => {
         return {
             ... prevalue,
             [name]: value,
         };
     });
 };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email},
            Here is what I want to say ${data.msg}`
        );
    };
    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmi={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName : </label>
                                <input
                                    text="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number :</label>
                                <input
                                    text="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email :</label>
                                <input
                                    text="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Message :</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFromControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Contact;
