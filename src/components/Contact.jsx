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

export default function Contact() {
  return (
    <section id="contact" className="py-10 px-6 w-full bg-[#8f8f8f]/20">
      <div className="max-w-8xl mx-auto">
        <h3 className="text-2xl md:text-3xl text-gray-900 font-bold text-center mt-10 mb-2">
          Contact Us
        </h3>
        <p className="text-center text-xl text-gray-600 mb-6">
          Have questions or need prayer? Reach out to us and we'll get back to
          you as soon as possible.
        </p>

        {/* Column 1 - Contact info */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <div className="flex flex-col justify-between h-full bg-[#6a00a3]/10 rounded-lg shadow-md p-6">
              <div>
                <h3 className="font-bold text-[#6A00A3] mb-4 text-2xl text-center">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 mt-4">
                    <div className="p-3 bg-[#6A00A3]/10 rounded-full">
                      <MapPinHouse className="w-5 h-5 text-[#6A00A3]" />
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
                        info@kayodeolawoye.org
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-[#6A00A3] mb-4 text-2xl text-center">
                    Training Schedule
                  </h3>
                  <p className="text-[#6A00A3] font-medium">
                    IBARAGUN CAMPUS:
                    <span className="ml-2 text-sm block text-gray-700">
                   <span className="font-bold">Address:</span>  8, Salisu Street, off Gas-Line Road, Ijoko-Sango Otta.
                    </span>
                    <span className="ml-2 mb-2 text-sm block text-gray-700">
                    Every Monday at 9:00 AM
                    </span>
                  </p>
                  
                  <p className="text-[#6A00A3] font-medium">
                    RAFCO CAMPUS:
                    <span className="ml-2 text-sm block text-gray-700">
                    <span className="font-bold">Address:</span> 8, Salisu Street, off Gas-Line Road, Ijoko-Sango Otta.
                    </span>
                    <span className="ml-2 mb-2 text-sm block text-gray-700">
                    Every Tuesday at 9:00 AM
                    </span>
                  </p>
                  <p className="text-[#6A00A3] font-medium">
                 IJOKO CAMPUS:
                 <span className="ml-2 text-sm block text-gray-700">
                    <span className="font-bold">Address:</span> 8, Salisu Street, off Gas-Line Road, Ijoko-Sango Otta.
                    </span>
                    <span className="ml-2 text-sm block text-gray-700">
                    Every Friday at 9:00 AM
                    </span>
                  </p>
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
              <input type="hidden" name="_autoresponse" 
              value="Thank you for reaching out to Kayode Olawoye Ministries. We've received your message and will get back to you shortly." />
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

          {/* Column 3 - Optional Map or Extra Info */}
          {/* <div className="h-full">
            <div className="bg-gradient-to-tr from-[#8f8f8f]/10 to-[#6a00a3]/10 rounded-lg shadow-md p-6 h-full flex flex-col justify-center items-center">
              <h3 className="text-xl text-[#6A00A3] font-semibold mb-4 text-center">
                We're Happy to Hear From You
              </h3>
              <p className="text-center text-gray-700">
                Feel free to visit or call during our service hours. We're here
                to help and pray with you.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
