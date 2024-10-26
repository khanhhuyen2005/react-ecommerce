import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col, InputGroup } from 'reactstrap';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUp';
import LoginPage from './LoginPage';

function Example() {
  const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setModal(true)
  };

  const handleCloseModal = () => {
    setModal(false)
  };



  return (
    <div>
      <Button color="light" onClick={handleShowModal} >
        LOGIN/REGISTER
      </Button>

      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* </BrowserRouter> */}

      <Modal isOpen={modal} toggle={handleCloseModal} size='xl' centered={true} >
        <ModalHeader toggle={handleCloseModal} className='border-0'>
          <img className='w-[200px] ml-[440px] mt-[30px]' src="https://6valley-aster.6amtech.com/storage/app/public/company/2023-06-13-64885c88ce767.png" alt="" />
        </ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-12 mb-[20px]'>
            <div className='col-span-5 ml-[30px]'>
              <h1 className='font-medium text-2xl'>LoginPage</h1>
              <span className='text-gray-500'>
                Login to your account. Don't have account?
                <a href="/" className='text-blue-800'> Sign Up</a>
              </span>

              <Form className='mt-6'>
                <FormGroup>
                  <Label for="email_phone">
                    Email / Phone
                  </Label>
                  <Input
                    id="email_phone"
                    name="email/phone"
                    placeholder="Enter email or phone number"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">
                    Password
                  </Label>
                  <Input
                    id="Password"
                    name="password"
                    placeholder="Ex:6+ Character"
                    type="password"
                  />
                </FormGroup>

                <div className='flex justify-between'>
                  <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check className=''>
                      Remember  Me
                    </Label>
                  </FormGroup>
                  <a href="./">Forgot Password?</a>
                </div>

                {/* <form>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="input" />
                  <reCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    ref={captchaRef}
                  />
                  <button>Submit</button>
                </form> */}
                <Button className='w-full mt-4'>
                  Login
                </Button>
              </Form>
            </div>
            <div className='col-span-2 mt-[160px]'>
              <div className='grid grid-cols-3 items-center text-gray-500 transform -rotate-90 '>
                <hr className='border-gray-500' />
                <p className='text-center'>Or Sign in with</p>
                <hr className='border-gray-500' />
              </div>
            </div>

            <div className='col-span-5'>
              <div className='mr-[30px] mt-[150px]'>
                <p className='text-center text-gray-500'>Or continue with</p>
                <div>
                  <button className='border w-full p-2 pb-3 bg-gray-100 rounded'>
                    <a href="./" className='w-full'><img className='mb-[-30px] ml-[130px]' src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/svg/google.svg" alt="" /> Google</a>
                  </button>
                </div>
                <div className='mt-4'>
                  <button className='border w-full p-2 pb-3 bg-gray-100 rounded'>
                    <a href="./" className='w-full'><img className='mb-[-30px] ml-[120px]' src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/svg/facebook.svg" alt="" /> Facebook</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Example;