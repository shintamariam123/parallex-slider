import React from 'react'
import Card from 'react-bootstrap/Card';
function Events() {
  return (
    <>
    <div style={{width:'100%',height:'900px',backgroundColor:'#f2f4fb ',paddingTop:'30px',paddingBottom:'   30px'}}className='d-flex flex-column align-items-center '>
<h2 style={{fontWeight:'600',color:'black'}}>Events</h2>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, </p>
<p> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the  </p>
<p>Semantics, a large language oceans. </p>
<div className='cardds container d-flex  align-items-center justify-content-evenly'>
<Card style={{width:'400px',height:'600px'}} >
     <Card.Img  variant="top" src="https://themewagon.github.io/sogo/images/img_1.jpg" />
     <Card.Body>
       <Card.Title></Card.Title>
       <Card.Text style={{textAlign:'justify'}}  className='d-flex flex-column  justify-content-center '>
         <span style={{color:'#adb5bd',fontSize:'14px',textTransform:'uppercase'}}>February 26, 2018</span>
         <h2>Travel Hacks to</h2>
         <h2>Make Your Flight</h2>
         <h2>More Comfortable</h2>
         <p>Far far away, behind the word <br /> mountains, far from the <br /> countries Vokalia and <br /> Consonantia, there live the blind <br />texts.</p>
       </Card.Text>
     </Card.Body>
   </Card>
   <Card style={{width:'400px',height:'600px'}} >
     <Card.Img  variant="top" src="https://themewagon.github.io/sogo/images/img_2.jpg" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
       <span style={{color:'#adb5bd',fontSize:'14px',textTransform:'uppercase'}}>February 26, 2018</span>
         <h2>Travel Hacks to</h2>
         <h2>Make Your Flight</h2>
         <h2>More Comfortable</h2>
         <p>Far far away, behind the word <br /> mountains, far from the <br /> countries Vokalia and <br /> Consonantia, there live the blind <br />texts.</p>
       </Card.Text>
     </Card.Body>
   </Card>
   <Card style={{width:'400px',height:'600px'}} >
     <Card.Img  variant="top" src="https://themewagon.github.io/sogo/images/img_3.jpg" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
       <span style={{color:'#adb5bd',fontSize:'14px',textTransform:'uppercase'}}>February 26, 2018</span>
         <h2>Travel Hacks to</h2>
         <h2>Make Your Flight</h2>
         <h2>More Comfortable</h2>
         <p>Far far away, behind the word <br /> mountains, far from the <br /> countries Vokalia and <br /> Consonantia, there live the blind <br />texts.</p>
         </Card.Text>
     </Card.Body>
   </Card>
</div>

    </div>
     
   </>
  )
}

export default Events