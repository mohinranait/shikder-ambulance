"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),

  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{10,}$/.test(val), {
      message: "Please enter a valid phone number",
    }),

  from: z
    .string()
    .min(2, "From location must be at least 2 characters")
    .max(100, "From location must be less than 100 characters"),

  to: z.string().optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange", 
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setIsSubmitted(true);

      const res = await fetch(`/api/email`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resDAta = await res.json();
      if (resDAta.success) {
        toast.success("Email send successfully");
        reset();
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Watch message field for character count
  const messageValue = watch("message", "");

  return (
    <>
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-slate-600">
            We'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className={
                errors.fullName ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.fullName && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.fullName.message}
              </div>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }
              />
              {errors.email && (
                <div className="flex items-center mt-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email.message}
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder=""
                {...register("phone")}
                className={
                  errors.phone ? "border-red-500 focus:border-red-500" : ""
                }
              />
              {errors.phone && (
                <div className="flex items-center mt-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="from">
                From <span className="text-red-500">*</span>
              </Label>
              <Input
                id="from"
                placeholder="Your location"
                {...register("from")}
                className={
                  errors.from ? "border-red-500 focus:border-red-500" : ""
                }
              />
              {errors.from && (
                <div className="flex items-center mt-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.from.message}
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="to">To (Optional)</Label>
              <Input id="to" placeholder="Destination" {...register("to")} />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </Label>
              <span className="text-sm text-slate-500">
                {messageValue.length}/1000
              </span>
            </div>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell us about your travel plans..."
              {...register("message")}
              className={
                errors.message ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.message && (
              <div className="flex items-center mt-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message.message}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
