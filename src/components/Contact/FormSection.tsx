export default function FormSection() {
    const inputClassName =
        'text-xs font-raleway border border-bronze-500/15 bg-parchment-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:border-transparent';
    const labelClassName = 'font-medium uppercase text-xs';
    return (
        <section className="flex max-w-md flex-1 flex-col gap-6 rounded-lg bg-parchment-500/30 p-6 shadow-xl">
            <form className="flex w-full flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={labelClassName}>
                        Nombre
                    </label>
                    <input className={inputClassName} id="name" type="text" placeholder="Nombre" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClassName}>
                        Email
                    </label>
                    <input className={inputClassName} id="email" type="text" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="event-type" className={labelClassName}>
                        Tipo de evento
                    </label>
                    <select className={inputClassName} id="event-type">
                        <option value="">Seleccione un tipo de evento</option>
                        <option value="birthday">Cumpleaños</option>
                        <option value="wedding">Boda</option>
                        <option value="corporate">Corporativo</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className={labelClassName}>
                        Su mensaje
                    </label>
                    <textarea
                        className={`${inputClassName} stretch h-32 resize-none`} //hay que arreglarlo
                        id="message"
                        placeholder="Su mensaje"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-terracotta-500 w-fit self-end uppercase font-raleway font-semibold text-sm text-porcelain-500 hover:bg-transparent hover:text-terracotta-500 border-terracotta-500 py-2 px-10 rounded-lg transition-all duration-300 hover:shadow-md"
                >
                    Enviar solicitud
                </button>
            </form>
        </section>
    );
}
