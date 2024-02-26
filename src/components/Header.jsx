import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




function Header() {
    return (

        <>
            <div style={{position:'relative'}} className='background'>
                <div className='nav'>
                    <Container>
                        <Navbar className='d-flex align-items-center justify-content-between'>
                            <p style={{ fontSize: '30px', color: '#ea0b32' }}>SOGO <span style={{ color: 'white' }}>HOTEL</span></p>
                           

                                <div className='links d-flex align-items-center ' >

                                    <li><a href="">Home</a></li>
                                    <li><a href=""> Rooms</a></li>
                                    <li><a href=""> About</a></li>
                                    <li><a href=""> Events</a></li>
                                    <li><a href=""> Contacts</a></li>
                                    <li><a href=""> Reservations</a></li>

                                </div>
                            
                        </Navbar>
                    </Container>
                </div>
                <div style={{width:'100%',}} className='content d-flex flex-column align-items-center justify-content-center '>
                   
                <span style={{fontSize:'17px',letterSpacing:'.2rem',color:'#fff'}}>Welcome To 5 <span className='fa fa-star text-danger'></span>Hotel</span>
 
             <h1 style={{fontSize:'80px',fontWeight:'600', fontFamily:'Playfair Display", times, serif',lineHeight:'1',color:'white'}}>A Best Place To Stay</h1>
                </div>
            </div>

            <div  className='d-flex align-items-center justify-content-center '>
                <div style={{padding:'27px 40px',position:'absolute',backgroundColor:'white'}} className='box border rounded  d-flex '>
<div>
    <p>Check In</p>
<input type="date" name="" id="" />
</div>
<div>
<p>Check Out</p>
<input type="date" name="" id="" />
</div>
<div>
    <p>Adults</p>
    <FloatingLabel  className='float'  controlId="floatingSelect" label="">
      <Form.Select aria-label="Floating label select example">
        <option>1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4+</option>
      </Form.Select>
    </FloatingLabel>
</div>
<div>
    <p>Children</p>
    <FloatingLabel className='float' controlId="floatingSelect" label="">
      <Form.Select aria-label="Floating label select example">
        <option>1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4+</option>
      </Form.Select>
    </FloatingLabel>
</div>
<div>
    <button style={{backgroundColor:'#ea0b32',marginTop:'38px',marginLeft:'20px',height:'57px',padding:'15px 40px',color:'white',borderRadius:'50px'}}>Check Availability</button>
</div>

                </div>
            </div>
        </>


    )
}

export default Header