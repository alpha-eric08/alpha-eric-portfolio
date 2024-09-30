import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ContactLeft from './ContactLeft';
import Title from '../Title';

// Zod Schema for form validation
const contactSchema = z.object({
  username: z.string().nonempty("Username is required!"),
  phoneNumber: z.string().nonempty("Phone number is required!"),
  email: z.string().email("Please enter a valid email!").nonempty("Email is required!"),
  subject: z.string().nonempty("Please provide a subject!"),
  message: z.string().nonempty("Message is required!"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    // You can handle the form submission logic here
    console.log("Form Data:", data);

    // Display success message and reset the form
    alert(`Thank you, ${data.username}. Your message has been sent successfully!`);
    reset();
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {isSubmitSuccessful && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  Message sent successfully!
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    {...register('username')}
                    className={`contactInput ${errors.username ? 'outline-designColor' : ''}`}
                    type="text"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username.message}</p>
                  )}
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    {...register('phoneNumber')}
                    className={`contactInput ${errors.phoneNumber ? 'outline-designColor' : ''}`}
                    type="text"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  {...register('email')}
                  className={`contactInput ${errors.email ? 'outline-designColor' : ''}`}
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  {...register('subject')}
                  className={`contactInput ${errors.subject ? 'outline-designColor' : ''}`}
                  type="text"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  {...register('message')}
                  className={`contactTextArea ${errors.message ? 'outline-designColor' : ''}`}
                  cols="30"
                  rows="8"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
