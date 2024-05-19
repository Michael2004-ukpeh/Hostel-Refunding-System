import { FaTimesCircle} from 'react-icons/fa'
import { useState } from 'react'
import { PaystackButton } from 'react-paystack';
import hostels from '../../../utils/hostel.json';


export default function ConfirmHostelPayment({ showHostelPayment, setShowHostelPayment, setHostelAllocationMessage }) {
    const publicKey = "pk_test_6247428fc2936651257b94d02a7491b2cff7018a";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [hostel, setHostel] = useState('');
    const [gender, setGender] = useState('');

    const componentProps = {
        email,
        amount: amount * 100,
        metadata: {
            name,
            phone,
            hostel
        },
        publicKey,
        text: 'Make Payment',
        onSuccess: ()=> {
            setShowHostelPayment(false);
            setHostelAllocationMessage(true);
        },
        onClose: ()=> {return null}
    }

    const studentGender = Object.keys(hostels);
    const studentHostel = gender ? hostels[gender] : [];

    return (
        <div style={{display: showHostelPayment ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)] ">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-[10px] px-[20px] pb-[20px] w-[40%] ">
                <h2 className="text-center text-[24px] mb-[10px] font-[700]">Pay for Hostel Space</h2>

                <form action="" onSubmit={(e)=> e.preventDefault()}>
                    <div className='mb-[15px] '>
                        <label htmlFor="full-name" className='mb-[10px] '>Full Name</label>
                        <input 
                            type="text" 
                            placeholder='Enter full name' 
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            className='w-full p-[10px] border-[1px] border-[#DFE5DA] rounded-[8px] outline-0 ' 
                        />
                    </div>

                    <div className='mb-[15px] '>
                        <label htmlFor="email" className='mb-[10px] '>Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter email' 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className='w-full p-[10px] border-[1px] border-[#DFE5DA] rounded-[8px] outline-0 ' 
                        />
                    </div>

                    {/* <div className='mb-[20px] '>
                        <label htmlFor="phone" className='mb-[10px] '>Phone Number</label>
                        <input 
                            type="number" 
                            placeholder='Enter phone number'
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)} 
                            className='w-full p-[10px] border-[1px] border-[#DFE5DA] rounded-[8px] outline-0 ' 
                        />
                    </div> */}

                    <div className='mb-[15px] '>
                        <label htmlFor="gender" className='mb-[10px] '>Gender</label>
                        <select value={gender} onChange={(e)=> setGender(e.target.value)} className='w-full p-[10px] border-[1px] border-[#DFE5DA] rounded-[8px] outline-0' >
                            <option value="">--</option>
                            {studentGender.map((gender, index)=> {
                                return(

                                    <option key={index} value={gender}>{gender}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className='mb-[15px] '>
                        <label htmlFor="hostel" className='mb-[10px] '>Available Hostels</label>
                        <select value={hostel} onChange={(e)=> setHostel(e.target.value)} className='w-full p-[10px] border-[1px] border-[#DFE5DA] rounded-[8px] outline-0' >
                            <option value="">--</option>
                            {studentHostel.map((hostel, index)=> {
                                return (
                                    <option key={index} value={hostel}>{hostel}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className='mb-[20px] '>
                        <label htmlFor="amount" className='mb-[10px] '>Amount</label>
                        <input 
                            type="number"
                            placeholder='Enter amount'
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)}
                            className='w-full p-[10px] border-[1px] border-[#DFE5DA] rounded-[8px] outline-0 ' 
                        />
                    </div>

                    <PaystackButton className='bg-[#101720] w-full rounded-[8px] py-[12px] px-[10px] w-[300px] text-[#fff] ' {...componentProps} />
                </form>

                {/* <div className="border-[1px] border-[#DFE5DA] rounded-[8px] ">
                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Full Name</p>
                        <p>Vincent Chosen Goteh</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Level</p>
                        <p>400</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Mat. No</p>
                        <p>U2019/5570049</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] border-b-[1px] border-b-[#DFE5DA] ">
                        <p>Department</p>
                        <p>Computer Sc.</p>
                    </div>

                    <div className="flex items-center justify-between gap-[50px] py-[20px] px-[10px] ">
                        <p>Amount</p>
                        <p>N25,000</p>
                    </div>
                </div>

                 */}
            </div>

            <div onClick={()=> setShowHostelPayment(false)} className='absolute right-[25%] top-[2%] z-100 cursor-pointer '>
                <FaTimesCircle className='text-[40px] text-[#fff] ' />
            </div>
        </div>
    )
}