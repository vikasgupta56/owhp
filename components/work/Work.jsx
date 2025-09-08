import React from 'react'
import Image from 'next/image'

const Work = ({ open }) => {

    const works = [
        {
            name: "Mama Mia",
            type: "Advertising Spot",
            director: "Shatish Kaushik",
            production: "CHITRAYUG PRODUCTIONS (India)",
            place: "Mykonos",
        },
        {
            name: "Engeyum Khaandal",
            type: "Feature Film",
            director: "Prabhu Deva Sundaram",
            production: "S.K. FILMS ENTERPRISES (India)",
            starring: " Jaham Ravi, Hansika Motwani",
            place: "Santorini",
        },
        {
            name: "Wanted",
            type: "Feature Film",
            director: "Prabhu Deva Sundaram",
            production: "S.K. FILMS ENTERPRISES (India)",
            starring: "Salman Khan, Aisha Takia",
            place: "Santorini, Rhodes, Paros",
        },
        {
            name: "Jodi Breakers",
            type: "Feature Film",
            director: "Ashwini Chaudhary",
            production: "PRASAR VISIONS (India)",
            starring: "R Madhavan, Bipasha Basu, Dipannita Sharma, Mrinalini Sharma, Milind Soman",
            place: "Mykonos, Tinos, Athens",
        },
        {
            name: "Dhoti",
            type: "Commercial Film",
            director: "Shatish Kaushik",
            production: "AC FILMS (India)",
            place: "Santorini",
        },
        {
            name: "Voice",
            type: "Apple software development resear",
            supervisors: "Chaitanya Modha, Prashant Kriplani",
            production: "M-Idea (India)",
            place: "Athens",
        }, {
            name: "For the first time",
            type: "Feature Film",
            director: "Joyce E. Bernal",
            production: "ABS-CBN FILM PRODUCTIONS (Philippines)",
            starring: "Richard Gutierrez, KC Concepcion",
            place: "Santorini",
        },
        {
            name: "The Next Nostradamus",
            type: "Documentary for History Channel",
            director: "Ashwini Chaudhary",
            production: "MOD PRODUCTIONS (USA)",
            place: "Dolphi",
        },
    ]
    return (
        <div className={`work-main ${open?'work-down':null}`}>
            <div className="gap2"></div>
            <div className={`work-wrapper ${open?'work-open':null}`}>
          <h1>Our Work</h1>
                {
                    works.map((work, i) => {
                        return (
                            <div className="work-cont" key={i}>
                                <h2>{work.name}</h2>
                                <h3>{work.type}</h3>
                                {work.starring && <h3>Starring: {work.starring}</h3>}
                                {work.director && <h3>Directed by {work.director}</h3>}
                                {work.supervisors && <h3>Project supervisors: {work.supervisors}</h3>}
                                <h3>Production: {work.production}</h3>
                                <h3>Filmed at {work.place}</h3>
                            </div>
                        )
                    })
                }

            </div>
            <div className="work-back">
                <div className="dabba-wrapper">
                    <div className={`dabba-in ${open ? 'dabba-anime' : null}`}>
                        <div className="black-overlay"></div>
                        <Image fill
                            id="div-img2"
                            src={"/contact-bg.webp"}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work