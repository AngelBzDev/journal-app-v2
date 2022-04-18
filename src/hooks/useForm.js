import { useState } from "react"

const useForm = (init = {}) => {
  const [formValues, setFormValues] = useState(init)

  const reset = (newFormValues = init) => {
    setFormValues(newFormValues)
  }

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value

    })
  }

  return [formValues, handleInputChange, reset]
}

export default useForm