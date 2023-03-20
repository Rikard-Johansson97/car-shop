"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch } from "@headlessui/react";
import { EmailData, sendEmail } from "@/lib/sendEmail";

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // validate form
    if (!firstName || !lastName || !message || !agreed) {
      // TOAST
      toast.error("Fill out all the fields please", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      return;
    }

    try {
      const emailData: EmailData = {
        firstName,
        lastName,
        message,
      };
      await sendEmail(emailData);
      // TOAST
      toast.success("🦄 Message is Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setLoading(false);
      setFirstName("");
      setLastName("");
      setMessage("");
      setAgreed(false);
      setFormError("Form submitted successfully!");
    } catch (error: any) {
      console.error("Error sending email", error);

      // TOAST
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      setFormError("Something went wrong, please try again later");
    }
  };

  return (
    <div
      key='contact'
      id='contact'
      className='isolate bg-bg-secondary py-24 px-6 sm:py-32 lg:px-8'>
      <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'></div>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Contact sales
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
        action='#'
        method='POST'
        onSubmit={handleFormSubmit}
        className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold leading-6 text-gray-900'>
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                name='message'
                id='message'
                rows={4}
                className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>
          <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}>
                <span className='sr-only'>Agree to policies</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className='text-sm leading-6 text-gray-600'>
              By selecting this, you agree to our{" "}
              <a href='#' className='font-semibold text-indigo-600'>
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Let's talk
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
