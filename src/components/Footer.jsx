import heart from "./assets/heart.svg"

function Footer() {
    return (
        <>
            <footer className="flex text-sm font-serif text-[#cbd5e1] justify-center mt-12 py-1 px-2 select-none">
                <p>Made with&nbsp;</p><img src={heart} /><p>&nbsp;by&nbsp;</p><a className="hover:underline hover:text-slate-400" href="https://www.linkedin.com/in/m-yashk/" target="_blank">Yash K.</a>
            </footer>
        </>
    )
}

export default Footer;