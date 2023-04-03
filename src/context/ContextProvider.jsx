import React, { createContext, useState } from 'react'

export const handleModal = createContext()
export const handleSteps = createContext()
export const handleJobData = createContext()
export const storeJobs = createContext()

const ContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [createJobData, setCreateJobData] = useState({
        jobTitle: "",
        companyName: "",
        industry: "",
        location: "",
        remoteType: "",
        experienceMin: "",
        experienceMax: "",
        salaryMin: "",
        salaryMax: "",
        totalEmployee: "",
        applyType: ""
    })
    const [storeJobData, setStoreJobData] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateJobData({
            ...createJobData,
            [name]: value
        })
    }

    return (
        <handleModal.Provider value={{ showModal, setShowModal }}>
            <handleSteps.Provider value={{ step, setStep }}>
                <handleJobData.Provider value={{ createJobData, setCreateJobData, handleChange }}>
                    <storeJobs.Provider value={{ storeJobData, setStoreJobData }}>
                        {children}
                    </storeJobs.Provider>
                </handleJobData.Provider>
            </handleSteps.Provider>
        </handleModal.Provider>
    )
}

export default ContextProvider
