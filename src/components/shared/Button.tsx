import { FC } from "react"
import { IconType } from "react-icons"

const Button: FC<{ text: string}> = ({ text }) => {
  return (
    <button className="bg-[#00616C] text-white px-6 py-3 hover:shadow-lg font-medium
     rounded-full text-xl hover:scale-105 duration-300">{text}</button>
  )
}

export default Button