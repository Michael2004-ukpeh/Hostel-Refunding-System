import { useState } from "react"

import Navbar from "../components/Dashboard/Navbar"
import Statistics from "../components/Dashboard/Statistics"
import LearningMaterials from "../components/Dashboard/LearningMaterials"
import Activities from "../components/Dashboard/Activities"
import ConfirmHostelPayment from "../components/Modals/ConfirmHostelPayment"
import Refund from "../components/Modals/Refund"

export default function Dashboard(){
    const [showHostelPayment, setShowHostelPayment] = useState(false);
    const [successfulPayment, setSuccessfulPayment] = useState(false);
    const [hostelAllocationMessage, setHostelAllocationMessage] = useState(false);

    const [refundSuccess, setRefundSuccess] = useState(false);
    const [showRefundModal, setShowRefundModal] = useState(false);
    const [showRefundStatus, setShowRefundStatus] = useState(false);

    return (
        <main className="lg:flex lg:items-start">
            <Navbar />

            <div className=" w-full ">
                <section className="px-[20px] lg:px-[30px] bg-[#fff] py-[30px] w-full h-full ">
                    
                    <Statistics
                        setShowHostelPayment={setShowHostelPayment}
                        hostelAllocationMessage={hostelAllocationMessage}
                        setRefundSuccess={setRefundSuccess}
                        showRefundStatus={showRefundStatus}
                        showRefundModal={showRefundModal}
                        setShowRefundModal={setShowRefundModal}
                    />

                    <div className="flex flex-col lg:flex-row lg:gap-[30px] 2xl:gap-[50px]">
                        <LearningMaterials />
                        <Activities />
                    </div>
                </section>
            </div>

            <ConfirmHostelPayment 
                showHostelPayment={showHostelPayment} 
                setShowHostelPayment={setShowHostelPayment}
                setSuccessfulPayment={setSuccessfulPayment}
                hostelAllocationMessage={hostelAllocationMessage}
                setHostelAllocationMessage={setHostelAllocationMessage}
            />

            <Refund 
                refundSuccess={refundSuccess}
                setRefundSuccess={setRefundSuccess}
                setShowRefundModal={setShowRefundModal}
                showRefundStatus={showRefundStatus}
                setShowRefundStatus={setShowRefundStatus}
            />
        </main>
    )
}