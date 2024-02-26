import React from 'react'
import Container from 'react-bootstrap/esm/Container'



function Content() {
    return (
        <>
        <div style={{ backgroundColor: '#f2f4fb ', width: '100%', height: '600px' }}>
           <Container>
            <div style={{paddingTop:'150px'}} className='d-flex align-items-center justify-content-around' >
            <div style={{width:'500px',height:'400px'}} className='d-flex flex-column align-items-center'>
                <h2 style={{fontSize:'60px',fontFamily:'Playfair Display", times, serif;',fontWeight:'700',color:'black'}}>Welcome!</h2>
                <p style={{lineHeight:'1.8'}}>Far far away, behind the word mountains, far <br /> from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in <br /> Bookmarksgrove right at the coast of the  <br />Semantics, a large language ocean.</p>
                <button style={{backgroundColor:'#ea0b32',height:'57px',padding:'15px 40px',color:'white',borderRadius:'50px'}}>Learn More</button>
            </div>
            <div className='img' style={{width:'600px',borderRadius:'2px 2px 100px 2px',height:'400px'}} >
            </div>
            </div>
            </Container>
        </div>
        <div style={{width:'100%',marginTop:'100px',marginBottom:'120px'}} className='d-flex flex-column align-items-center justify-content-center'>
            <h1 style={{fontWeight:'600',fontSize:"60px",color:'black'}}>Rooms & Suites</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, </p>
     <p>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the</p>
     <p style={{marginBottom:'30px'}}> Semantics, a large language ocean.</p>
     <div className=' rooms container d-flex justify-content-between'>
<div  className='d-flex flex-column align-items-center justify-content-center' >
<img style={{width:'400px',height:'400px'}} src="https://themewagon.github.io/sogo/images/img_1.jpg" alt="" />
<h2 style={{fontSize:'2rem',color:'black',marginTop:'16px'}}>Single Room</h2>
<span style={{color:'rgb(234, 11, 50)',fontSize:'16px',textTransform:'uppercase'}}>90$ / per night</span>
    </div>     
<div className='d-flex flex-column align-items-center justify-content-center'>
<img style={{width:'400px',height:'400px'}} src="https://themewagon.github.io/sogo/images/img_2.jpg" alt="" />
<h2 style={{fontSize:'2rem',color:'black',marginTop:'16px'}}>Family Room</h2>
<span style={{color:'rgb(234, 11, 50)',fontSize:'16px',textTransform:'uppercase'}}>120$ / per night</span>
</div>
<div  className='d-flex flex-column align-items-center justify-content-center' >
<img style={{width:'400px',height:'400px'}} src="https://themewagon.github.io/sogo/images/img_3.jpg" alt="" />
<h2 style={{fontSize:'2rem',color:'black',marginTop:'16px'}}>Presidential Room</h2>
<span style={{color:'rgb(234, 11, 50)',fontSize:'16px',textTransform:'uppercase'}}>250$ / per night</span>
</div>
     </div>
        </div>



        </>
    )
}

export default Content