import { useState, useEffect } from "react"

import Navbar from "../components/Dashboard/Navbar"
import Statistics from "../components/Dashboard/Statistics"
import LearningMaterials from "../components/Dashboard/LearningMaterials"
import Activities from "../components/Dashboard/Activities"
import ConfirmHostelPayment from "../components/Modals/ConfirmHostelPayment"
import Refund from "../components/Modals/Refund"

import { auth, colRef, db} from "../firebase/firebase"
import { doc, getDoc, getDocs, where, query } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

export default function Dashboard(){
    const [showHostelPayment, setShowHostelPayment] = useState(false);
    const [successfulPayment, setSuccessfulPayment] = useState(false);
    const [hostelAllocationMessage, setHostelAllocationMessage] = useState(false);

    const [refundSuccess, setRefundSuccess] = useState(false);
    const [showRefundModal, setShowRefundModal] = useState(false);
    const [showRefundStatus, setShowRefundStatus] = useState(false);

    const [studentData, setStudentData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
              setIsLoading(true);
              const userEmail = user.email;
          
              const q = query(colRef, where("email", "==", userEmail)); // Filter by email
          
              try {
                const querySnapshot = await getDocs(q); 
                if (querySnapshot.size > 0) { 
                  const docRef = querySnapshot.docs[0].ref; 
                  const docSnapshot = await getDoc(docRef); 

                  if (docSnapshot.exists()) {
                    setStudentData(docSnapshot.data());
                  } else {
                    console.log("User with email not found:", userEmail);
                    setStudentData({})
                  }
                } else {
                  console.log("No documents found in the query");
                  setStudentData(null)
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
              } finally {
                setIsLoading(false);
              }
            }
          });
    
        return unsubscribe; // Cleanup function to prevent memory leaks
      }, []);

    return (
        <main className="lg:flex lg:items-start">
            <Navbar studentData={studentData} />

            {isLoading  ? (<div className="flex justify-center item-center text-[30px] ">Loading...</div>)
            
            :

            (
                <>
                <div className=" w-full ">
                
                    <section className="px-[20px] lg:px-[30px] bg-[#fff] py-[30px] w-full h-full ">
                        
                        <Statistics
                            setShowHostelPayment={setShowHostelPayment}
                            hostelAllocationMessage={hostelAllocationMessage}
                            setRefundSuccess={setRefundSuccess}
                            showRefundStatus={showRefundStatus}
                            showRefundModal={showRefundModal}
                            setShowRefundModal={setShowRefundModal}
                            studentData={studentData}
                        />
    
                        <div className="flex flex-col lg:flex-row lg:gap-[30px] 2xl:gap-[50px]">
                            <LearningMaterials />
                            <Activities studentData={studentData} />
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
                    setHostelAllocationMessage={setHostelAllocationMessage}
                />
                </>
            )
        }

        </main>
    )
}