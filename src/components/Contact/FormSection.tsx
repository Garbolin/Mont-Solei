import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    eventType: string;
    message: string;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    eventType: '',
    message: '',
};

export default function FormSection() {
    const { ref, isInView } = useInView<HTMLElement>();
    const { t } = useTranslation();

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const inputClassName =
        'text-xs font-raleway border border-bronze-500/15 bg-parchment-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:border-transparent';
    const labelClassName = 'font-medium uppercase text-xs';

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'tu-email-de-destino@ejemplo.com', // el email donde TÚ quieres recibir el mensaje
                    subject: `Nueva consulta de ${formData.name} — ${formData.eventType}`,
                    message: `
                        Nombre: ${formData.name}
                        Email: ${formData.email}
                        Tipo de evento: ${formData.eventType}
                        Mensaje: ${formData.message}
                    `,
                }),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || 'Error al enviar el mensaje');
            }

            setStatus('success');
            setFormData(initialFormData);
        } catch (error) {
            setStatus('error');
            setErrorMsg(error instanceof Error ? error.message : 'Error desconocido');
        }
    };

    return (
        <section
            className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-lg bg-parchment-500/30 p-4 shadow-xl sm:p-6 md:mx-0"
            ref={ref}
        >
            <form className={`flex w-full flex-col gap-6 ${fadeClass()}`} onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={labelClassName}>
                        {t('contact.form.name_label')}
                    </label>
                    <input
                        className={inputClassName}
                        id="name"
                        name="name"
                        type="text"
                        placeholder={t('contact.form.name_placeholder')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClassName}>
                        {t('contact.form.email_label')}
                    </label>
                    <input
                        className={inputClassName}
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t('contact.form.email_placeholder')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="eventType" className={labelClassName}>
                        {t('contact.form.eventType_label')}
                    </label>
                    <select
                        className={inputClassName}
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t('contact.form.eventType_placeholder')}</option>
                        <option value="birthday">{t('contact.form.eventType_birthday')}</option>
                        <option value="wedding">{t('contact.form.eventType_wedding')}</option>
                        <option value="corporate">{t('contact.form.eventType_corporate')}</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className={labelClassName}>
                        {t('contact.form.message_label')}
                    </label>
                    <textarea
                        className={`${inputClassName} w-full h-32 resize-none`}
                        id="message"
                        name="message"
                        placeholder={t('contact.form.message_placeholder')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {status === 'error' && <p className="text-xs text-red-600">{errorMsg}</p>}
                {status === 'success' && (
                    <p className="text-xs text-green-600">
                        {t('contact.form.success_message', '¡Mensaje enviado correctamente!')}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-terracotta-500 w-full sm:w-fit self-stretch sm:self-end uppercase font-raleway font-semibold text-sm text-porcelain-500 hover:bg-transparent hover:text-terracotta-500 border border-terracotta-500 py-2 px-10 rounded-lg transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading'
                        ? t('contact.form.submit_loading', 'Enviando...')
                        : t('contact.form.submit_button')}
                </button>
            </form>
        </section>
    );
}
