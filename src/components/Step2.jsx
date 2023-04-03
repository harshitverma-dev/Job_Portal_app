import React, { useContext } from 'react'
import { handleJobData } from '../context/ContextProvider';

const Step2 = (props) => {
    const { fontMedium500, fontFamily, labelText, inputField, inputField2, cardBorder, fontNormal400, fieldsColor, radioWidth, radioHeight } = props

    const { createJobData, handleChange } = useContext(handleJobData)
    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 md:mb-0">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-city">
                        Experience
                    </label>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input className={`${fontNormal400} ${inputField2} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none`} id="grid-city" type="text" placeholder="Mininmum" onChange={handleChange} name="experienceMin" />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input className={`${fontNormal400} ${inputField2} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none" id="grid-city`} type="text" placeholder="Maximum" onChange={handleChange} name="experienceMax" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 md:mb-0">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-city">
                        Salary
                    </label>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input className={`${fontNormal400} ${inputField2} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none`} id="grid-city" type="text" onChange={handleChange} name="salaryMin" placeholder="Mininmum" />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <input className={`${fontNormal400} ${inputField2} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor} block focus:outline-none appearance-none" id="grid-city`} onChange={handleChange} type="text" name="salaryMax" placeholder="Maximum" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-1`} htmlFor="grid-last-name">
                        Total employee
                    </label>
                    <input className={`${fontNormal400} ${inputField} ${fontFamily} ${cardBorder} ${labelText} ${fieldsColor}  block focus:outline-none appearance-none" id="grid-last-name`} name="totalEmployee" onChange={handleChange} type="text" placeholder="ex. 100" />
                </div>
            </div>
            <div className='flex flex-wrap -mx-3'>
                <div className='w-full px-3 md:mb-0'>
                    <label className={`${fontMedium500} ${fontFamily} ${labelText} block font-bold mb-2`} htmlFor="grid-city">
                        Apply type
                    </label>
                    <div className="flex mb-3">
                        <div className="flex items-center mr-4">
                            <input id="inline-radio" type="radio" value="Quick apply" checked={createJobData.applyType === 'Quick apply'} name="applyType" className={`${radioWidth} ${radioHeight}`} onChange={handleChange} />
                            <label htmlFor="inline-radio" class={`${fontNormal400} ${fontFamily} ${labelText} ${fieldsColor} ml-2`}>Quick apply</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="External apply" checked={createJobData.applyType === 'External apply'} name="applyType" className={`${radioWidth} ${radioHeight}`} onChange={handleChange} />
                            <label htmlFor="inline-2-radio" className={`${fontNormal400} ${fontFamily} ${labelText} ${fieldsColor} ml-2`}>External apply</label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Step2
