import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { api_email } from "@/utils/api";
import { contactImg } from "@/utils/ImgUtils";

export default function ContactUS() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "info" });

    try {
      await axios.post(api_email, formData);
      setStatus({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        message: "Error sending message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      {/* Contact Form */}
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Your Email"
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-label="Subject"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Your Message"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          {status.message && (
            <p
              className={`text-center mt-4 text-sm ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Contact Image */}
      <div className="w-full max-w-md lg:w-1/2 flex justify-center">
        <img
          src={contactImg}
          alt="Contact Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
