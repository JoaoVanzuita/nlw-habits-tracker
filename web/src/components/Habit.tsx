import '../styles/global.css'

interface HabitProps {
  completed: number
}

export const Habit = (props: HabitProps) => {
  return (
    <div>{props.completed}</div>
  )
}