export default function About() {
    const bracket1 = '{'
    const bracket2 = '}'
    const bracket3 = '('
    const bracket4 = ')'
    const openingTag = '<div '
    const class1 = 'className='
    const class2 = '"aboutMe" '
    const class3 = 'onClick='
    const class4 = 'showAboutMe'
    const class5 = '>'
    const closingTag = '</div>'

    function revealAbout() {
        document.querySelector('.aboutText').classList.toggle('hidden')
        document.querySelector('.aboutMe').classList.toggle('hidden')
    }

    return (
        <div>
            <div className="about p-2 m-1 bg-black font-mono text-base sm:text-xl text-white" onClick={revealAbout}>
                <p><span className="text-orange-500">About </span><span>Me</span></p>
                <div className="aboutText text-xs sm:text-base">
                    <p><span className="text-pink-500">export default </span><span className="text-sky-500">function </span><span className="text-yellow-300">About</span>() <span className="text-orange-500">{bracket1}</span></p>
                    <p className="text-white">return {bracket3} </p>
                    <p className="ml-2"><span>{openingTag}</span><span className="text-cyan-400">{class1}</span><span className="text-orange-500">{class2}</span><span className="text-cyan-400">{class3}</span>{bracket1}<span className="text-yellow-300">{class4}</span>{bracket2}{class5}</p>
                    <p><span className="ml-6 text-orange-500">About</span><span className="text-white">Me</span></p>
                    <p className="ml-2">{closingTag}</p>
                    <p className="ml-4">{bracket4}</p>
                    <p className="text-orange-500">{bracket2}</p>
                </div>
            </div>
            <div className="aboutMe hidden p-2 m-1 bg-orange-100 font-mono text-cyan-900 text-sm sm:text-base" onClick={revealAbout}>
                <p>Hi, I'm Andy, a Full Stack Developer with an interest in both front and
                    back-end development
                    and experience of working in HTML, CSS, JS, React, PHP and Laravel</p>
                <br></br>
                <p>Having recently
                    graduated from the iO Academy Software Development Bootcamp I'm looking for a dev role that will allow
                    me to build a career in software development.
                </p>
                <br></br>
                <p>I've worked on my own, pair-programmed and as a member of a Scrum team to complete projects using GitHub
                    to collaborate. I have
                    experience of coding with HTML, CSS, Tailwind, JS, React, PHP, Laravel and MySQL and examples of my coding
                    and the
                    projects I've worked on so far can be seen by clicking on the project section below.
                </p>
                <br></br>
                <p>My previous career experience means I bring additional skills to roles such as problem solving,
                    stakeholder engagement, teamworking, requirement gathering, project management, time management and strong 
                    communication skills. Having also been the 'customer' for development projects means I bring an additional, 
                    and hopefully useful, perspective to software development roles.
                </p>
                <a href="public/images/AndyBoolDevCV.pdf" target="_blank" className="font-bold hover:text-orange-500">See my CV</a>
            </div>
        </div>
    )
}