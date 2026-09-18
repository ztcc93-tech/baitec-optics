"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "./Icons";

type FormState = "idle" | "sending" | "success" | "error";

export default function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");

    try {
      const response = await fetch("https://formspree.io/f/xdekoqnq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New website inquiry — Baitec Optics" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>
        <span>Email <b>*</b></span>
        <input type="email" name="email" autoComplete="email" placeholder="your@email.com" required />
      </label>
      <label>
        <span>Name <b>*</b></span>
        <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
      </label>
      <label>
        <span>Country / Region <b>*</b></span>
        <input type="text" name="country" autoComplete="country-name" placeholder="Your country or region" required />
      </label>
      <label>
        <span>Company</span>
        <input type="text" name="company" autoComplete="organization" placeholder="Company name (optional)" />
      </label>
      <label>
        <span>Inquiry <b>*</b></span>
        <textarea name="inquiry" rows={8} placeholder="Please tell us about the optical component, specifications and quantity you require." required />
      </label>
      <button className="button contact-submit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send inquiry"} <ArrowUpRight />
      </button>
      <div className="contact-form-message" aria-live="polite">
        {state === "success" && <p className="form-success">Thank you. Your inquiry has been sent successfully. We will respond within one business day.</p>}
        {state === "error" && <p className="form-error">Sorry, your inquiry could not be sent. Please try again or email sales@baitecoptics.com.</p>}
      </div>
    </form>
  );
}
