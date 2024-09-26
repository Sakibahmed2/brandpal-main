"use client";

import Container from "@/components/ui/Container";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSendMessage = async (e) => {
    const toastId = toast.loading("Sending message...");
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const res = await fetch("http://localhost:5000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (data?.success) {
        toast.success("Message sent successfully", { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="pt-20 lg:pt-32 pb-20">
      <div className="w-full lg:flex justify-between items-center gap-5">
        <div className="lg:w-1/2">
          <h3 className="text-3xl lg:text-4xl font-semibold">Get in touch</h3>
          <p className="light-text mt-4 mb-6">
            Our dedicated team is committed to providing prompt and effective
            support to ensure your needs are met. We believe in open
            communication and are always ready to listen. Reach out to us via
            phone, email, or live chat, or visit our office during business
            hours.
          </p>
          <div className="grid xl:grid-cols-2 gap-2 lg:gap-5">
            <div className="flex items-center gap-4">
              <p className="bg-orange-100 p-2 lg:p-5 rounded-full">
                <Phone />
              </p>
              <div>
                <p className="light-text">Phone Number</p>
                <p className="lg:text-xl">+447460611130</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="bg-orange-100 p-2 lg:p-5 rounded-full">
                <Mail />
              </p>
              <div>
                <p className="light-text">Email</p>
                <p className="lg:text-xl">support@devgenius.app</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="bg-orange-100 p-2 lg:p-5 rounded-full">
                <MapPin />
              </p>
              <div>
                <p className="light-text">Address</p>
                <p className="lg:text-xl">
                  182-184 High Street North, East Ham, London, United Kingdom,
                  E6 2JA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <form
            onSubmit={handleSendMessage}
            className="max-w-lg mx-auto p-6 bg-base-100 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Contact Us
            </h2>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
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
                name="email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-32 w-full"
                name="message"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="custom-secondary-btn py-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
