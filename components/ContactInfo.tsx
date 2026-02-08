"use client";

import { useState, useMemo } from "react";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

// Email parts are split and reversed to prevent scrapers
// from extracting the full address from JS chunks.
const EMAIL_PARTS = ["mx", "kanaler", "mario"] as const;
const EMAIL_SEP = [".", "@"] as const;

function assembleEmail(): string {
  return `${EMAIL_PARTS[2]}${EMAIL_SEP[1]}${EMAIL_PARTS[1]}${EMAIL_SEP[0]}${EMAIL_PARTS[0]}`;
}

export function ContactInfo() {
  const [visible, setVisible] = useState(false);

  const email = useMemo(() => (visible ? assembleEmail() : null), [visible]);

  if (!visible) {
    return (
      <div className="flex flex-col items-center text-center gap-4">
        <ShieldCheck className="w-10 h-10 text-[#FF7F27]" />
        <p className="text-sm text-gray-300 max-w-sm">
          Para proteger nuestros datos de recopiladores automáticos, la
          información de contacto se muestra al presionar el botón.
        </p>
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="px-6 py-3 bg-[#FF7F27] text-white font-bold rounded hover:bg-[#e06b1f] transition-colors"
        >
          Mostrar información de contacto
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="flex items-start">
        <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[#FF7F27]" />
        <p>Matamoros #61-A, Col. Centro, Huauchinango, Puebla, C.P. 73170</p>
      </div>

      <div className="flex items-center">
        <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-[#FF7F27]" />
        <div>
          <p>+52 7767678672</p>
          <p>+52 8180507329</p>
          <p>+52 7766880892</p>
        </div>
      </div>

      <div className="flex items-center">
        <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-[#FF7F27]" />
        <a
          href={`mailto:${email}`}
          className="underline hover:text-[#FF7F27] transition-colors"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
