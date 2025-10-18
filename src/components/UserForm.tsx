"use client"

import { useFormik } from "formik"
import * as Yup from "yup"
import emailjs from "@emailjs/browser"
import { useState } from "react"

interface UserFormProps {
  onClose: () => void
}

export default function UserForm({ onClose }: UserFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  if (typeof window !== "undefined") {
    emailjs.init("xODcGwjUxBTXKGhuX")
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      gmail: "",
      segment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
        .required("Phone is required"),
      gmail: Yup.string().email("Enter a valid email").required("Email is required"),
      segment: Yup.string().required("Segment is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      setSubmitMessage("")

      try {
        // Combine all fields except name into the message field
        const messageContent = `Phone: ${values.phone}\nEmail: ${values.gmail}\nSegment: ${values.segment}`

        const templateParams = {
          name: values.name,
          message: messageContent,
        }

        await emailjs.send("service_qnaadx9", "template_5zdb2nr", templateParams)

        setSubmitMessage("Email sent successfully!")
        console.log("Form Data:", values)

        // Close modal after successful submission
        setTimeout(() => {
          onClose()
        }, 1500)
      } catch (error) {
        console.error("Email sending failed:", error)
        setSubmitMessage("Failed to send email. Please try again.")
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none "
        />
        {formik.touched.name && formik.errors.name && (
          <p className="absolute text-red-500 text-xs -bottom-4 left-0">{formik.errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
        <input
          type="tel"
          {...formik.getFieldProps("phone")}
          className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none "
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="absolute text-red-500 text-xs -bottom-4 left-0">{formik.errors.phone}</p>
        )}
      </div>

      {/* Gmail */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
        <input
          type="email"
          {...formik.getFieldProps("gmail")}
          className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none "
        />
        {formik.touched.gmail && formik.errors.gmail && (
          <p className="absolute text-red-500 text-xs -bottom-4 left-0">{formik.errors.gmail}</p>
        )}
      </div>

      {/* Segment */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Segment</label>
        <select
          {...formik.getFieldProps("segment")}
          className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none"
        >
          <option value="">Select a segment</option>
          <option value="equity_cash">Equity / Cash</option>
          <option value="equity_intraday">Equity Intraday</option>
          <option value="index_futures">Index Futures</option>
          <option value="index_options">Index Options</option>
          <option value="stock_futures">Stock / Single Stock Futures</option>
          <option value="stock_options">Stock / Single Stock Options</option>
          <option value="currency_futures">Currency Futures</option>
          <option value="currency_options">Currency Options</option>
          <option value="commodity_futures">Commodity Futures</option>
        </select>

        {formik.touched.segment && formik.errors.segment && (
          <p className="absolute text-red-500 text-xs -bottom-4 left-0">{formik.errors.segment}</p>
        )}
      </div>

      {submitMessage && (
        <p
          className={`text-sm text-center ${
            submitMessage.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {submitMessage}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#bd3f41] text-white rounded-lg py-2 font-medium hover:bg-[#bd3f41]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  )
}
