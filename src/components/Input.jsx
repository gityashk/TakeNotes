import palette from "./assets/palette.svg"
import bookmark from "./assets/bookmark.svg"
import box_archive from "./assets/box_archive.svg"

function Input(props) {

    return (
        <>

            {
                props.defaultIn ?
                    <div className="border-2 border-gray-300 rounded-lg px-5 py-3 w-[90vw] sm:w-[576px] my-8 mx-auto shadow-md">
                        <input onClick={() => props.setDefaultIn(false)} onFocus={() => props.setDefaultIn(false)} className="w-full tracking-wide focus:outline-none placeholder:text-gray-600" type="text" placeholder="Take a note..." />
                    </div>
                    :
                    <div className="border-2 border-gray-300 rounded-lg w-[90vw] sm:w-[576px] my-8 mx-auto shadow-md">

                        <div className="mx-5 my-3">
                            <textarea onChange={props.updateNote} value={props.note.title} name="title" rows={1} className="focus:outline-none text-lg placeholder:text-gray-600 w-full resize-none tracking-wide" placeholder="Title"></textarea>
                        </div>

                        <div className="mx-5 my-3">
                            <textarea onChange={props.updateNote} value={props.note.description} name="description" rows={1} autoFocus className="focus:outline-none placeholder:text-gray-600 w-full resize-none tracking-wide text-sm" placeholder="Take a note..."></textarea>
                        </div>

                        <div className="mx-5 my-3 flex items-center justify-between">

                            <div className="flex items-center gap-2">
                                <div title="Background Options"><img src={palette} /></div>
                                <button onClick={props.updateNote} name="color" value="#FFE4E1" className="h-5 w-5 rounded-full bg-[#FFE4E1] border border-slate-300 hover:border-2 hover:border-slate-400"></button>
                                <button onClick={props.updateNote} name="color" value="#D0F0C0" className="h-5 w-5 rounded-full bg-[#D0F0C0] border border-slate-300 hover:border-2 hover:border-slate-400"></button>
                                <button onClick={props.updateNote} name="color" value="#E6E6FA" className="h-5 w-5 rounded-full bg-[#E6E6FA] border border-slate-300 hover:border-2 hover:border-slate-400"></button>
                                <button onClick={props.updateNote} name="color" value="#E3DAC9" className="h-5 w-5 rounded-full bg-[#E3DAC9] border border-slate-300 hover:border-2 hover:border-slate-400"></button>
                                <button onClick={props.updateNote} name="color" value="#FFDAE9" className="h-5 w-5 rounded-full bg-[#FFDAE9] border border-slate-300 hover:border-2 hover:border-slate-400"></button>

                                {/* <button className="p-3 rounded-full hover:bg-slate-100" title="Archive"><img src={box_archive} /></button> */}
                                {/* <button className="p-3 rounded-full hover:bg-slate-100" title="Bookmark"><img src={bookmark} /></button> */}
                            </div>
                            <div>
                                <button onClick={props.discard} className="text-gray-500 hover:text-gray-600 text-sm font-medium px-3 py-1 hover:bg-slate-100 rounded-md">Discard</button>
                                <button onClick={props.saveNote} disabled={props.note.title.length === 0 && props.note.description.length === 0} className="text-gray-500 disabled:text-gray-400 hover:text-gray-600 text-sm font-medium px-3 py-1 hover:bg-slate-100 rounded-md">Save</button>
                            </div>

                        </div>

                    </div>
            }
        </>
    )
}

export default Input;