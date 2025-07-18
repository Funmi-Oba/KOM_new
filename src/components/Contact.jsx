"use client";
import React from "react";
import {
  Mail,
  MapPinHouse,
  Phone,
  Send,
  UserRound,
  MessageCircle,
  Captions,
} from "lucide-react";
import Training from "./Training"; // Adjust the import path as necessary

export default function Contact() {
  return (
    <section id="contact" className="py-10 scroll-mt-[65px] px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl text-gray-900 font-bold text-center mb-2">
          Contact Us
        </h3>
        <p className="text-center text-lg text-[#8f8f8f] mb-6 max-w-lg mx-auto leading-relaxed">
          Have questions or need prayer? Reach out to us and we'll get back to
          you as soon as possible.
        </p>

        
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 gap-20 items-stretch">
          {/* Column 1 - Contact info */}
          <div className="h-full">
            <div className="flex flex-col justify-between h-full bg-[#6a00a3]/10 rounded-lg shadow-md p-6">
              <div>
                <h3 className="font-bold text-[#6A00A3] mb-4 text-2xl text-center">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 mt-4">
                    <div className="p-3 bg-[#6A00A3]/10 rounded-full">
                      <MapPinHouse className="w-5 h-5 text-[#6A00A3] " />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium block">
                        Address
                      </span>
                      <p className="text-sm text-gray-700">
                        8, Salisu Street, off Gas-Line Road, Ijoko-Sango Otta,
                        Ogun State, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <div className="p-3 bg-[#6A00A3]/10 rounded-full">
                      <Phone className="w-5 h-5 text-[#6A00A3]" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium block">
                        Phone
                      </span>
                      <p className="text-sm text-gray-700">+234 903 815 0147</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <div className="p-3 bg-[#6A00A3]/10 rounded-full">
                      <Mail className="w-5 h-5 text-[#6A00A3]" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium block">
                        Email
                      </span>
                      <p className="text-sm text-gray-700">
                        kayodeolawoyeministries01@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-[#6A00A3] font-semibold text-lg mb-2 text-center">
                    Find Us on Google Maps
                  </h4>
                  <div className="w-full h-64 rounded-md overflow-hidden shadow-md border border-[#6A00A3]/30">
                    <iframe
                      src="https://www.google.com/maps?q=8+Salisu+Street,+Ijoko-Sango+Otta,+Ogun+State,+Nigeria&output=embed"
                      width="100%"
                      height="100%"
                      className="border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Contact Form */}
          <div className="bg-[#6a00a3]/10 rounded-lg shadow-md p-6 h-full">
            <h3 className="font-bold mb-4 text-2xl text-center text-[#6A00A3]">
              Send us a message
            </h3>
            <form
              action="https://formsubmit.co/1a40c1e20b05e6604dda324ecef431df"
              method="POST"
              className="flex flex-col gap-4"
              target="_blank"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out to Kayode Olawoye Ministries. We've received your message and will get back to you shortly."
              />
              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium text-sm">
                  <UserRound className="w-5 h-5 inline-block mr-2 text-[#6A00A3]" />
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  className="border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A00A3]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium text-sm">
                  <Mail className="w-5 h-5 inline-block mr-2 text-[#6A00A3]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A00A3]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium text-sm">
                  <Captions className="w-5 h-5 inline-block mr-2 text-[#6A00A3]" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A00A3]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-600 font-medium text-sm">
                  <MessageCircle className="w-5 h-5 inline-block mr-2 text-[#6A00A3]" />
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A00A3]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#6A00A3] text-white px-4 py-2 rounded-md hover:bg-[#6A00A3]/80 transition-colors w-full"
              >
                Send message
                <Send className="inline-block ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10">
          <Training />
        </div>
      </div>
    </section>
  );
}
