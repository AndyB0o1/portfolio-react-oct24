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
                    <p className="pb-1 text-base sm:text-xl text-green-600">Projects</p>
                    <div className="projectText">
                        <div className="pb-1 text-xs sm:text-base">
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
                    <div className="md:mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="md:mb-5 font-bold">My Bird List app</h3>
                        <div className="md:mb-4 p-1 md:p-0 content-center">
                            <img src="/BirdApp.png" alt="My Bird List Homepage" className="sm:h-60 md:h-72 object-contain mx-auto" />
                        </div>
                        <p className="mb-2">A work in progress... Since a very young age, I have been an avid birdwatcher and I have kept track of the separate species I've seen in the back of a birdwatching guide I had.
                            My sister 'borrowed' that a while ago so it's anyone's guess as to where it is now.... I therefore decided to use my newfound coding skills to write an app to keep track of my list.
                            My Bird List is an app that allows birdwatchers to store a list of the birds they've seen along with an image and location of the sighting.
                            Built with a Laravel back-end and React front-end, functionality so far includes registering as a user, adding a bird sighting, accessing your list and seeing the sightings on a React
                            Leaflet map. It's not yet deployed live as my next steps are to add user authentication and log in, edit your list and individual sightings
                            and write the unit tests for the back-end. You can see the latest code on GitHub via the links below.
                        </p>
                        <a href="https://github.com/AndyB0o1/bird-list-app-fe" target="_blank" className="font-bold hover:text-orange-500">Front-end on GitHub |</a>
                        <a href="https://github.com/AndyB0o1/bird-list-app-api" target="_blank" className="font-bold hover:text-orange-500"> Back-end on GitHub</a>
                    </div>
                    <div className="md:mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="md:mb-5 font-bold">Laravel RESTful API back-end</h3>
                        <div className="md:mb-4 p-1 md:p-0 content-center">
                            <img src="/laravel-book-swap.png" alt="Laravel code" className="sm:h-60 md:h-72 object-contain mx-auto" />
                        </div>
                        <p className="mb-2">Using the Laravel framework, PHP and a supplied React front-end to develop a RESTful API for the back end of a book swap site.
                            I pair programmed a number of elements including appropriate unit tests, methods to view details of multiple or single books,
                            filters to select books by different criteria (eg genre) and the ability to add a review for a book. We also mob programmed an
                            admin level log-in and dashboard view.</p>
                        <a href="https://2024-may-bookswap-fe-library-rats.dev.io-academy.uk/" target="_blank" className="font-bold hover:text-orange-500">Live front-end |</a>
                        <a href="https://2024-may-bookswap-api-library-rats.dev.io-academy.uk/api/books" target="_blank" className="font-bold hover:text-orange-500"> API |</a>
                        <a href="https://github.com/iO-Academy/2024-may-sde-library-rats-book-swap-api" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                    <div className="md:mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="md:mb-5 font-bold">Using React to build an invoicing app</h3>
                        <div className="md:mb-4 p-1 md:p-0 content-center">
                            <img src="/React.png" alt="Invoicing app homepage" className="sm:h-60 md:h-72 object-contain mx-auto" />
                        </div>
                        <p className="mb-2">Using React with a provided API, we developed an invoicing system to match a required spec and design. I pair programmed the homepage showing all
                            invoices and their status along with the number unpaid and the individual invoice page showing the full details of an invoice, using Tailwind for
                            the styling.</p>
                        <a href="https://2024-may-sde-invoicing-sw-flamingos.dev.io-academy.uk/" target="_blank" className="font-bold hover:text-orange-500">Live |</a>
                        <a href="https://github.com/iO-Academy/2024-may-invoicing-sw-flamingos" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                    <div className="md:mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="md:mb-5 font-bold">PHP, MySQL, OOP</h3>
                        <div className="md:mb-4 p-1 md:p-0 content-center">
                            <img src="/OOP.png" alt="Music app homepage" className="sm:h-60 md:h-72 object-contain mx-auto" />
                        </div>
                        <p className="mb-2">Using PHP and a supplied SQL database to develop a music app matching required spec and design. I pair programmed the homepage showing
                            three random artists and their albums, a page displaying all artists, their albums and song counts on each album and also a favourites element on the
                            homepage displaying the five most played artists. All of the above involved developing database queries and fetches along with coding the classes,
                            entities and services required to display the elements properly.</p>
                        <a href="https://2024-may-sde-music-player-uwu-shruwu.dev.io-academy.uk/artists.php" target="_blank" className="font-bold hover:text-orange-500">Live |</a>
                        <a href="https://github.com/iO-Academy/2024-may-music-player-uWu-ShruWu" target="_blank" className="font-bold hover:text-orange-500"> GitHub</a>
                    </div>
                    <div className="md:mb-2 p-2 border-b border-cyan-900 basis-2/5 font-mono">
                        <h3 className="md:mb-5 font-bold">A simple weather app in React</h3>
                        <div className="md:mb-4 p-1 md:p-0 content-center">
                            <img src="/weather-forecast.png" alt="Weather forecast app homepage" className="sm:h-60 md:h-72 object-contain mx-auto" />
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