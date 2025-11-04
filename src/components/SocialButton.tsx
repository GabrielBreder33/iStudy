interface SocialButtonProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

export default function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center gap-3 px-6 py-3.5 bg-[#29292E] hover:bg-[#323238] border border-[#323238] rounded-lg text-[#E1E1E6] text-base font-medium transition-colors"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
