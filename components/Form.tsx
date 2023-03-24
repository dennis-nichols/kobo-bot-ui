import React, { useState, FormEvent } from "react";
import FormButton from "./FormButton";

interface Props {
  backendBaseUrl: string;
}

export default function Form({ backendBaseUrl }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const downloadData = async (
    field1: string
  ) => {
    try {
      const response = await fetch(
        `${backendBaseUrl}?field1=${field1}`
      );
      if (response.ok) {
        let data = await response.json();
        }
 
        setError(null);
      } catch {
        setError("An error occurred while processing your request.");
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const field1 = formData.get("field1") as string;
   

    setLoading(true);
    await downloadData(field1).then(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <form
        className="flex flex-col items-center justify-center max-w-4xl mt-6 sm:w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="field1"
          placeholder="field1"
          className="px-4 py-2 mt-4 text-black bg-gray-500 border-gray-700 rounded-md md:w-2/4 sm:w-full"
        />

   

        <FormButton loading={loading} />

        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
    </>
  );
}
