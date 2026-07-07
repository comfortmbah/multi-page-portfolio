import { useState } from "react"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  
  return (
    <div>Contact</div>
  )
}

export default Contact