function Modal ({description}){

    return (
        <div className="absolute top-0 left-0">
            <div className="relative w-fit top-0 left-0 bg-slate-200 rounded-lg border border-sky-400 text-slate-950 font-normal text-sm py-1 px-3 before:content-[''] before:w-4 before:h-4 before:bg-slate-200 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:border-b-[1px] before:border-l-[1px] before:border-sky-400 before:-rotate-45  ">
                <p>{description}</p>

            </div>
        </div>
    )
}

export default Modal