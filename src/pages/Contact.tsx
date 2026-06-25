/**
 * Contact Page Component
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Heart,
  Sparkles,
  Briefcase,
  Palette,
  Code2,
} from 'lucide-react';

import Section from '../components/ui/Section';
import SEO from '../components/SEO';
import { portfolioData } from '../data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

const Contact: React.FC = () => {
  const { personalInfo, contactInfo } = portfolioData;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please add a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus('idle');
    setSubmitMessage('');

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!accessKey) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY in your .env file.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: personalInfo.name || 'Portfolio Contact Form',
          subject: `New portfolio message: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage("Message sent. I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message);
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage(
        'Something went wrong. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  const contactCards = [
    {
      label: 'Email',
      value: contactInfo.email,
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
    },
    {
      label: 'Phone',
      value: contactInfo.phone,
      icon: Phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      label: 'Location',
      value: personalInfo.location,
      icon: MapPin,
      href: null,
    },
  ];

  const openToItems = [
    {
      icon: Briefcase,
      title: 'Freelance projects',
      text: 'Clean websites and small web apps.',
    },
    {
      icon: Palette,
      title: 'UI/UX design',
      text: 'Soft, modern, user-friendly interface design.',
    },
    {
      icon: Code2,
      title: 'Frontend roles',
      text: 'React, TypeScript, responsive UI, and design-to-code work.',
    },
  ];

  const faqs = [
    {
      question: 'What can I contact you for?',
      answer:
        'You can contact me for UI/UX design, product design, frontend development, React projects, freelance work, and collaboration opportunities.',
    },
    {
      question: 'How soon do you reply?',
      answer:
        'I usually reply as soon as possible, normally within 24 hours on working days.',
    },
    {
      question: 'Are you open to freelance work?',
      answer:
        'Yes, I am open to freelance projects, especially design-focused websites & React interfaces.',
    },
    {
      question: 'Can I contact you for job opportunities?',
      answer:
        'Yes, you can reach out for junior roles, freelance work, or collaboration opportunities.',
    },
  ];

  return (
    <>
      <SEO
        title={`Contact ${personalInfo.name}`}
        description={`Contact ${personalInfo.name} for UI/UX design, web development, portfolio projects, collaborations, and job opportunities.`}
        keywords={`${personalInfo.name}, Contact, UI UX Designer, Web Developer, React Developer, Portfolio Contact`}
      />

      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* HERO */}
        <Section
          title=""
          subtitle=""
          className="bg-gradient-to-b from-[#FBF8FF] via-[#FFFDFE] to-background-light dark:from-primary-950/20 dark:via-background-dark dark:to-background-dark"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F1E9FF] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-primary-600 dark:bg-primary-900/30 dark:text-primary-200"
            >
              <Heart className="h-3.5 w-3.5" />
              Contact
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-semibold tracking-tight text-neutral-heading dark:text-white md:text-4xl"
            >
              Let’s talk about your next idea
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-body dark:text-neutral-body-dark"
            >
              Have a project, role, or collaboration in mind? Send me a message
              and I’ll get back to you soon.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {contactCards.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="rounded-[26px] border border-[#E8DCFF] bg-white px-5 py-5 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#FCFAFF] hover:shadow-md dark:border-primary-900/40 dark:bg-neutral-900">
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3ECFF] text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                      <Icon size={19} />
                    </div>
                    <p className="text-sm font-medium text-neutral-heading dark:text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words text-sm text-neutral-body dark:text-neutral-body-dark">
                      {item.value}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </motion.div>
          </motion.div>
        </Section>

        {/* FORM SECTION */}
        <Section className="bg-background-light dark:bg-background-dark">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[34px] border border-[#E8DCFF] bg-[#FFFCFF] p-6 shadow-sm dark:border-primary-900/40 dark:bg-neutral-900 md:p-8"
            >
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1E9FF] text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-neutral-heading dark:text-white">
                    Send me a message
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-body dark:text-neutral-body-dark">
                    Fill out the form and your message will be sent directly to
                    my inbox.
                  </p>
                </div>
              </div>

              {submitStatus !== 'idle' && (
                <div
                  className={`mb-5 flex items-start gap-3 rounded-2xl px-4 py-3 text-sm ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                      : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={18} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  )}
                  <span>{submitMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-neutral-heading dark:text-white"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-neutral-heading outline-none transition-all placeholder:text-neutral-body/60 focus:ring-2 dark:bg-neutral-950 dark:text-white ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-100'
                          : 'border-[#DDCFFF] focus:border-[#BFA7FF] focus:ring-[#E9DDFF]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-neutral-heading dark:text-white"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-neutral-heading outline-none transition-all placeholder:text-neutral-body/60 focus:ring-2 dark:bg-neutral-950 dark:text-white ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-100'
                          : 'border-[#DDCFFF] focus:border-[#BFA7FF] focus:ring-[#E9DDFF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-neutral-heading dark:text-white"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to talk about?"
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-neutral-heading outline-none transition-all placeholder:text-neutral-body/60 focus:ring-2 dark:bg-neutral-950 dark:text-white ${
                      errors.subject
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-[#DDCFFF] focus:border-[#BFA7FF] focus:ring-[#E9DDFF]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-heading dark:text-white"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me a little about your idea, project, or opportunity..."
                    className={`w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm text-neutral-heading outline-none transition-all placeholder:text-neutral-body/60 focus:ring-2 dark:bg-neutral-950 dark:text-white ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-[#DDCFFF] focus:border-[#BFA7FF] focus:ring-[#E9DDFF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#7C3AED] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* INFO SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="space-y-5"
            >
              <div className="rounded-[34px] border border-[#E8DCFF] bg-white p-6 shadow-sm dark:border-primary-900/40 dark:bg-neutral-900">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3ECFF] text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                    <Clock size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-heading dark:text-white">
                    Response time
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-neutral-body dark:text-neutral-body-dark">
                  I usually reply within 24 hours on working days. For anything
                  urgent, email or phone is the fastest way to reach me.
                </p>
              </div>

              <div className="rounded-[34px] border border-[#E8DCFF] bg-white p-6 shadow-sm dark:border-primary-900/40 dark:bg-neutral-900">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3ECFF] text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-heading dark:text-white">
                    Open to
                  </h3>
                </div>

                <div className="space-y-4">
                  {openToItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-3 rounded-[22px] bg-[#FBF8FF] p-4 dark:bg-neutral-950"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm dark:bg-primary-900/40 dark:text-primary-300">
                          <Icon size={17} />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-neutral-heading dark:text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-body dark:text-neutral-body-dark">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[34px] border border-[#E8DCFF] bg-[#FBF8FF] p-6 shadow-sm dark:border-primary-900/40 dark:bg-neutral-900">
                <p className="text-sm font-medium text-neutral-heading dark:text-white">
                  Prefer direct contact?
                </p>

                <p className="mt-2 text-sm leading-relaxed text-neutral-body dark:text-neutral-body-dark">
                  You can also reach me directly through email or phone using
                  the contact cards above.
                </p>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F1E9FF] px-4 py-2 text-sm font-medium text-primary-700 transition-all hover:bg-[#E8DCFF] dark:bg-primary-900/40 dark:text-primary-200"
                >
                  <Mail size={16} />
                  Email me directly
                </a>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* FAQ */}
        <Section
          title=""
          subtitle=""
          className="bg-[#FBF8FF] dark:bg-primary-900/5"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <motion.div variants={itemVariants} className="mb-8 text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-600 dark:text-primary-300">
                Quick answers
              </p>
              <h2 className="text-2xl font-semibold text-neutral-heading dark:text-white md:text-3xl">
                A few things people usually ask
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={itemVariants}
                  className="rounded-[26px] border border-[#E8DCFF] bg-white p-6 shadow-sm dark:border-primary-900/40 dark:bg-neutral-900"
                >
                  <h3 className="mb-2 text-base font-semibold text-neutral-heading dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-body dark:text-neutral-body-dark">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  );
};

export default Contact;