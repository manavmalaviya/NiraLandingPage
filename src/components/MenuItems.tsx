import Link from "next/link";

export default function MenuItems({ link, text, animation = true }: { link: string, text: string, animation?: boolean },) {
    return (
        <div className="flex flex-col group w-fit ">
            <Link onClick={(e) => e.preventDefault()} href={link} className={`text-nowrap text-gray-500 hover:text-gray-800 font-secondary text-xs group-hover:text-gray-900 transition-colors`}>
                {text.toLocaleUpperCase()}
            </Link>
            {
                animation &&
                <div className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            }
        </div>
    )
}