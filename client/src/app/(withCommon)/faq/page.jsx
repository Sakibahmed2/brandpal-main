import Container from "@/components/ui/Container";
import React from "react";

const faqData = [
  {
    id: 1,
    question: "What is digital marketing?",
    answer:
      "Digital marketing refers to the use of digital channels and platforms to promote products, services, or brands to potential customers. It includes strategies like SEO, PPC, social media marketing, content marketing, and more.",
  },
  {
    id: 2,
    question: "How can digital marketing benefit my business?",
    answer:
      "Digital marketing can increase your online visibility, attract more customers, and improve brand loyalty. It allows you to reach a larger audience, measure results, and adjust strategies in real-time to achieve better ROI.",
  },
  {
    id: 3,
    question: "What services do you offer?",
    answer:
      "We offer a wide range of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and web design & development.",
  },
  {
    id: 4,
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy! Simply contact us through our website, and we'll schedule a consultation to discuss your business goals and tailor a digital marketing strategy to meet your needs.",
  },
  {
    id: 5,
    question: "How long does it take to see results from digital marketing?",
    answer:
      "The time it takes to see results can vary depending on the strategies used and your specific goals. SEO and content marketing often take longer to show results, while PPC campaigns can drive immediate traffic to your website.",
  },
  {
    id: 6,
    question: "What is SEO and why is it important?",
    answer:
      "SEO, or Search Engine Optimization, is the process of optimizing your website to rank higher in search engine results pages. It's important because it increases your visibility online, driving more organic traffic to your website.",
  },
];

const FAQPage = () => {
  return (
    <Container className="lg:pt-32 pt-20 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Most Frequent Questions
        </h2>
      </div>

      <div className="lg:flex justify-between  w-full">
        <div className="lg:w-7/12">
          <div className="join join-vertical w-full">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="collapse collapse-arrow join-item border-base-300 border"
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  defaultChecked={faq.id === 1}
                />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content light-text">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-2/5 mt-10 lg:mt-0">
          <form className="max-w-lg mx-auto p-6 bg-base-100 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Ask any question here
            </h2>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-32 w-full"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="custom-secondary-btn py-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default FAQPage;
