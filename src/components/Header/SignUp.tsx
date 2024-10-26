import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col, InputGroup } from 'reactstrap';
import React, { useState, useEffect } from 'react'

const SignUp = () => {
    const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setModal(true)
  };

  const handleCloseModal = () => {
    setModal(false)
  };

  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid')
      } else {
        setShowErrorMessage(true)
        setCPasswordClass('form-control is-invalid')
      }
    }
  }, [cPassword])

  const handleCPassword = (e: any) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  }
    return (
        <Modal isOpen={modal} toggle={handleCloseModal} size='xl' centered={true} >
        <ModalHeader toggle={handleCloseModal} className='border-0'>
          <img className='w-[200px] ml-[440px] mt-[30px]' src="https://6valley-aster.6amtech.com/storage/app/public/company/2023-06-13-64885c88ce767.png" alt="" />
        </ModalHeader>
        <ModalBody>
          <div className=' mb-[20px]'>
            <div className=' mx-[30px]'>
              <h1 className='font-medium text-2xl'>Sign up</h1>
              <span className='text-gray-500'>
                Login to your account. Don't have account?
                <a href="/" className='text-blue-800'> Login</a>
              </span>

              <div className=''>
                <Form className='mt-6'>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstName">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Ex:Jhone"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="lastName">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Ex:Doe"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">
                          Email
                        </Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Enter email or phone number"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">
                          Phone
                        </Label>
                        <InputGroup>
                          {/* <Select>1111</Select> */}
                          <Input placeholder="Enter phone number" />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="password">
                          Password
                        </Label>
                        <Input
                          id="password"
                          name="email"
                          placeholder="Minimum 8 characters long"
                          type="password"
                          // className="form-control"
                          value={password}
                          onChange={(e) => { setPassword(e.target.value) }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="email"
                          placeholder="Minimum 8 characters long"
                          type="password"
                          className={cPasswordClass}
                          value={cPassword}
                          onChange={handleCPassword}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <FormGroup>
                      <Label for="referCode">
                        Refer Code <span className='text-gray-400 text-sm'>(Optional)</span>
                      </Label>
                      <Input
                        id="referCode"
                        placeholder="Use referral code"
                        type="text"
                      />
                    </FormGroup>
                  </Row>

                  <Row >
                    <div className='flex justify-center'>
                      <FormGroup check>
                        <Input type="checkbox" />
                        {' '}
                        <Label check className='items-center'>
                          I Agree With The <span><a href="./" className='text-cyan-400'>Term & Conditions</a></span>
                        </Label>
                      </FormGroup>
                    </div>
                  </Row>
                </Form>
              </div>

              <div className='mb-5'>
                <div className=' flex justify-center mb-3'>
                  <Button className='w-[20%] mt-4' color="primary">
                    Sign up
                  </Button>
                </div>

                <div>
                  <p className='text-center text-gray-500'>Or continue with</p>
                </div>
                <div className='flex justify-center'>
                  <div className='mr-3'>
                    <a href="./" className=''><img className='' src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/svg/google.svg" alt="" /></a>
                  </div>
                  <div>
                    <a href="./" className=''><img className='' src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/svg/facebook.svg" alt="" /></a>
                  </div>
                </div>

              </div>
            </div>



          </div>
        </ModalBody>
      </Modal>
    )
};


export default SignUp;