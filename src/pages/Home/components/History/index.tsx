import { LucideHistory } from "lucide-react";
import IconButton from "../../../../components/ui/IconButton";
import HistoryModal from "./components/HistoryModal";
import { useState } from "react";

function History() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton icon={LucideHistory} counter={6} onClick={() => setIsOpen(true)} />
            <HistoryModal open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

export default History;