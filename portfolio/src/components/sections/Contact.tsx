import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { SITE } from '../../constants/content';
import { contactSchema, type ContactFormValues } from '../../utils/validation';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

// Replace with real EmailJS credentials when deploying.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('submitting');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...values },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-wrap py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something secure."
            description="Open to full-stack and front-end roles, freelance projects, or just a good technical conversation."
          />

          <div className="mt-9 space-y-5">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-[14.5px] text-secondary hover:text-primary transition-colors"
            >
              <FiMail className="text-primary" /> {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-[14.5px] text-secondary hover:text-primary transition-colors"
            >
              <FiPhone className="text-primary" /> {SITE.phone}
            </a>
            <p className="flex items-center gap-3 text-[14.5px] text-secondary">
              <FiMapPin className="text-primary" /> {SITE.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card p-7 sm:p-9">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-[13.5px] font-medium text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="mt-2 w-full rounded-lg border border-secondary/15 px-4 py-3 text-[15px] outline-none transition-colors focus:border-primary"
                  {...register('name')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-[12.5px] text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-[13.5px] font-medium text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="mt-2 w-full rounded-lg border border-secondary/15 px-4 py-3 text-[15px] outline-none transition-colors focus:border-primary"
                  {...register('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-[12.5px] text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="text-[13.5px] font-medium text-secondary">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className="mt-2 w-full rounded-lg border border-secondary/15 px-4 py-3 text-[15px] outline-none transition-colors focus:border-primary"
                {...register('subject')}
              />
              {errors.subject && (
                <p id="subject-error" role="alert" className="mt-1.5 text-[12.5px] text-red-600">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-[13.5px] font-medium text-secondary">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="mt-2 w-full resize-none rounded-lg border border-secondary/15 px-4 py-3 text-[15px] outline-none transition-colors focus:border-primary"
                {...register('message')}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1.5 text-[12.5px] text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary mt-7 w-full sm:w-auto disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
              {status !== 'submitting' && <FiSend aria-hidden />}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mt-4 flex items-center gap-2 text-[14px] font-medium text-emerald-600"
                >
                  <FiCheck /> Message sent — I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="mt-4 text-[14px] font-medium text-red-600"
                >
                  Something went wrong. Try emailing me directly instead.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
