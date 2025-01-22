'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers, Field } from 'formik';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    department: string;
}

const WebinarRegistration = () => {
    const router = useRouter(); // Initialize useRouter

    // handling form validation
    const validationSchema = Yup.object({
        firstName: Yup.string().trim().required('First Name is required'),
        lastName: Yup.string().trim().required('Last Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address')
            .required('Email is required'),
        company: Yup.string().trim().required('Company is required'),
        department: Yup.string().trim().required('Department is required'),
    });

    // Initial form values
    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        department: '',
    };

    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>
    ) => {
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            toast.success('Registration successful! Check your email for confirmation.');

            // optionally save it to google sheets
            await fetch('/api/add-webinar-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            resetForm();

            // Navigate to the home page after successful form submission
            router.push('/'); // This line ensures the user is redirected

        } catch (error) {
            console.log('Error submitting the form:', error);
            toast.error('An error occurred. Please try again later.');
        }
        finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <section className="h-screen flex items-center justify-center px-2">
                <div className="md:h-auto md:w-[420px]">
                    <Card className="w-full h-full p-8">
                        <CardHeader className="px-0 pt-0">
                            <CardTitle className="text-2xl font-bold text-center">
                                Register for Webinar
                            </CardTitle>
                        </CardHeader>
                        <CardDescription className="mb-2.5">
                            Fill the form below to register for our upcoming webinar.
                        </CardDescription>
                        <CardContent className="space-y-5 px-0 pb-0">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, isValid, errors, touched }) => (
                                    <Form className="space-y-2.5">
                                        <Field
                                            name="firstName"
                                            as={Input}
                                            disabled={isSubmitting}
                                            placeholder="First Name"
                                            type="text"
                                            className={errors.firstName && touched.firstName ? 'border-red-500' : ''}
                                        />
                                        {errors.firstName && touched.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}

                                        <Field
                                            name="lastName"
                                            as={Input}
                                            disabled={isSubmitting}
                                            placeholder="Last Name"
                                            type="text"
                                            className={errors.lastName && touched.lastName ? 'border-red-500' : ''}
                                        />
                                        {errors.lastName && touched.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}

                                        <Field
                                            name="email"
                                            as={Input}
                                            disabled={isSubmitting}
                                            placeholder="Email"
                                            type="email"
                                            className={errors.email && touched.email ? 'border-red-500' : ''}
                                        />
                                        {errors.email && touched.email && <div className="text-red-500 text-sm">{errors.email}</div>}

                                        <Field
                                            name="company"
                                            as={Input}
                                            disabled={isSubmitting}
                                            placeholder="Company"
                                            type="text"
                                            className={errors.company && touched.company ? 'border-red-500' : ''}
                                        />
                                        {errors.company && touched.company && <div className="text-red-500 text-sm">{errors.company}</div>}

                                        <Field
                                            name="department"
                                            as={Input}
                                            disabled={isSubmitting}
                                            placeholder="Department"
                                            type="text"
                                            className={errors.department && touched.department ? 'border-red-500' : ''}
                                        />
                                        {errors.department && touched.department && <div className="text-red-500 text-sm">{errors.department}</div>}

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting || !isValid}
                                            className="w-full"
                                            size="lg"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default WebinarRegistration;
