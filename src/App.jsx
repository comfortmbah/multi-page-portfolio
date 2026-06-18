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

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">multi-page-portfolio</h1>
    </div>
  );
}

export default App; 