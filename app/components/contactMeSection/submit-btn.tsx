import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:scale-100 disabled:bg-opacity-65 flex items-center justify-center"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
      ) : (
        <>Send Message</>
      )}
    </button>
  );
}
