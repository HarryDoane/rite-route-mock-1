'use client';

/**
 * Demo form shell. The static site marked these `data-demo`: forms are
 * mockups until wired to a backend (see README). Same deal here — native
 * validation runs, then submit shows the success line instead of posting.
 * Fields are server-rendered children; only the submit state is client.
 */

import { useState, type FormEvent, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  submitLabel: string;
  successMessage: string;
};

export default function DemoForm({ children, submitLabel, successMessage }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setSent(true);
  }

  return (
    <form className="pg-form" noValidate onSubmit={onSubmit}>
      <div className="pg-form__grid">
        {children}
        <div className="full">
          <button className="pg-btn" type="submit">{submitLabel}</button>
          {sent && <p className="pg-form__success" role="status">{successMessage}</p>}
        </div>
      </div>
    </form>
  );
}
