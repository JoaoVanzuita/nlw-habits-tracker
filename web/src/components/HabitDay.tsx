import '../styles/global.css'

interface HabitProps {
  completed?: number
}

export const HabitDay = (props: HabitProps) => {
  return (
    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
  )
}