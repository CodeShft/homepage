"use client";

import { Input } from "@/components/ui/input";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import { useState } from "react";

const info_ = [
  {
    icon: <FaPhoneAlt />,
    title: "Call me",
    description: "(+90 530 000 0101)",
  },
  {
    icon: <FaEnvelope />,
    title: "Mail me",
    description: "12345@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Ankara, Turkey",
  },
];

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    // Form verilerini sıfırla
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: ''
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <div className="pt-2 w-full bg-[#1d1d21]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* form */}
          <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3 bg-[#27272c] min-h-[280px]">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-700 mb-2">🧡 Do you want to adopt me?</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="bg-[#1d1d21] border-0 h-10 text-sm focus:ring-1 focus:ring-amber-700/50"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="bg-[#1d1d21] border-0 h-10 text-sm focus:ring-1 focus:ring-amber-700/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#1d1d21] border-0 h-10 text-sm focus:ring-1 focus:ring-amber-700/50"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-[#1d1d21] border-0 h-10 text-sm focus:ring-1 focus:ring-amber-700/50"
                />
              </div>

              <div className="grid gap-4">
                <button
                  type="submit"
                  className={`mt-4 h-9 w-32 rounded-md bg-amber-700 text-white text-sm font-medium hover:bg-amber-600 transition-all duration-300 hover:shadow-md ${
                    isSuccess ? 'bg-green-500 hover:bg-green-500 w-32' : ''
                  }`}
                >
                  {isSuccess ? 'Success!' : 'Send'}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowContactInfo(!showContactInfo)}
                className="mt-4 h-9 w-full rounded-md bg-[#1d1d21] text-white text-sm font-medium hover:bg-[#2d2d31] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Contact Information</span>
                <span>
                  <FiChevronDown />
                </span>
              </button>

              {showContactInfo && (
                <div className="grid gap-4 bg-[#1d1d21] p-4 rounded-lg">
                  {info_.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-amber-700 text-lg">{info.icon}</span>
                      <span>{info.title} - {info.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;