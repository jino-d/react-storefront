import { BiLogIn } from "react-icons/bi"

export default function Header() {
   return (
        <div className="h-[100px] bg-rose-500 shadow-lg flow-root">
            <div className="flex">
                <div className="text-xl font-bold p-7 text-white">
                    My App
                </div>
                <div className="text-xl font-bold p-7 text-white absolute right-0 flex items-center cursor-pointer hover:text-rose-200">
                    <p className="pr-2">Login</p>
                    <BiLogIn className=""/>
                </div>
            </div>
        </div>
   )
}