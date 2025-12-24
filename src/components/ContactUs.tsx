import React, { useState } from 'react';

type Form = {
  name: string;
  email: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [form, setForm] = useState<Form>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please complete all fields before submitting.');
      return;
    }
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section>
      <div className="card">
        <div className="h1">Contact Us</div>
        <div className="lead">Have a question or want to work together? Send a message.</div>

        <form onSubmit={submit} style={{marginTop: 10}}>
          <div className="form-row">
            <input className="input" name="name" placeholder="Your full name" value={form.name} onChange={update} />
          </div>
          <div className="form-row">
            <input className="input" name="email" placeholder="Your email" value={form.email} onChange={update} />
          </div>
          <div className="form-row">
            <textarea name="message" placeholder="Your message" value={form.message} onChange={update}></textarea>
          </div>
          <div style={{display:'flex', gap: 10, alignItems: 'center'}}>
            <button className="btn" type="submit">{sent ? 'Sent ✓' : 'Send Message'}</button>
            <div className="small">We respond within 1-2 business days.</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
