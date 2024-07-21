import heart from "./assets/heart.svg"

function Footer() {
    return (
        <>
            <footer className="flex text-sm font-serif text-[#cbd5e1] justify-center mt-12 py-1 px-2">
                <p>Made with&nbsp;</p><img src={heart} /><p>&nbsp;by Yash K.</p>
            </footer>
        </>
    )
}

export default Footer;