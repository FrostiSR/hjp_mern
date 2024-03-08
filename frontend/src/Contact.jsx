import React, { useState } from 'react';
import {
  MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn
} from 'mdb-react-ui-kit';
import contact from './assets/contact.svg'
import axios from 'axios';

export default function App() {
  const [fName, setFname] = useState(); 
    const [lName, setLname] = useState(); 
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMsg] = useState();

    const resetForm = () => {
          setFname("");
          setLname("");
          setEmail("");
          setSubject("");
          setMsg("");
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/newContact', {
          fName, lName, email, subject, message
    })
      .then(res => {
          alert("Thank you!");
          resetForm();
      }).catch((err) => {
          console.log("error"); 
          resetForm();
      })
  }

  return (
    <div>
     <header>
        <section className="gradient-background" id="title">
        <div className="container col-xxl-8 px-4 pt-5">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={contact} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="100" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-light">Contact Us</h1>

            </div>
          </div>
        </div>
      </section>
    </header>


    <section className='border text-center mb-4 p-5'>
      <div className='row'>
        <div className='col-lg-5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.219129197083!2d-55.1840425242888!3d5.824694930887803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d09cad7e1433c79%3A0xc665c7592cc5c99b!2sO.S.%20Zinnia%20School!5e0!3m2!1sen!2s!4v1709215827156!5m2!1sen!2s'
            className='h-100 w-100'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='col-lg-7 p-3'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-md-9'>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput required name='fName' value={fName} type='text' label='First name' id='form3FirstName' onChange={(e) => setFname(e.target.value)}/>
                  </MDBCol>
                  <MDBCol>
                  <MDBInput required name='lName' value={lName} type='text' label='Last name' id='form3LastName' onChange={(e) => setLname(e.target.value)}/>
                  </MDBCol>
                </MDBRow>

                <MDBInput
                required
                  name='email'
                  type='email'
                  label='Email'
                  v-model='form3Subject'
                  wrapperClass='mb-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <MDBInput
                 required
                  name='subject'
                  type='text'
                  label='Subject'
                  v-model='form3Subject'
                  wrapperClass='mb-4'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <MDBTextArea required name='message' type='text' label='Message' id='form3Textarea' wrapperClass='mb-4' value={message} onChange={(e) => setMsg(e.target.value)}/>
                <MDBBtn type='submit' color='primary' className='mb-4'>
                  Send
                </MDBBtn>
              </div>
              <div className='col-md-3'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                    <p>
                      <small>New York, NY 10012, USA</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-phone fa-2x text-primary'></i>
                    <p>
                      <small>+ 01 234 567 89</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-envelope fa-2x text-primary'></i>
                    <p>
                      <small>contact@gmail.com</small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}