"use client";
import React from "react";
import GithubIcon from "../../../public/assets/github-icon.svg";
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
const ContactMe = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mt-12  gap-4 relative  py-24 px-4  xl:px-16"
    >
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
          <br />
          <br />
          Please contact me directly at{" "}
          <a href="mailto:adam.elomar.98@gmail.com" className="underline">
            adam.elomar.98@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/adamelomar98">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/adam-elomar/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="">
        <form
          className="flex flex-col"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="senderEmail"
              type="email"
              id="email"
              required
              maxLength={500}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@google.com"
            />
          </div>
          {/* <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
              maxLength={500}
            />
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              placeholder="Let's talk about..."
              name="message"
              id="message"
              className="h-32 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              maxLength={5000}
            />
          </div>
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
