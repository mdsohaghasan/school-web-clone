'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">যোগাযোগ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">যোগাযোগের তথ্য</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <div>
                <h3 className="font-semibold">ঠিকানা</h3>
                <p className="text-gray-600">Rajibpur, (Near Habib Ullah&apos;s Shop), Lakshmipur Sadar, Lakshmipur 3720</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-primary text-xl mt-1" />
              <div>
                <h3 className="font-semibold">ফোন</h3>
                <p className="text-gray-600">01707-599111, 01876-672622</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-primary text-xl mt-1" />
              <div>
                <h3 className="font-semibold">ইমেইল</h3>
                <p className="text-gray-600">info@habrulummah.com, mmiangi9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">যোগাযোগ ফর্ম</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">নাম</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">ইমেইল</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">ফোন</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">বার্তা</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              পাঠান
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">আমাদের অবস্থান</h2>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d90.8271536!3d22.9464423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754d1c3f0496693%3A0xdfa9f14a8a5f0b1e!2sLakshmipur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1646300000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
} 