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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);

    setFormData({ name: "", email: "", message: "" });
  }

  
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title={'Contact Me'}
        subtitle={"Let's build something amazing together."}
      />

      {isSubmitted && (
        <p className="mb-6 text-center text-green-600 font-medium">
          Thank you! Your message has been sent.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label 
            htmlFor="name"
            className="block mb-2 font-medium"
          >
            Name
          </label>

          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-1/2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label 
            htmlFor="email"
            className="block mb-2 font-medium"
          >
            Email
          </label>

          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-1/2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label 
            htmlFor="message"
            className="mb-2 block font-medium"
          >
            Message
          </label>

          <textarea 
            name="message" 
            id="message"
            rows={'6'}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-1/2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          ></textarea>
        </div>

        <Button
          type='submit'
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Send Message
        </Button>
      </form>
    </section>
  )
}

export default Contact