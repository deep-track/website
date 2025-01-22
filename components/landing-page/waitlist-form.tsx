'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function WaitlistForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().trim().required('Name is required'),
    phoneNumber: Yup.string()
      .matches(
        /^\+\d{10,15}$/,
        'Phone number must start with +(country code) and include 10-15 digits e.g +2541234567890'
      )
      .required('Phone number is required'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@(?!gmail|yahoo|outlook)([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        'Please use a company email address (gmail, yahoo, and outlook are not allowed)'
      )
      .required('Email is required'),
      
    company: Yup.string().trim().required('Company is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string()
      .matches(
        /^([0-1]\d|2[0-3]):([0-5]\d)$/,
        'Time must be in 24-hour format (HH:MM)'
      )
      .required('Time is required'),
  })

  // Initial form values
  const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    company: '',
    date: '',
    time: '',
  }

  // Form submission handler
  const handleSubmit = async (
    values: {
      name: string
      phoneNumber: string
      email: string
      company: string
      date: string
      time: string
    },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await fetch('/api/add-to-google-sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      toast.success('You\'ve successfully booked a demo')
      resetForm()
    } catch (error) {
      console.error(error)
      toast.error('Error adding to Waitlist')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="flex flex-col space-y-4">
          {/* Name Field */}
          <div>
            <Field
              type="text"
              name="name"
              as={Input}
              className="text-black"
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <Field
              type="text"
              name="phoneNumber"
              as={Input}
              className="text-black"
              placeholder="Enter your phone number"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email Field */}
          <div>
            <Field
              type="email"
              name="email"
              as={Input}
              className="text-black"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Company Field */}
          <div>
            <Field
              type="text"
              name="company"
              as={Input}
              className="text-black"
              placeholder="Enter your company"
            />
            <ErrorMessage
              name="company"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Date Field */}
          <div>
            <Field
              type="date"
              name="date"
              as={Input}
              className="text-black"
            />
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Time Field */}
          <div>
            <Field
              type="time"
              name="time"
              as={Input}
              className="text-black"
            />
            <ErrorMessage
              name="time"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="border p-2 rounded-md"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
