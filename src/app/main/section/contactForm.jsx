"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../../translate/LanguageContext'; // Importa el contexto de lenguaje
import translations from '../../translate/translations'; // Asegúrate de importar las traducciones

const ContactForms = () => { 
  const { language } = useLanguage(); // Usa el hook para obtener el idioma del contexto
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(translations[language].contact.toastError);
      return;
    }

    setIsSubmitting(true); // Cambia el estado a enviando

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || translations[language].contact.toastSuccess);
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
      } else {
        toast.error(`Error: ${result.error || translations[language].contact.toastErrorSending}`);
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      toast.error(translations[language].contact.toastErrorSending);
    } finally {
      setIsSubmitting(false); // Cambia el estado a no enviando
    }
  };

  return (
    <section id="contacto" className="p-9 mt-9 bg-black-900 rounded-lg shadow-lg">
      <ToastContainer position="top-right" autoClose={5000} />
      <h2 className="text-5xl font-bold mb-20 text-center text-blue-400">{translations[language].contact.title}</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-300" htmlFor="name">
            {translations[language].contact.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm text-white bg-gray-700 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-3"
            required
            placeholder={translations[language].contact.placeholderName}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-300" htmlFor="email">
            {translations[language].contact.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm text-white bg-gray-700 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-3"
            required
            placeholder={translations[language].contact.placeholderEmail}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-300" htmlFor="message">
            {translations[language].contact.messageLabel}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 block w-full border border-gray-600 rounded-md shadow-sm text-white bg-gray-700 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-3"
            rows="6"
            required
            placeholder={translations[language].contact.placeholderMessage}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 active:scale-95 shadow-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? translations[language].contact.buttonSubmitting : translations[language].contact.buttonSend}
        </button>
      </form>
    </section>
  );
};

export default ContactForms;
