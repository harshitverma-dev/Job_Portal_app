import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { storeJobs } from '../context/ContextProvider'
import { allJobsDataApi, deleteSingleJobApi } from '../services/Api'
import Image from './../assets/netflixlogo.jpg'

const MultipleView = (props) => {
    const { multiViewCard, cardBgColor, fontFamily, fontNormal400, fontMedium500, headTextSize, textBase, headTextColor, paraColor, parentBgColor, cardImg, cardWidth, applyBtn, externalBtn } = props

    const [isLoading, setIsLoading] = useState(true)
    const { storeJobData, setStoreJobData } = useContext(storeJobs);

    const getAllJobs = async () => {
        const response = await allJobsDataApi();
        const data = response.data;
        return data;
    }

    useEffect(() => {
        getAllJobs().then((data) => {
            setStoreJobData(data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleDeleteJob = async (id) => {
        const deleteStatus = await deleteSingleJobApi(id);
        if (deleteStatus) {
            getAllJobs().then((data) => {
                setStoreJobData(data)
            }).catch((err) => {
                console.log(err);
            })
            toast.success('deleted successfully !')
        }
    }

    setTimeout(() => {
        setIsLoading(false);
    }, 1000)

    return (
        <>
            {
                !isLoading ? (
                    <div className={`${storeJobData?.length > 0 ? `${parentBgColor}` : ''}  flex flex-wrap justify-between p-7 spacing`}>
                        {
                            storeJobData?.map((items, index) => {
                                const { jobTitle, companyName, industry, location, remoteType, experienceMin, experienceMax, salaryMin, salaryMax, totalEmployee, applyType } = items;
                                return (
                                    <div key={index}
                                        className={`${multiViewCard} ${fontFamily} ${cardWidth} flex justify-between align-start mb-5 rounded-lg ${cardBgColor} p-6`}>
                                        <div className="flex items-start gap-4">
                                            <img
                                                alt="Developer"
                                                src={Image}
                                                className={`${cardImg}`}
                                            />
                                            <div>
                                                <h3 className={`${fontFamily} ${fontNormal400} ${headTextSize} ${headTextColor}`}>{jobTitle}</h3>
                                                <h4 className={`${fontFamily} ${fontNormal400} ${textBase} ${headTextColor}`}>{companyName} - {industry}</h4>
                                                <h5 className={`${fontFamily} ${fontNormal400}  ${textBase} grey mb-5`}>{location}, India ({remoteType}) </h5>
                                                <div className="flow-root">
                                                    <ul className="-m-1 flex flex-col">
                                                        <li className="p-1 leading-none">
                                                            <span className={`${fontFamily} ${fontNormal400}  ${textBase} ${paraColor}`}>Part-Time (9.00 am - 5.00 pm IST) </span>
                                                        </li>
                                                        <li className="p-1 leading-none">
                                                            <span className={`${fontFamily} ${fontNormal400}  ${textBase} ${paraColor}`}>Experience ({experienceMin} - {experienceMax} years)</span>
                                                        </li>
                                                        <li className="p-1 leading-none">
                                                            <span className={`${fontFamily} ${fontNormal400}  ${textBase} ${paraColor}`}>INR (₹) {salaryMin} - {salaryMax} / Month </span>
                                                        </li>
                                                        <li className="p-1 leading-none">
                                                            <span className={`${fontFamily} ${fontNormal400}  ${textBase} ${paraColor}`}>{totalEmployee} employees</span>
                                                        </li>
                                                        {
                                                            applyType === "Quick apply" ? (
                                                                <button className={`${fontFamily} ${fontMedium500}  ${textBase} ${applyBtn} text-white mt-5 rounded-md mr-2 w-20 my-1 hover:opacity-70 border transition transform duration-500 cursor-pointer`}>Apply Now</button>
                                                            ) : (
                                                                <button className={`${fontFamily} ${fontMedium500}  ${textBase} ${externalBtn} text-white mt-5 rounded-md mr-2 w-20 my-1 hover:opacity-70 border transition transform duration-500 cursor-pointer`}>External Apply</button>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleDeleteJob(items.id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7A7A7A" className="w-6 h-6 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>
                                )
                            })

                        }
                    </div>) : (<div className="flex items-center justify-center w-full mt-20" >
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-400	 border-r-transparent text-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                    </div>)
            }
        </>
    )
}

export default MultipleView;
