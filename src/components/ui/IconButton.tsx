import type { HTMLProps } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonIconProps extends HTMLProps<HTMLButtonElement> {
    icon: LucideIcon;
    counter?: number;
    onClick?: () => void;
}

function IconButton({icon: Icon, onClick, counter}: ButtonIconProps) {
    const hasCounter = (counter && counter > 0);
    return (
        <button
            className={`p-2 rounded-lg bg-secondary cursor-pointer
            text-muted hover:text-muted/70
            bg-green ${hasCounter ? 'relative' : ''}`}
            onClick={onClick}
        >
            <Icon size={24} />

            {hasCounter ?
                <span
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gold/80
                    text-xs rounded-full font-bold flex items-center justify-center"
                >{counter}</span>
                : ''}
        </button>
    );
}

export default IconButton;