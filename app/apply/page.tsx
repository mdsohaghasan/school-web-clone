import React from 'react';
import { FaInfoCircle, FaUpload } from 'react-icons/fa';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground font-hind-siliguri">
            অনলাইন আবেদন
          </h1>
          <p className="text-xl text-muted-foreground font-hind-siliguri max-w-3xl mx-auto">
            হাবরুল উম্মাহ মডেল মাদরাসায় ভর্তির জন্য অনলাইন আবেদন করুন
          </p>
        </div>

        {/* Application Instructions */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground font-hind-siliguri text-center">
            আবেদনের নির্দেশনা
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 text-muted-foreground font-hind-siliguri">
              <div className="flex items-start space-x-3">
                <FaInfoCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <p>আবেদন করার আগে নিম্নলিখিত বিষয়গুলো নিশ্চিত করুন:</p>
              </div>
              <ul className="space-y-2 ml-9">
                <li>• সকল প্রয়োজনীয় কাগজপত্র স্ক্যান করে রাখুন</li>
                <li>• ছবি আপলোডের জন্য প্রস্তুত করুন</li>
                <li>• ইন্টারনেট সংযোগ নিশ্চিত করুন</li>
                <li>• আবেদন ফি পরিশোধের জন্য প্রস্তুত থাকুন</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-8 text-card-foreground font-hind-siliguri text-center">
              আবেদন ফর্ম
            </h2>
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground font-hind-siliguri">
                  ব্যক্তিগত তথ্য
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      নাম (বাংলায়)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="আপনার নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      নাম (ইংরেজিতে)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      জন্ম তারিখ
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      লিঙ্গ
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                      <option value="">বাছাই করুন</option>
                      <option value="male">পুরুষ</option>
                      <option value="female">নারী</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guardian Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground font-hind-siliguri">
                  অভিভাবকের তথ্য
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      অভিভাবকের নাম
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="অভিভাবকের নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      মোবাইল নম্বর
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="মোবাইল নম্বর"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                    ঠিকানা
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                    rows={3}
                    placeholder="বিস্তারিত ঠিকানা"
                  ></textarea>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground font-hind-siliguri">
                  শিক্ষাগত তথ্য
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      ভর্তি হতে চান
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-input bg-background">
                      <option value="">বাছাই করুন</option>
                      <option value="ibtidaiyah">ইবতিদাইয়্যাহ</option>
                      <option value="mutawassitah">মুতাওয়াস্সিতাহ</option>
                      <option value="alim">আলিম</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      পূর্ববর্তী শিক্ষা প্রতিষ্ঠান
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="প্রতিষ্ঠানের নাম"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground font-hind-siliguri">
                  কাগজপত্র আপলোড
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      জন্ম সনদ
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        className="hidden"
                        id="birth-certificate"
                      />
                      <label
                        htmlFor="birth-certificate"
                        className="flex items-center space-x-2 px-4 py-2 border border-dashed rounded-lg cursor-pointer hover:bg-primary/5"
                      >
                        <FaUpload className="text-primary" />
                        <span className="text-muted-foreground font-hind-siliguri">
                          ফাইল নির্বাচন করুন
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground font-hind-siliguri mb-1">
                      ছবি
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        className="hidden"
                        id="photo"
                      />
                      <label
                        htmlFor="photo"
                        className="flex items-center space-x-2 px-4 py-2 border border-dashed rounded-lg cursor-pointer hover:bg-primary/5"
                      >
                        <FaUpload className="text-primary" />
                        <span className="text-muted-foreground font-hind-siliguri">
                          ছবি আপলোড করুন
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    id="terms"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground font-hind-siliguri">
                    আমি সব তথ্য সঠিকভাবে দিয়েছি এবং ভর্তি নীতিমালা মেনে চলতে সম্মত আছি
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition duration-300"
                >
                  আবেদন জমা দিন
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 