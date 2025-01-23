import React from 'react'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Myproject from '../Components/Myproject'
import Profile from '../Components/Profile'






function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem("existingUsers"))
  return (
    <>
    <Header/>
     <div className="p-4 mt-5">
      <h3 className='mt-5'>Welcome <span className='text-warning'>{user.username || 'Guest'}</span></h3>
      <Container>
        <Row>
          <Col sm={12} md={8}><Myproject/></Col>
          <Col sm={12} md={4}><Profile/></Col>
        </Row>
      </Container>
     </div>
    </>
  )
}

export default Dashboard