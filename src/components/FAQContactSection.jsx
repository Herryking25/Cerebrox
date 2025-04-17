import React from 'react';

// JSON data for the FAQs
const faqData = [
  { id: '01', question: 'What services does Cerebrox provide?', icon: '✖' },
  { id: '02', question: 'How can Cerebrox help my business?', icon: '+' },
  { id: '03', question: 'What industries does Cerebrox work with?', icon: '+' },
  { id: '04', question: 'How long does it take to complete a project with Cerebrox?', icon: '+' },
];

const FAQContactSection = () => {
  return (
    <div className="bg-gray-200 py-16 flex flex-col md:flex-row justify-center items-start gap-10">
      {/* FAQ Section */}
      <div className="">
        <h2 className="text-3xl font-recoletaBold mb-8">Frequently Asked Question</h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div key={faq.id} className="flex items-center border-b border-gray-300 pb-4">
              <span
                    style={{ background: 'linear-gradient(180deg, #004A9A 0%, rgba(255, 255, 255, 0) 100%)' }}
                    className="text-white font-semibold px-4 py-2 rounded mr-4"
                    >
                    {faq.id}
                </span>
              <p className="text-lg font-recoletaNormal flex-1">{faq.question}</p>
              <span className="text-orange-500 text-xl">{faq.icon}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className=" h-[470px] bg-white px-8 py-2 rounded-lg shadow-lg">
        <h2 className="text-xl text-center font-recoletaBold mb-2">Get in Touch!</h2>
        <p className="text-black text-center mb-2 font-recoletaNormal">
          (We will immediately text you the client intake form.)
        </p>

        <div className="">
          {/* Radio Buttons */}
          <div>
            <p className="mb-2 font-recoletaNormal">Are you ready for an Exceptional Digital solution?</p>
            <label className="flex items-center space-x-2 font-recoletaNormal text-[12px]">
              <input type="radio" name="ready" className="form-radio text-[#F29036]" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 font-recoletaNormal">
              <input type="radio" name="ready" className="form-radio text-[#F29036]" />
              <span>No</span>
            </label>
          </div>

          {/* Input Fields */}
          <div>
            <label className="block font-recoletaNormal">How did you hear about us?</label>
            <input
              type="text"
              className="w-full h-6 border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-recoletaNormal">First Name</label>
            <input
              type="text"
              className="w-full h-6 border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-recoletaNormal">Last Name</label>
            <input
              type="text"
              className="w-full h-6 border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-recoletaNormal">Phone</label>
            <input
              type="text"
              required
              className="w-full h-6 border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-recoletaNormal">Email</label>
            <input
              type="email"
              required
              className="w-full h-6 border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-recoletaNormal">Message</label>
            <textarea
              className="w-full h-8 border border-gray-300 rounded p-2"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
          <button
            className="w-[300px] h-[30px] bg-orange-500 text-white text-center  rounded-lg hover:bg-orange-600 transition"
            onClick={() => alert('Form submitted!')}
          >
            Submit
          </button>
          </div>
          

          {/* Checkbox */}
          <label className="flex items-center space-x-2 mt-4">
            <input type="checkbox" className="form-checkbox text-[#F29036]" />
            <span className="text-sm font-recoletaNormal text-black">
              I agree to terms & conditions provided by the company.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FAQContactSection;