import { FC } from 'react'

interface TextAreaProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

const TextArea: FC<TextAreaProps> = ({ label, onChange, value }) => {
    return (
        <div className="relative mb-3" data-te-input-wrapper-init>
            <textarea
                onChange={onChange}
                value={value}
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-slate-100 dark:bg-slate-800 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your message"></textarea>
            <label
                htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >{label}
            </label>
        </div>
    )
}

export default TextArea