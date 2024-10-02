export default function Projects() {
    const bracket1 = '{'
    const bracket2 = '}'
    const bracket3 = '('
    const bracket4 = ')'
    const openingTag = '<>'
    const closingTag = '</>'
    const sqBracket1 = '['
    const sqBracket2 = ']'
    const route1 = 'Route::'
    const route2 = 'get'
    const route3 = "'/projects'"
    const route4 = ', [ProjectController::'
    const route5 = 'class'
    const route6 = "'getAllProjects'"
    const brackets = '()'
    const arrow1 = '->'
    const arrow2 = '=>'

    function showProjects() {
        document.querySelector('.projectText').classList.toggle('hidden')
        document.querySelector('.projects').classList.toggle('hidden')
    }

    return (
        <div className="m-1 bg-black">
            <div className="p-2 m-1 font-mono text-white" onClick={showProjects}>
                <div>
                    <p className="text-base sm:text-xl text-green-600">Projects</p>
                    <div className="projectText">
                        <div className="hidden sm:block">
                            <span>{route1}</span><span className="text-orange-500">get</span><span>{bracket3}</span>
                            <span className="text-green-600">{route3}</span><span>{route4}</span><span className="text-orange-500">{route5}</span>
                            <span>, </span><span className="text-green-600">{route6}</span><span>{sqBracket2}{bracket4};</span>
                        </div>
                        <div className="p-1.5 text-pink-500">
                            <p className="text-xs sm:text-base"><span>$projects</span><span className="text-white"> = </span><span>$this</span><span className="text-white">{arrow1}</span><span>project</span><span className="text-white">{arrow1}</span>
                                <span className="text-sky-500">get</span><span className="text-white">{brackets};</span></p>
                        </div>
                        <div className="p-2 font-mono text-xs sm:text-base text-green-600">
                            <p><span className="text-orange-500">return </span><span className="text-sky-500">response</span><span className="text-white">{brackets}{arrow1}</span>
                                <span className="text-sky-500">json</span><span className="text-white">{bracket3}{sqBracket1}</span></p>
                            <p><span>'message'</span><span className="text-white"> {arrow2} </span><span>'projects retrieved'</span><span className="text-white">,</span></p>
                            <p><span>'success'</span><span className="text-white"> {arrow2} </span><span className="text-orange-500">true</span><span className="text-white">,</span></p>
                            <p><span>'data'</span><span className="text-white"> {arrow2} </span><span className="text-pink-500">$projects</span></p>
                            <p className="text-white">{sqBracket2}{bracket4};</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-h-96 overflow-auto sm:max-h-none">
                <div className="projects hidden flex flex-col sm:flex-row flex-wrap justify-around mx-auto gap-2 p-2 bg-orange-100 font-mono text-cyan-900 text-sm sm:text-base">
                    <div className="mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="mb-5 font-bold">Laravel RESTful API for a book swap site</h3>
                        <div className="h-72 mb-4 content-center">
                            <img src="src/assets/laravel-book-swap.png" alt="Laravel code" className="h-72 mx-auto" />
                        </div>
                        <p className="mb-2">Using the Laravel framework, PHP and a supplied React front-end to develop a RESTful API for the back end of a book swap site.
                            I pair programmed a number of elements including appropriate unit tests, methods to view details of multiple or single books,
                            filters to select books by different criteria (eg genre) and the ability to add a review for a book. We also mob programmed an
                            admin level log-in and dashboard view.</p>
                        <a href="https://2024-may-bookswap-fe-library-rats.dev.io-academy.uk/" target="_blank" className="font-bold hover:text-orange-500">Live front-end |</a>
                        <a href="https://2024-may-bookswap-api-library-rats.dev.io-academy.uk/api/books" target="_blank" className="font-bold hover:text-orange-500"> API |</a>
                        <a href="https://github.com/iO-Academy/2024-may-sde-library-rats-book-swap-api" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                    <div className="mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="mb-5 font-bold">Using React to build an invoicing app</h3>
                        <div className="h-72 mb-4 content-center">
                            <img src="src/assets/React.png" alt="Invoicing app homepage" className="h-72 mx-auto" />
                        </div>
                        <p className="mb-2">Using React with a provided API, we developed an invoicing system to match a required spec and design. I pair programmed the homepage showing all
                            invoices and their status along with the number unpaid and the individual invoice page showing the full details of an invoice, using Tailwind for
                            the styling.</p>
                        <a href="https://2024-may-sde-invoicing-sw-flamingos.dev.io-academy.uk/" target="_blank" className="font-bold hover:text-orange-500">Live |</a>
                        <a href="https://github.com/iO-Academy/2024-may-invoicing-sw-flamingos" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                    <div className="mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="mb-5 font-bold">PHP, MySQL, Object-Oriented Programming</h3>
                        <div className="h-72 mb-4 content-center">
                            <img src="src/assets/OOP.png" alt="Music app homepage" className="h-72 mx-auto" />
                        </div>
                        <p className="mb-2">Using PHP and a supplied SQL database to develop a music app matching required spec and design. I pair programmed the homepage showing
                            three random artists and their albums, a page displaying all artists, their albums and song counts on each album and also a favourites element on the
                            homepage displaying the five most played artists. All of the above involved developing database queries and fetches along with coding the classes,
                            entities and services required to display the elements properly.</p>
                        <a href="https://2024-may-sde-music-player-uwu-shruwu.dev.io-academy.uk/artists.php" target="_blank" className="font-bold hover:text-orange-500">Live |</a>
                        <a href="https://github.com/iO-Academy/2024-may-music-player-uWu-ShruWu" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                    <div className="mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="mb-5 font-bold">A simple weather app in React</h3>
                        <div className="h-72 mb-4 content-center">
                            <img src="src/assets/weather-forecast.png" alt="Weather forecast app homepage" className="h-72 mx-auto" />
                        </div>
                        <p className="mb-2">A simple weather app in React. Developed after finishing my course using an openweathermap api, the user can search by city to see an overview of the local weather and a
                            basic 5 day forecast.</p>
                        <a href="https://forecast.2024-andyb.dev.io-academy.uk/" target="_blank" className="font-bold hover:text-orange-500">Live |</a>
                        <a href="https://github.com/AndyB0o1/weather-forecast" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}