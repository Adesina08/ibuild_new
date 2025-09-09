
import { useState, useEffect, useRef } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    phoneAlt: "",
    solutionType: "All",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
      setIsSubmitting(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.firstName) e.firstName = "First name is required";
    if (!formData.lastName) e.lastName = "Last name is required";
    if (!formData.company) e.company = "Company is required";
    if (!formData.email) e.email = "Email is required";
    if (!formData.phone) e.phone = "Phone is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = evt.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Centered dialog */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demoModalTitle"
        className="relative w-full max-w-4xl rounded-2xl bg-white text-gray-900 shadow-2xl overflow-hidden"
      >
          {/* Header */}
          <div className="px-6 py-5 border-b bg-gray-50 flex items-center justify-between">
            <h3 id="demoModalTitle" className="text-lg sm:text-xl font-semibold">Send your demo request !</h3>
            <button onClick={onClose} aria-label="Close" className="text-gray-500 hover:text-gray-700">✕</button>
          </div>

          {/* Body */}
          <div className="p-6">
            {showSuccess ? (
              <div className="text-center py-16">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">✓</div>
                <h4 className="text-lg font-semibold mb-2">Thanks! We received your request.</h4>
                <p className="text-gray-600">Our team will reach out shortly to schedule your demo.</p>
                <button className="mt-8 px-4 py-2 rounded-md bg-gray-900 text-white" onClick={onClose}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">First Name *</label>
                  <input name="firstName" placeholder="Insert your first name" className={`h-11 rounded-md border px-3 ${errors.firstName ? "border-red-500" : "border-gray-300"}`} value={formData.firstName} onChange={handleChange} />
                  {errors.firstName && <span className="text-xs text-red-600">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Last Name *</label>
                  <input name="lastName" placeholder="Insert your last name" className={`h-11 rounded-md border px-3 ${errors.lastName ? "border-red-500" : "border-gray-300"}`} value={formData.lastName} onChange={handleChange} />
                  {errors.lastName && <span className="text-xs text-red-600">{errors.lastName}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Company *</label>
                  <input name="company" placeholder="Insert your company" className={`h-11 rounded-md border px-3 ${errors.company ? "border-red-500" : "border-gray-300"}`} value={formData.company} onChange={handleChange} />
                  {errors.company && <span className="text-xs text-red-600">{errors.company}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Phone *</label>
                  <input name="phone" placeholder="1 (702) 123-4567" className={`h-11 rounded-md border px-3 ${errors.phone ? "border-red-500" : "border-gray-300"}`} value={formData.phone} onChange={handleChange} />
                  {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Email *</label>
                  <input name="email" placeholder="Insert your email" className={`h-11 rounded-md border px-3 ${errors.email ? "border-red-500" : "border-gray-300"}`} value={formData.email} onChange={handleChange} />
                  {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Phone *</label>
                  <input name="phoneAlt" placeholder="Insert your number" className="h-11 rounded-md border px-3 border-gray-300" value={formData.phoneAlt} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-sm font-medium">Solution Type *</label>
                  <select name="solutionType" className="h-11 rounded-md border px-3 border-gray-300" value={formData.solutionType} onChange={handleChange}>
                    <option>All</option>
                    <option>Residential</option>
                    <option>Multi-Family</option>
                    <option>Land Development</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
                  <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300">Close</button>
                  <button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded-md bg-[#FF3B00] text-white">
                    {isSubmitting ? "Booking..." : "Book Demo"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
    </div>
  );
};
