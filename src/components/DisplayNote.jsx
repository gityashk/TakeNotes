import pen_to_square from "./assets/pen_to_square.svg"
import trash_can from "./assets/trash_can.svg"

function DisplayNote(props) {
    return (
        <>
            <div style={{ background: props.color }} className="border rounded-lg px-5 py-3 w-[80vw] sm:w-[570px] my-4 mx-auto hover:shadow-md">
                {props.title ? <h1 className="font-serif tracking-wide font-semibold pb-2">{props.title}</h1> : null}
                {props.description ? <pre className="text-sm pb-2 font-serif tracking-wide text-wrap">{props.description}</pre> : null}
                <div className="flex gap-5 justify-end h-4">
                    <button onClick={() => props.deleteNote(props.id)}><img src={trash_can} /></button>
                    <button onClick={() => props.editNote(props.id)}><img src={pen_to_square} /></button>
                </div>
            </div>
        </>
    )
}

export default DisplayNote;