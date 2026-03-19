import { useState } from "react";
import "../css/Coments.css"
import { useEffect } from "react";

import { useRef } from "react";


function Coments() {
    const [comets, SetComents] = useState<any[]>([])
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then(res => res.json())
            .then(data => {


                // console.log(data.comments);
                SetComents(data.comments);

            })

    }, []);


    //AI ile yazilib
    // sağ ox → bir div sağa
    const scrollRight = () => {
        if (trackRef.current) {
            const childWidth = trackRef.current.children[0].clientWidth; // bir divin eni
            const gap = 16; // CSS-dəki gap px
            trackRef.current.scrollBy({ left: childWidth + gap, behavior: "smooth" });
        }
    };
    // sol ox → bir div sola
    const scrollLeft = () => {
        if (trackRef.current) {
            const childWidth = trackRef.current.children[0].clientWidth;
            const gap = 16;
            trackRef.current.scrollBy({ left: -(childWidth + gap), behavior: "smooth" });
        }
    };


    return (
        <div className="Coments">
            <div id="Coments-head">
                <p> OUR HAPPY CUSTOMERS</p>
                <div id="arrows">
                    <i className="fa-solid fa-left-long" onClick={scrollLeft}></i>
                    <i className="fa-solid fa-right-long" onClick={scrollRight}></i>
                </div>

            </div>

            <div className="coments-block">
                <div className="coments-block" ref={trackRef}>
                    {comets.map((coment) => (
                        <div className="user-comment-block" key={coment.id} >
                            <p>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </p>
                            <p className="user-name"><i className="fa-solid fa-circle-user"></i>{coment.user.fullName} <i className="fa-solid fa-circle-check"></i></p>
                            <p className="user-body">{coment.body}</p>
                            <p>❤️{coment.likes} </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Coments