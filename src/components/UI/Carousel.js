import classes from './Carousel.module.scss'
import {useEffect, useState} from "react";

const Carousel = ({slides, settings}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const dotClickHandler = (e) => {
        const currentDot = e.target;
        const currentDotIndex = currentDot.getAttribute('id')?.slice(-1);

        setCurrentSlide(currentDotIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const slideIndex = +currentSlide + 1
            setCurrentSlide(slideIndex)
        }, 7000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }

    })

    useEffect(() => {
        const infinite = () => {
            if (Object.keys(slides).length === (currentSlide)) {
                setCurrentSlide(0)
            }
        }
        infinite()
    })


    return (
        <div className={classes.carousel_container}>
            {Object.entries(slides).map(slide => {
                const slideIndex = slide[0]
                const slideImg = slide[1].image || null;
                const slideTitle = slide[1].title || null;
                const slideText = slide[1].text || null;

                const slideClasses = (currentSlide == slideIndex) ? `${classes.carousel_container_item} ${classes['active']}` : classes.carousel_container_item
                return (
                    <div key={`slide-${slideIndex}`} id={`slide-${slideIndex}`} className={slideClasses}
                         style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {slideImg && settings.image &&
                            <div className={classes['carousel_container_item--image']}>
                                <img src={slideImg}/>
                            </div>
                        }
                        {(settings.title || settings.text) &&
                            <div className={classes['carousel_container_item--content']}>
                                {slideTitle && settings.title &&
                                    <div className={classes['carousel_container_item--title']}>{slideTitle}</div>}
                                {slideText && settings.text && <div><p>{slideText}</p></div>}
                            </div>
                        }
                    </div>)
            })}
            {settings.dots &&
                <div className={classes['carousel_container--dots']}>
                    {Object.entries(slides).map(item => {
                        const dotIndex = item[0];
                        const dotClasses = currentSlide == dotIndex ? `${classes['dot']} dot-${dotIndex} ${classes['active']}` : `${classes['dot']} dot-${dotIndex}`

                        return <span onClick={dotClickHandler} id={`dot-${dotIndex}`} key={`dot-${dotIndex}`}
                                     className={dotClasses}/>
                    })}
                </div>
            }
        </div>
    )
}

export default Carousel