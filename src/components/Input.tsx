interface InputProps {
  id: string
  type: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
}

export default function Input({ id, type, label, value, onChange, placeholder, required }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#C4C4CC] mb-2.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3.5 bg-[#121214] border border-[#29292E] rounded-lg text-[#E1E1E6] placeholder-[#7C7C8A] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
