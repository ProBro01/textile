import React, { useEffect } from 'react'
// hooks
import { useState } from 'react'

export const Slideshowinfo = () => {

    const [exportproject, setexportproject] = useState(0)
    const [wattowrite, setwattowrite] = useState('0')
    var i = 0

    useEffect(() => {
        setwattowrite((wattowrite) => {
            var x = exportproject.toString()
            if(x.length === 4){
                return `${x[0]},${x.slice(1, x.length)}`
            }
            else{
                return x
            }
            // if (Math.floor(exportproject / 1000) !== 0) {
            //     return `${Math.floor(exportproject / 1000)},${exportproject % 1000}`
            // }
            // else{
            //     return exportproject.toString()
            // }
        })
    }, [exportproject])

    useEffect(() => {
        var count = setInterval(() => {
            i = i + 10
            if (i === 2480) {
                clearInterval(count)
            }
            else {
                setexportproject(exportproject => exportproject + 10)
            }
        }, 50)
    }, [])

    return (
        <>
            <section className="slideshow__info-section">
                <div className="slideshow__info-cont">
                    <div className="slideshow__info">
                        <div className="slideshow__info-data-cont">
                            <i className="fa fa-map-marker slideshow_info-icon"></i>
                            <div>
                                <p className='slideshow__info-card-head'>Location</p>
                                <p className='slideshow__info-card-info'>Jl. Sunset Road No.815, Kuta</p>
                            </div>
                        </div>
                        <div className="slideshow__info-data-cont">
                            <i className="fa fa-envelope slideshow_info-icon"></i>
                            <div>
                                <p className='slideshow__info-card-head'>Email</p>
                                <p className='slideshow__info-card-info'>support@domain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="slideshow__info-blocks">
                        <div className='slideshow__info-card-cont1'>
                            <div className='slideshow__info-card1'>
                                <p className='slideshow__card1-heading'>Quality Product</p>
                                <p className='slideshow__card1-para'>Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed.</p>
                                <p className='slideshow__card1-button'>Read More<i aria-hidden="true" className="fa fa-long-arrow-right slideshow__card1-arrow-icon"></i></p>
                            </div>
                        </div>
                        <div className='slideshow__info-card-cont2'>
                            <div className='slideshow__info-card2'>
                                <p className='slideshow__card2-heading'>Project Overview</p>
                                <p className='slideshow__card2-para1'>{wattowrite}</p>
                                <p className='slideshow__card2-para2'>Export Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
