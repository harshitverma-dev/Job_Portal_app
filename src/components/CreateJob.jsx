import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { handleJobData, handleModal, handleSteps, storeJobs } from "../context/ContextProvider";
import { saveJobsApi } from "../services/Api";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default function CreateJob(props) {
    const { cardBgColor, CardStyle, cardBorder, bgColorCommon, CustomOpacity, fontNormal400, fontMedium500, fontFamily, textStyle, textBase, labelText, inputField, inputField2, fieldsColor, createBtn, shadowSm, radioWidth, radioHeight } = props

    const { step, setStep } = useContext(handleSteps);
    const { showModal, setShowModal } = useContext(handleModal);
    const { createJobData, setCreateJobData } = useContext(handleJobData);

    const handleNext = () => {
        const { jobTitle, companyName, industry, location, remoteType } = createJobData
        if (!jobTitle) {
            toast.error('Job Title is required !');
        } else if (!companyName) {
            toast.error('Company Name is required !');
        } else if (!industry) {
            toast.error('industry is required !');
        } else if (!location) {
            toast.error('location is required !');
        } else if (!remoteType) {
            toast.error('remote Type is required !');
        } else {
            setStep(step + 1);
        };
    }

    const handleSumit = async () => {
        const { experienceMin, experienceMax, salaryMin, salaryMax, totalEmployee, applyType } = createJobData
        if (!experienceMin) {
            toast.error('Min experience is required !');
        } else if (!experienceMax) {
            toast.error('Max experience is required !');
        } else if (!salaryMin) {
            toast.error('Min salary is required !');
        } else if (!salaryMax) {
            toast.error('Max salary is required !');
        } else if (!totalEmployee) {
            toast.error('total employee is required !');
        } else if (!applyType) {
            toast.error('apply type is required !');
        } else {
            const response = await saveJobsApi(createJobData)
            if (response.data) {
                console.log(response.data)
                toast.success('successfully job created !')
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000)

            } else {
                toast.error('something went wrong!')
            }
        };
    };

    return (
        <>
            <button
                className={`bg-sky-600 text-white ${fontMedium500} ${textBase} ${textBase} ${fontFamily} ${shadowSm} px-6 py-3 rounded shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none ml-6 mt-3 mr-1 mb-3 ease-linear transition-all duration-150"
                type="button`}
                onClick={() => setShowModal(true)}
            >
                Create a Job
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className={`${CardStyle} flex items-center justify-center h-screen`}>
                            <div className={`${cardBgColor} ${cardBorder} p-6 rounded-lg w-full lg:max-w-xl`}>
                                <div className="flex justify-between items-center">
                                    <h2 className={`${textStyle} ${fontNormal400} ${fontFamily} mb-6`}>Create a job</h2>
                                    <h3 className={`${textBase} ${fontMedium500} ${fontFamily} mb-6`}>Step {step}</h3>
                                </div>
                                {step === 1 ? <Step1
                                    fontMedium500={fontMedium500}
                                    fontFamily={fontFamily}
                                    labelText={labelText}
                                    inputField={inputField}
                                    inputField2={inputField2}
                                    cardBorder={cardBorder}
                                    fontNormal400={fontNormal400}
                                    fieldsColor={fieldsColor}
                                /> : <Step2
                                    fontMedium500={fontMedium500}
                                    fontFamily={fontFamily}
                                    labelText={labelText}
                                    inputField={inputField}
                                    inputField2={inputField2}
                                    cardBorder={cardBorder}
                                    fontNormal400={fontNormal400}
                                    fieldsColor={fieldsColor}
                                    radioWidth={radioWidth}
                                    radioHeight={radioHeight}
                                />}
                                <div className="flex justify-end mt-20">
                                    {step > 1 && (
                                        <button
                                            className={`${createBtn} ${shadowSm} ${fontFamily} ${fontMedium500} ${textBase} text-white rounded-md hover:bg-blue-600`}
                                            onClick={handleSumit}
                                        >
                                            Save
                                        </button>
                                    )}
                                    {step < 2 && (
                                        <button
                                            className={`${createBtn} ${shadowSm} ${fontFamily} ${fontMedium500} ${textBase} rounded-md text-white hover:bg-blue-600`}
                                            onClick={handleNext}
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${CustomOpacity} fixed inset-0 z-40 ${bgColorCommon}`}></div>
                </>
            ) : null}
            <ToastContainer
                position="top-center"
            />
        </>
    );
}