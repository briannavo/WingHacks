import React from 'react'

const TipsPage = () => {
  return (
    <div>

    <div className='bg-[#CBC3E3] p-6 rounded-lg text-center items-center justify-center border border-e-blue-300'>
      <h1 style={{color: 'green', textAlign:'center'}} className='font-bold'>Domestic Violence Safety Tips</h1>
      <ul style={{ listStyleType: 'circle', listStylePosition: 'inside', textAlign:'center'}} className='list-disc pl-5 text-center justify-center'>

        <li> If you are in immediate danger, call 911</li>
        <li> If you feel tension building up, avoid area with possible weapons</li>
        <li> Know where there is a safe exit from your home</li>
        <li> Have a code word to use with your children, family, friends, and neighbors</li>
        <li> Teach your children how to get help</li>
        <li> Keep a bag packed with essentials</li>
        <li> Keep important documents in a safe place</li>
        <li> Keep a list of emergency contacts</li>
        <li> Know where the nearest shelter is. If you want to find one use the Near you tab to find one near you</li>
        <li> Know where the nearest hospital is</li>
    
      </ul>
    </div>
    
    <div className='bg-[#CBC3E3] p-6 rounded-lg text-center items-center justify-center border border-e-blue-300'>
      <h1 style={{color: 'green', textAlign:'center'}} className='font-bold'>Steps to Leave Abusive Situation</h1>
        <ul style={{ listStyleType: 'circle', textAlign:'center', listStylePosition: 'inside'}} className='list-disc pl-5'>
          <li> Make a plan</li>
          <li> Tell someone you trust</li>
          <li> Keep a journal of all incidents</li>
          <li> Get a restraining order</li>
          <li> Open a bank account in your own name</li>
          <li> Have a cell phone or change on hand to make emergency calls</li>
        </ul>
    </div>

    <div className='bg-[#CBC3E3] p-6 rounded-lg text-center items-center justify-center border border-e-blue-300'>
        <h1 style={{color: 'green', textAlign:'center'}} className='font-bold'>Steps to Take after Leaving Abusive Situation</h1>
        <ul style={{ listStyleType: 'circle', textAlign:'center', listStylePosition: 'inside'}}>
          <li>Keep your Order of Protection with you at all times</li>
          <li>Change your locks</li>
          <li>Change your phone number</li>
          <li>Discuss safety plans with your children</li>
          <li>Inform your children's school of the situation</li>
          <li>Inform your employer of the situation</li>
          <li>Get counseling</li>
          <li>Get a new email address</li>
          <li>Talk with people who can provide you with support on domestic violence issues</li>
        </ul>
    </div>
    
  </div>
  )
}

export default TipsPage
