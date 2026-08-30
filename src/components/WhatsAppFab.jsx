import { motion } from 'framer-motion';
import { whatsappLink } from '../data/content.js';

export default function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full bg-gradient-to-b from-goldlight to-gold shadow-[0_8px_24px_-8px_rgba(201,164,99,0.65)]"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7.03 3 3 7.03 3 12c0 1.77.5 3.42 1.36 4.83L3 21l4.3-1.34A8.94 8.94 0 0012 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"
          stroke="#0a0a0c"
          strokeWidth="1.4"
        />
        <path
          d="M8.5 8.7c.15-.4.5-.4.8-.4h.55c.2 0 .4.05.55.4.2.45.6 1.5.65 1.6.05.15.08.3 0 .5-.08.2-.13.3-.25.45-.13.15-.27.35-.38.47-.13.13-.27.28-.12.55.15.28.68 1.15 1.48 1.85.98.9 1.8 1.18 2.08 1.3.28.13.45.1.6-.05.18-.18.7-.8.9-1.08.2-.28.4-.23.65-.13.28.1 1.75.83 2.05 1 .3.15.5.23.57.35.08.15.08.8-.18 1.6-.25.78-1.5 1.5-2.1 1.6-.55.1-1.2.15-3.85-.85-3.25-1.23-5.3-4.6-5.47-4.85-.15-.23-1.28-1.7-1.28-3.25 0-1.55.8-2.3 1.1-2.63z"
          fill="#0a0a0c"
        />
      </svg>
    </motion.a>
  );
}
