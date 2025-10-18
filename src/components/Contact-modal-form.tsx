"use client"

import type React from "react"

import { useState } from "react"
import { Modal, Box, TextField, Button, Typography, Alert, CircularProgress } from "@mui/material"
import emailjs from "@emailjs/browser"

interface ContactModalFormProps {
  open: boolean
  onClose: () => void
}

export default function ContactModalForm({ open, onClose }: ContactModalFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // Initialize EmailJS once
  if (typeof window !== "undefined" ) {
    emailjs.init("xODcGwjUxBTXKGhuX")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    try {
      // Combine email, phone, and message into the message field
      const combinedMessage = `Email: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`

      const templateParams = {
        name: formData.name,
        message: combinedMessage,
      }

      const response = await emailjs.send("service_qnaadx9", "template_5zdb2nr", templateParams)

      if (response.status === 200) {
        setStatus("success")
        setStatusMessage("Email sent successfully!")
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => {
          onClose()
          setStatus("idle")
        }, 2000)
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage(error instanceof Error ? error.message : "Failed to send email. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    if (!loading) {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setStatus("idle")
      onClose()
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 500,
          height: "80vh",
          overflow: "auto",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Contact Us
        </Typography>

        {status === "success" && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {statusMessage}
          </Alert>
        )}

        {status === "error" && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {statusMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
            disabled={loading}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            disabled={loading}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            margin="normal"
            disabled={loading}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            margin="normal"
            multiline
            rows={4}
            disabled={loading}
          />

          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button variant="outlined" onClick={handleClose} disabled={loading} fullWidth>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              fullWidth
              sx={{ bgcolor: "#bd3f41", "&:hover": { bgcolor: "#a03536" } }}
            >
              {loading ? <CircularProgress size={24} /> : "Send"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
