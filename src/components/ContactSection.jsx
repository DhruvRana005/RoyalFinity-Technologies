import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-6">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-sm font-medium">
            <PhoneIcon className="w-5 h-5" />
            <span>Get In Touch</span>
          </button>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Let’s Create Something Extraordinary Together
          </h2>

          <p className="text-gray-300 max-w-xl">
            Ready to take your business to the next level with innovative digital solutions? 
            Our team is here to guide you, answer your questions, and turn your ideas into reality.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6" />
              <div>5C/15, New Industrial Township 5, Faridabad, Haryana 121001</div>
            </div>
            <div className="flex items-start gap-3">
              <EnvelopeIcon className="w-6 h-6" />
              <div>info@royalfinitytechnologies.com</div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="w-6 h-6" />
              <div>+91 92118 16999</div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="w-6 h-6" />
              <div>Mon - Sat: 10:00 AM - 7:00 PM IST</div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-xl bg-gray-800">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                className="mt-1 w-full rounded-md px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <input className="mt-1 w-full rounded-md px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email address"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input className="mt-1 w-full rounded-md px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Service Interested In</label>
              <select className="mt-1 w-full rounded-md px-3 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option>Web Development</option>
                <option>Mobile Apps</option>
                <option>Graphic & UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>Software & ERP Solution</option>
                <option>Business Automation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Project Details</label>
              <textarea rows="4" className="mt-1 w-full rounded-md px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your project requirements..."/>
            </div>

            <div className="pt-2">
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-gray-600 hover:bg-gray-700 text-white font-semibold">
                Send Message & Start Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}