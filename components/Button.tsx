export interface ButtonProps {
  children: React.ReactNode
}


export function Button({ children }: ButtonProps) {
  // todo: to use 'active' states, need to enable it in tailwind.config.ts
  // variants.extend.backgroundColor: ["active"]
  //  if you don't put it in 'extends', it will completely override the settings

  // hover:bg-[#263D5C]
  return (
    <button type="button" className="btn btn-primary more bg-[#357E9D] text-white rounded-3xl h-[48px] w-[144px] hover:bg-[#263D5C] active:shadow-[0_0_8px_#263D5C] focus:ring-2 focus:ring-offset-2 focus:ring-[#357E9D]">
      {children}
    </button>
  )
}

Button.displayName = 'Button'
