export default function Header() {

    const title = "<title> Welcome to my portfolio </title>"
    return (
        <div>
            <h1 className="p-2 m-1 bg-black text-white text-sm sm:text-2xl font-mono">{title}</h1>
        </div>
    )
}