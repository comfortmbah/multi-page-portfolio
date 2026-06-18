import { useState } from "react";
import { useForm }  from "react-hook-form"

function App() {
  const [step, setStep] = useState(1);
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function nextStep() {
    const isValid = await trigger([ 'name', 'email' ]);

    if (isValid) {
      setStep(2);
    }
  }

  function prevStep() {
    setStep(1);
  }

  function onSubmit(data) {
    console.log(data);
    alert('Form submitted successfully');
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">multi-page-portfolio</h1>
    </div>
  );
}

export default App; 