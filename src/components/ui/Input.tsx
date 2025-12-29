import type { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    placeholder?: string;
    handleOnChange: (value: string) => void;
}

function Input(props: InputProps) {
    const { id, label, placeholder, handleOnChange } = props;
    return (
        <div>
            <label className="block text-sm text-foreground mb-2" htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                onChange={(e) => handleOnChange(e.target.value) }
                maxLength={12}
                autoComplete="off"
                className="
                w-full px-4 py-3 rounded-xl bg-board-secondary
                border-2 border-transparent focus:border-gold text-foreground
                outline-none transition-colors"
            />
        </div>
    );
}

export default Input;