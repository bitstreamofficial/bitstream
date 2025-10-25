"use client";

import { useState } from "react";
import UniRideHeader from "@/components/layout/uniride-header";
import UniRideFooter from "@/components/layout/uniride-footer";

export default function AccountDeletionRequestPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email) return setError("Please provide the email associated with your account.");
    if (!confirm) return setError("Please confirm that you want to delete your account.");

    setLoading(true);

    try {
      const res = await fetch("/api/projects/uniride/delete-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, userId, reason }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to submit request");

      setSuccess(data?.message || "Your request has been received.");
      setEmail("");
      setName("");
      setUserId("");
      setReason("");
      setConfirm(false);
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <UniRideHeader />

      <div className="mx-auto max-w-3xl px-6 py-24 mt-16">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-[#333333]">Account Deletion Request</h1>
          <p className="text-[#333333]/80">Submit a request to permanently delete your UniRide account. We'll verify and respond via email.</p>
        </div>

        <form onSubmit={submit} className="space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email (associated with account)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5CE65C]"
              placeholder="you@example.edu"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Full name (optional)</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5CE65C]"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">User ID / Username (optional)</label>
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5CE65C]"
                placeholder="e.g. uniride_123"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Reason for deletion (optional)</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5CE65C]"
              placeholder="Tell us why you'd like to delete your account (helps us improve)."
            />
          </div>

          <div className="flex items-start space-x-3">
            <input id="confirm" type="checkbox" checked={confirm} onChange={(e) => setConfirm(e.target.checked)} className="mt-1 h-4 w-4" />
            <label htmlFor="confirm" className="text-sm text-gray-700">
              I confirm I want to permanently delete my UniRide account. I understand this cannot be undone.
            </label>
          </div>

          {error && <div className="rounded-md border-l-4 border-red-500 bg-red-50 p-4 text-red-700">{error}</div>}
          {success && <div className="rounded-md border-l-4 border-green-500 bg-green-50 p-4 text-green-700">{success}</div>}

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center rounded-full bg-[#5CE65C] px-6 py-3 font-semibold text-[#333333] shadow hover:scale-105 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Deletion Request"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            Note: For security we may ask for additional verification before processing your request. If you have concerns, contact us at <a href="mailto:asteriskshq@gmail.com" className="text-[#1DA1F2]">asteriskshq@gmail.com</a>.
          </p>
        </div>
      </div>

      <UniRideFooter />
    </div>
  );
}
