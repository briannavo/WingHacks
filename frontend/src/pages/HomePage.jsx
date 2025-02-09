import React, { useState } from 'react'
import img1 from '../assets/ipvphysical.png'
import img2 from '../assets/1q80fy6d.png'


const HomePage = () => {
  return (
    <div>
        {/* SECTION 1 */}
        <section id="section-1" className="bg-[#CBC3E3] text-white p-8 h-screen flex items-center justify-center relative">

        <div className="absolute top-8 left-0 bg-[#CBC3E3] text-[#4c2973] p-4 rounded-md w-3/4 sm:w-1/2 md:w-1/3">
          <h1 className="text-5xl font-bold text-center mt-25 ">SAFE</h1>
          <h1 className="text-5xl font-bold text-center mt-5">HAVEN</h1>
        </div>

          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded-md w-3/4 sm:w-1/2 md:w-1/3">
            <p className='text-lg leading-relaxed mt-6 font-bold text-center'>DO NOT HESITATE TO CALL THE NATIONAL DOMESTIC VIOLENCE HOTLINE</p>
                               <p className='text-3xl leading-relaxed mt-6 font-bold text-center'> 1-800-799-SAFE (7233)</p>
            <p className='text-lg leading-relaxed mt-6 font-bold text-center'>IF YOU OR SOMEONE YOU KNOW IS SUFFERING FROM DOMESTIC VIOLENCE OR ABUSE</p>
          </div>

          {/* <div className="absolute top-7 right-0 bg-red text-[#4c2973] p-4 rounded-md w-3/4 sm:w-1/2 md:w-1/3">
          <img src="https://cdn-icons-png.flaticon.com/512/48/48823.png" alt="" />
        </div> */}


          

          {/* THREE SECTIONS BELOW */}
          <div className="flex mt-40 top-20 w-full justify-between space-x-4 relative bottom-2.5">
              <div className="flex-1 bg-[#7c53a6] p-6 rounded-lg text-center">
                  <h1 className='text-white text-center font-bold text-lg'>Hidden Costs</h1>
                  <p className='text-center mb-4'>
                  <span className='font-bold text-red-400'>96%</span> of employed domestic violence victims experience problems at work because of the abuse.
                  </p>
                  <a href="http://www.clicktoempower.org/domestic-violence-facts.aspx" className='text-center italic'>www.clicktoempower.org</a>
              </div>

              <div className="flex-1 bg-[#7c53a6] p-6 rounded-lg">
                <h1 className='text-white text-center font-bold text-lg'>The Prevalence of Domestic Abuse</h1>
                <p className='text-center mb-4'>
                1 in 4 women <span className='font-bold text-red-400'>(24.3%)</span> and 1 in 7 men <span className='font-bold text-red-400'>(13.8%) </span>aged 18 and older in the US have been the victim of severe physical violence by an intimate partner in their lifetime.
                </p>
                <p className='text-xs'>
                Black, M.C., Basile, K.C., Breiding, M.J., Smith, S.G., Walters, M.L., Merrick, M.T., Chen, J., & Stevens, M.R. (2011). The National Intimate Partner and Sexual Violence Survey (NISVS): 2010 Summary Report. Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.
                </p>
              </div>

              <div className="flex-1 bg-[#7c53a6] p-6 rounded-lg">
                <h1 className='text-white text-center font-bold text-lg'>Lasting Harm</h1>
                <p className='mb-4 text-center'>
                Survivors are <span className='font-bold text-red-400'>3</span> times as likely to meet the criteria for PTSD (1), and are <span className='font-bold text-red-400'>6</span> times more likely to have a substance use disorder (2).
                </p>
                <p className='italic text-xs'>
                  (1) Fedovskiy, K., Higgins, S., Paranjape, A. (2008). Intimate partner violence: How does it impactmajor depressive disorder and post traumatic stress disorder among immigrant Latinas? Journalof Immigrant and Minority Health, 10(1), 45-51.
                </p>
                
                <p className='italic text-xs'>
                  (2) Bonomi, A.E., Anderson, M.L., Reid, R.J., Rivara, F.P., Carrell, D., Thompson, R.S. (2009). Medicaland psychosocial diagnoses in women with a history of intimate partner violence. Archives ofInternal Medicine, 169(18), 1692-1697.
                </p>

              </div>


          </div>

        </section>

        <section id="section-2" className="bg-gray-200 text-white p-8 h-screen flex items-center justify-center relative">
          <div className='flex w-full'>
            {/* LEFT HALF */}
            <div className='w-1/2 p-4'>
              {/* <h1>LEFT HALF</h1> */}
              <div className= "w-4/5 bg-[#4c2973] text-white p-4 rounded-lg shadow-lg mt-8 flex-grow" style={{ minHeight: '70%' }}>
              <p className='text-3xl leading-relaxed mt-6 font-bold text-center'> Common Signs of Abuse</p>
              <p className=' leading-relaxed mt-6 font-bold '> 1. Telling you that you never do anything right</p>
              <p className=' leading-relaxed mt-6 font-bold '> 2. Showing extreme jealousy of your friends</p>
              <p className=' leading-relaxed mt-6 font-bold '> 3. Preventing you from spending time with friends, family members, or peers</p>
              <p className=' leading-relaxed mt-6 font-bold '> 4. Insulting you, especially in front of others</p>
              <p className=' leading-relaxed mt-6 font-bold '> 5. Preventing you from making your own decisions, such as about working or attending school</p>
              <p className=' leading-relaxed mt-6 font-bold '> 6. Controlling finances, such as by taking your money or withholding money for expenses</p>
              <p className=' leading-relaxed mt-6 font-bold '> 7. Pressuring you to consume drugs or alcohol</p>
              <p className=' leading-relaxed mt-6 font-bold '> 8. Intimidation or threats</p>
              <p className=' leading-relaxed mt-6 font-bold '> 9. Insulting your parenting or threatening to harm or take away your children or pets</p>
              <p className=' leading-relaxed mt-6 font-bold '> 10. Destroying your belongings or home</p>

              </div>
            </div>


            {/* RIGHT HALF */}
            <div className='w-1/2 p-4 flex items-center justify-center'>
              {/* <h1>RIGHT HALF</h1> */}
              <div className='text-black'>
              <p className='text-black text-lg'>IF YOU OR SOMEONE YOU KNOW IS EXPERIENCING <span className='font-bold'>EVEN ONE </span>OF THESE SIGNS,</p>
              <p className='text-lg mb-5'>PLEASE REFER TO THESE RESOURCES FOR SUPPORT: </p>

              <ul className='list-disc pl-5 space-y-4 font-bold '>
                
                <li><a href="https://www.thehotline.org/plan-for-safety/create-your-personal-safety-plan/" target="_blank" className='text-purple-400 font-bold hover:underline'>Creating a safety plan</a></li>
                <li><a href="https://www.thehotline.org/get-help/domestic-violence-legal-help/" target='_blank' className='text-purple-400 font-bold hover:underline'>Finding Legal Help</a></li>
                <li><a href="https://www.thehotline.org/get-help/domestic-violence-local-resources/" target='_blank' className='text-purple-400 font-bold hover:underline'>Local Resources</a></li>
                <li><a href="https://www.bankrate.com/personal-finance/credit/rebuild-finances-after-financial-abuse/" target='_blank' className='text-purple-400 font-bold hover:underline'>Recovering from Financial Abuse</a></li>
                <li><a href="https://www.thehotline.org/identify-abuse/understand-relationship-abuse/" target="_blank" className='text-purple-400 font-bold hover:underline'>Understanding Relationship Abuse</a></li>
                
                <li><a href="https://www.thehotline.org/support-others/"  target= "_blank" className='text-purple-400 font-bold hover:underline'>Support others</a></li>
              </ul>

              </div>
              
            </div>

          </div>
        </section>

        {/* SECTION 2 */}
    </div>
  )
}

export default HomePage
