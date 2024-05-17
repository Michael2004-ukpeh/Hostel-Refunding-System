import { FaTimesCircle} from 'react-icons/fa'

export default function PaymentSuccessful({ successfulPayment, setSuccessfulPayment }) {
    return (
        <div style={{display: successfulPayment ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)] ">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-[20px] px-[30px] pb-[30px] w-[40%] ">

                <div className="flex justify-center w-full mb-[10px ">
                    <img src="/images/succcessful-payment.png" alt="Success Icon" className="h-[100px] " />
                </div>

                <h2 className="text-[35px] text-[#032900] font-[500] mb-[10px] text-center ">Payment Successful</h2>

                <p className="text-[#384237] font-[26px] mb-[40px] text-center ">Your payment for a hostel space is successful and you will be informed when a space is allocated.</p>

                <div className="w-full flex justify-center mt-[20px] ">
                    <button onClick={()=> setSuccessfulPayment(false)} className='bg-[#101720] rounded-[16px] py-[12px] px-[10px] w-[300px] text-[#fff] '>Back to Dashboard</button>
                </div>
            </div>

            {/* <div className='absolute right-[340px] top-[100px] z-100 cursor-pointer '>
                <FaTimesCircle className='text-[50px] text-[#fff] ' />
            </div> */}
        </div>
    )
}