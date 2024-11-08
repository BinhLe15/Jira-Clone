import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

interface PhoneInputCustomProps {
    value?: string;
    country?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
}

export const PhoneInputCustom = ({ country, onChange, onBlur }: PhoneInputCustomProps) => {
    return <PhoneInput
        onChange={onChange}
        onBlur={onBlur}
        country={country}
        inputClass="!flex !h-12 !w-full !rounded-md !border !border-input !bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        buttonClass="!border !border-input !rounded-l-md !py-2"
    />
}
