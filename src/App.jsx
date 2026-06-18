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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        action="#"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Step {step} of 2
        </h2>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <div>
              <input 
                type="text"
                placeholder="Full Name" 
                {...register("name", {
                  required: 'Name is required',
                })}
                className={`w-full p-2 border-2 rounded-md outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 bg-red-50 border border-red-200 px-2 py-1 rounded-md">
                  {errors.name.message}
                </p>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default App; 