import { useState } from "react"

const useForm = (init = {}) => {
  const [formValues, setFormValues] = useState(init)

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value

    })
  }

  return [formValues, handleInputChange]
}

export default useForm