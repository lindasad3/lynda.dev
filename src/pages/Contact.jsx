import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Copy } from "lucide-react";
import SiteChrome from "../components/navbar";
import { Link } from "react-router-dom";
const TO = "lynda.sadoudi2@gmail.com"; // ⚠️ mets ton email ici
  
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || form.name.trim().length < 2) return "Please enter your full name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.message || form.message.trim().length < 10) return "Message should be at least 10 characters.";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) { alert(v); return; }

    const subject = form.subject || "New message from portfolio";
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Ouvre l’app mail de l’utilisateur avec le message pré-rempli
    window.location.href = mailto;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(TO);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
      prompt("Copy this email:", TO);
    }
  };

  return (<>
      <SiteChrome />
    <main className="min-h-[88vh] bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-linear-to-tr from-blue-400/25 to-purple-400/25" />
          <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl bg-linear-to-tr from-purple-400/25 to-pink-400/25" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let’s build something delightful
          </motion.h1>
          <motion.p
            className="mt-3 text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tell me about your project. I reply within 24–48h.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT: Info */}
          <motion.aside
            className="rounded-3xl border border-gray-200 bg-white/60 backdrop-blur-xl p-6 shadow-xl"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-lg font-semibold">Contact info</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${TO}`} className="text-gray-600 hover:underline">{TO}</a>
                    <button
                      onClick={copyEmail}
                      className="text-xs rounded-lg px-2 py-1 border hover:bg-gray-50"
                      type="button"
                      title="Copy email"
                    >
                      <div className="flex items-center gap-1">
                        <Copy className="h-3.5 w-3.5" />
                        {copied ? "Copied" : "Copy"}
                      </div>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+33XXXXXXXXX" className="text-gray-600 hover:underline">+33 XX XX XX XX</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <div className="font-medium">Location</div>
                  <p className="text-gray-600">Paris, France — remote friendly</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-blue-600" />
                <div>
                  <div className="font-medium">Availability</div>
                  <p className="text-gray-600">Full-time, freelance, collabs</p>
                </div>
              </li>
            </ul>
          </motion.aside>

          {/* RIGHT: Form -> mailto */}
          <motion.section
            className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-6 shadow-xl"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Header gradient border */}
            <div className="rounded-2xl p-[2px] bg-linear-to-r from-blue-600 to-purple-600">
              <div className="rounded-2xl bg-white p-4">
                <h3 className="font-semibold">Send me a message</h3>
                <p className="text-gray-600 text-sm">Your email app will open with your message pre-filled.</p>
              </div>
            </div>

            <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Project idea, freelance mission, collab…"
              />

              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={6}
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your goals, scope, budget range, and timeline…"
                required
              />

              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl px-5 py-3 border bg-linear-to-r from-blue-600 to-purple-600 text-white hover:opacity-95"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Send message
                <Send className="h-5 w-5 ml-2" />
              </motion.button>

              {/* Lien direct si besoin */}
              <div className="text-center">
                <a className="text-sm text-gray-600 hover:underline" href={`mailto:${TO}`}>
                  or email me directly
                </a>
              </div>
            </form>
          </motion.section>
        </div>
      </section>
    </main>
</> );
}

function Field({ label, name, as = "input", className = "", ...props }) {
  const Comp = as;
  return (
    <label className="block">
      <span className="block text-sm text-gray-700 mb-1">{label}</span>
      <Comp
        name={name}
        className={
          "w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 " +
          className
        }
        {...props}
      />
    </label>
  );
}
