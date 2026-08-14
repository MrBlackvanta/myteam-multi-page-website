"use client";

import { cn } from "@/lib/utils";
import { type FormEvent, useId, useState } from "react";

const REQUIRED_MESSAGE = "This field is required";
const EMAIL_MESSAGE = "Please use a valid email address";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const textFields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    autoComplete: "organization",
    required: false,
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    autoComplete: "organization-title",
    required: false,
  },
];

type Errors = Record<string, string>;

function collectErrors(form: HTMLFormElement): Errors {
  const data = new FormData(form);
  const read = (field: string) => String(data.get(field) ?? "").trim();
  const errors: Errors = {};

  if (!read("name")) errors.name = REQUIRED_MESSAGE;

  const email = read("email");
  if (!email) errors.email = REQUIRED_MESSAGE;
  else if (!EMAIL_PATTERN.test(email)) errors.email = EMAIL_MESSAGE;

  if (!read("message")) errors.message = REQUIRED_MESSAGE;

  return errors;
}

function fieldClass(invalid: boolean) {
  return cn(
    "v-focus text-body block w-full border-b bg-transparent pt-0 pr-0 pb-4 pl-3.5 text-white",
    invalid
      ? "border-light-coral placeholder:text-coral-ink"
      : "border-white placeholder:text-field-hint focus:border-rapture-blue",
  );
}

export default function ContactForm({ className }: { className?: string }) {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const fieldId = (name: string) => `${id}-${name}`;
  const errorId = (name: string) => `${id}-${name}-error`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const found = collectErrors(form);

    setErrors(found);
    setSent(false);

    const [firstInvalid] = Object.keys(found);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    form.reset();
    setSent(true);
  }

  return (
    <form
      noValidate
      aria-label="Contact us"
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
    >
      {textFields.map(({ name, label, type, autoComplete, required }) => (
        <div key={name}>
          <label htmlFor={fieldId(name)} className="sr-only">
            {label}
          </label>
          <input
            id={fieldId(name)}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={label}
            required={required}
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? errorId(name) : undefined}
            className={fieldClass(Boolean(errors[name]))}
          />
          {errors[name] && (
            <p
              id={errorId(name)}
              className="text-error text-coral-ink mt-2 pl-3.5 font-bold italic"
            >
              {errors[name]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor={fieldId("message")} className="sr-only">
          Message
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={1}
          placeholder="Message"
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId("message") : undefined}
          className={cn(fieldClass(Boolean(errors.message)), "min-h-21 resize-y")}
        />
        {errors.message && (
          <p
            id={errorId("message")}
            className="text-error text-coral-ink mt-2 pl-3.5 font-bold italic"
          >
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <button type="submit" className="v-btn v-btn-solid">
          submit
        </button>
        <p role="status" className="text-body text-rapture-blue">
          {sent ? "Thanks for getting in touch. We’ll reply shortly." : null}
        </p>
      </div>
    </form>
  );
}
