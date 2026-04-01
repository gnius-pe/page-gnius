import { FiMessageCircle } from 'react-icons/fi';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FiMessageCircle size={28} />
    </a>
  );
}