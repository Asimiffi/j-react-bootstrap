import React from 'react'

const contact = () => {
  return (
    <div><section id='contact' className='bg-light d-flex justify-content-center' style={{width:'100%', height:'60vh'}}>
        <div className="contact" style={{width: "70%", background:'black', height:'35vh', color:'white', display:'flex', justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
            <h4>Be the first</h4>
            <h6>New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.</h6>
            <div>
            <input type="text" placeholder='Enter your email address' />
            <button>Signup</button>
            </div>
        </div>
        </section>
        </div>
  )
}

export default contact