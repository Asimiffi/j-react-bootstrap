import React from 'react'
import credit from '../images/creditcard.webp'

const Payment = () => {
  return (
    <div>
        <h2>PAYMENT GUIDELINE</h2>
        <p>We aim to provide a safe and secure shopping experience. However, in some instances, we would be needing your payment details and CNIC to ensure that your
             credentials are not being misused and the details are used by the real owner.</p>
             <p>Following is the procedure</p>
             <ul>
                 <li>A picture of your CNIC (Front and back)</li>
                 <li>
Picture of your Credit/Debit card with the following details only:</li>
                 <li>Card holder's name</li>
                 <li>First 6 digits of the card number</li>
                 <li>Last 4 digits of the card number</li>
             </ul>
             <p>We at J. never compromise on the security of the personal details of customers.</p>
        payment
        <img src={credit} alt="" />
        </div>
  )
}

export default Payment