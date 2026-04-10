import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_p1opy4c";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_ep5b015";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "ROavEXGBPl2sHyvyQ";

// NOTE: 2nd arg to init is the EmailJS API origin. Do not pass BASE_URL.
emailjs.init(EMAILJS_PUBLIC_KEY);

function openMailFallback(name: string, fromEmail: string, message: string) {
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`);
  window.location.href = `mailto:nancyflora804@gmail.com?subject=${subject}&body=${body}`;
}

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Email service is not configured.");
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const details =
        err instanceof Error
          ? err.message
          : typeof err === "string"
            ? err
            : err
              ? JSON.stringify(err)
              : "";
      toast({
        title: "Could not send",
        description: details
          ? details.includes("service ID")
            ? "EmailJS service ID not found. Opening your email app as fallback."
            : `Please try again. (${details})`
          : "Please try again or email me directly.",
        variant: "destructive",
      });
      openMailFallback(form.name, form.email, form.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageTransition className="min-h-screen pt-28 section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Contact</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mb-12 leading-relaxed space-y-2"
        >
          <p>Have a project in mind or just want to say hello? Drop me a message below.</p>
          <p className="text-sm">📧 nancyflora804@gmail.com · 📍 Chittoor, Andhra Pradesh</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-secondary/50 border-border focus:border-accent"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="bg-secondary/50 border-border focus:border-accent"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              rows={6}
              required
              className="bg-secondary/50 border-border focus:border-accent"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={sending}
            className="bg-accent text-accent-foreground hover:bg-accent/80 w-full font-body"
          >
            <Send size={18} className="mr-2" /> {sending ? "Sending…" : "Send Message"}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4 text-sm">Or find me on</p>
          <SocialLinks className="justify-center" />
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;
