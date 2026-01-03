import React from 'react'
import Title from '../Components/Title'

const Contact = () => {
  return (
    <div className='w-full  min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] text-white overflow-x-hidden'>
  <Title text1={'CONTACT'} text2={'US'}/>
   <p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[20px] px-[30px] text-semibold overflow-x-hidden'>We’re here to help! If you have any questions about our products, need help with your order, or want to share feedback, feel free to reach out to us. Our support team is always ready to assist you and ensure you have a smooth shopping experience.
</p>
<p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[40px] px-[10px] text-semibold'>You can contact us via:</p>
<p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[20px] px-[10px] text-semibold'>Email: support@yourstore.com</p>
<p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[20px] px-[10px] text-semibold'>Phone: +123-456-7890</p>
<p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[20px] px-[10px] text-semibold'>Business Hours: Monday to Saturday, 9:00 AM – 6:00 PM
</p>
<p className='w-[100%] min-h-[50px] text-white flex flex-wrap items-center justify-center text-[20px] px-[10px] text-semibold'>We aim to respond to all inquiries as quickly as possible.</p>
    </div>
  )
}

export default Contact