import lightbulb from "./assets/lightbulb.svg"
import bars from "./assets/bars.svg"
import github from "./assets/github.svg"

function Header() {
    return (
        <>
            <header className="h-16 border-b-2 border-gray-300 flex items-center pl-4 pr-7 justify-between">
                <div className="flex items-center gap-2">
                    <button className="p-4 rounded-full hover:bg-slate-100">
                        <img src={bars} />
                    </button>
                    <div className="flex items-center gap-3 select-none">
                        <img src={lightbulb} />
                        <h1 className="text-xl text-gray-500">TakeNotes</h1>
                    </div>
                </div>
                <div>
                    <a href="https://github.com" target="_blank"><img src={github} /></a>
                </div>
            </header>
        </>
    )
}

export default Header;