import {useState} from 'react'


/** This takes a boolean, returns toggle functionality (forwardslash star star to get this whole setup)
 * @function useToggle 
 * @param {Boolean} - starting toggle boolean
 * @returns {Boolean, Function }
 */
export const useToggle = initToggle => {
    //create the state
    const [toggle, setToggle] = useState(initToggle)  //declare empty array and assign useState() function call //initToggle is what the user gives you

    const toggler = () => {
        setToggle(!toggle) //setToggle to what the toggle was before
    }

    return {toggle, toggler}
}

/** Creates Form Functionality
 * @function userFormProperties
 * @param {Object} initInputs 
 * @param {Function} submitCallback 
 * @returns {Function, Function, Object}
 */
export const useFormProperties = (initInputs, submitCallback) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        submitCallback(inputs)
        setInputs(initInputs)  //so it clears the form
    }
    return {handleChange, handleSubmit, inputs}
}