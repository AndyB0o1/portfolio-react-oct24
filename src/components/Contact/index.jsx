export default function Contact() {
    return (
        <div className="p-2 m-1 bg-black font-mono text-yellow-300">
            <span className="text-xl text-orange-500">Contact </span><span className="text-xl text-white">Me</span>
            <p><a href="mailto:andybooldev@gmail.com" className="hover:text-pink-500">Email</a>&nbsp; | &nbsp;
            <a href="tel:+447941042227" className="hover:text-pink-500">Tel</a>&nbsp; | &nbsp;
            <a href="https://www.linkedin.com/in/andy-bool-568a2622/" target="_blank" className="hover:text-pink-500">LinkedIn</a>&nbsp; | &nbsp;
            <a href="https://github.com/AndyB0o1" target="_blank" className="hover:text-pink-500">Github</a>&nbsp; | &nbsp;
            <a href="src/assets/AndyBoolDevCV.pdf" download className="hover:text-pink-500">Download my CV</a></p>
    </div>
    )
}