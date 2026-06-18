"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby5yknCk4uB_fDY4aghlbMekDC0JJ3IHxsx0P4uiA_KzFhsXrzJirKLU8xRk9sQL3s_iA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch (error) {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="space-y-4 rounded-2xl border border-border-subtle bg-surface p-10">
        <span className="font-mono text-micro text-accent-signal">
          ✓ Gönderildi
        </span>
        <h3 className="text-h3">24 saat içinde size ulaşacağız.</h3>
        <p className="text-body text-ink-secondary">
          Bu arada{" "}
          <a
            href="/product"
            className="underline decoration-border-subtle underline-offset-4 hover:decoration-ink-primary transition-colors"
          >
            ürün sayfasını
          </a>{" "}
          inceleyebilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border-subtle bg-surface p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Ad" name="firstName" required />
        <Field label="Soyad" name="lastName" required />
      </div>

      <Field label="İş e-postası" name="email" type="email" required />
      <Field label="Şirket" name="company" required />

      <div className="space-y-2">
        <label className="block font-mono text-micro uppercase tracking-widest text-ink-tertiary">
          ERP sistemi
        </label>
        <select
          name="erp"
          className="w-full rounded-lg border border-border-subtle bg-canvas px-4 py-3 text-body text-ink-primary outline-none transition-colors focus:border-ink-primary"
        >
          <option value="">ERP sisteminizi seçin</option>
          <option>Logo Tiger</option>
          <option>Mikro</option>
          <option>SAP Business One</option>
          <option>Diğer</option>
          <option value="none">Henüz ERP&apos;m yok</option>
        </select>
      </div>

      <Button
        size="lg"
        type="submit"
        disabled={state === "submitting"}
        className="w-full"
      >
        {state === "submitting" ? "Gönderiliyor…" : "Demo talep et"}
      </Button>

      <p className="text-center font-mono text-micro text-ink-tertiary">
        Her talebi okuyor ve 24 saat içinde yanıtlıyoruz.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block font-mono text-micro uppercase tracking-widest text-ink-tertiary"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border-subtle bg-canvas px-4 py-3 text-body text-ink-primary placeholder:text-ink-tertiary outline-none transition-colors focus:border-ink-primary"
      />
    </div>
  );
}