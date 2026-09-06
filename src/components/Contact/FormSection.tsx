import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function FormSection() {
    const { ref, isInView } = useInView<HTMLElement>();
    const { t } = useTranslation();

    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const inputClassName =
        'text-xs font-raleway border border-bronze-500/15 bg-parchment-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:border-transparent';
    const labelClassName = 'font-medium uppercase text-xs';

    return (
        <section
            className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-lg bg-parchment-500/30 p-4 shadow-xl sm:p-6 md:mx-0"
            ref={ref}
        >
            <form className={`flex w-full flex-col gap-6 ${fadeClass()}`}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={labelClassName}>
                        {t('contact.form.name_label')}
                    </label>
                    <input
                        className={inputClassName}
                        id="name"
                        type="text"
                        placeholder={t('contact.form.name_placeholder')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClassName}>
                        {t('contact.form.email_label')}
                    </label>
                    <input
                        className={inputClassName}
                        id="email"
                        type="text"
                        placeholder={t('contact.form.email_placeholder')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="event-type" className={labelClassName}>
                        {t('contact.form.eventType_label')}
                    </label>
                    <select className={inputClassName} id="event-type">
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
                        placeholder={t('contact.form.message_placeholder')}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-terracotta-500 w-full sm:w-fit self-stretch sm:self-end uppercase font-raleway font-semibold text-sm text-porcelain-500 hover:bg-transparent hover:text-terracotta-500 border border-terracotta-500 py-2 px-10 rounded-lg transition-all duration-300 hover:shadow-md"
                >
                    {t('contact.form.submit_button')}
                </button>
            </form>
        </section>
    );
}
