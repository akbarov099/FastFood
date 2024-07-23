import React from 'react'
import { useParams } from 'react-router-dom';
import SwiperSingle from './SwiperSingle/SwiperSingle';

export default function Single() {
    const { id } = useParams();

    return (
        <>
            <section className='single'>
                <SwiperSingle />
                <div className='single_foto'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZrYaAUFja9oCPgsqXQMWRXQzVKm0zeq_Tal1cfOxp2CGgArh9MRXmjp-XSweulDFz4c&usqp=CAU" alt="" />
                </div>
                <div className="container">

                </div>
            </section>

        </>
    )
}
