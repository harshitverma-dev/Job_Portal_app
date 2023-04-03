import React, { useContext } from 'react'
import { handleJobData } from '../context/ContextProvider';

const Step1 = (props) => {
    const { fontMedium500, fontFamily, labelText, inputField, inputField2, cardBorder, fontNormal400, fieldsColor } = props
    const { handleChange } = useContext(handleJobData)
    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block mb-1`} htmlFor="grid-last-name">
                        Job title
                    </label>
                    <input className={`${fontNormal400} ${inputField} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none" id="grid-last-name`} name="jobTitle" onChange={handleChange} type="text" placeholder="ex. UX UI Designer" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-last-name">
                        Company name
                    </label>
                    <input className={`${fontNormal400} ${inputField} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor}  block focus:outline-none appearance-none" id="grid-last-name`} name="companyName" onChange={handleChange} type="text" placeholder="ex. Google" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-last-name">
                        Industry
                    </label>
                    <input className={`${fontNormal400} ${inputField} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none" id="grid-last-name`} name="industry" onChange={handleChange} type="text" placeholder="ex. Information Technology" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-city">
                        Location
                    </label>
                    <input className={`${fontNormal400} ${inputField2} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none`} name="location" onChange={handleChange} id="grid-city" type="text" placeholder="ex. Chennai" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-city">
                        Remote type
                    </label>
                    <input className={`${fontNormal400} ${inputField2} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none" id="grid-city`} name="remoteType" onChange={handleChange} type="text" placeholder="ex. In-office" />
                </div>
            </div>
        </form>
    );
}

export default Step1
