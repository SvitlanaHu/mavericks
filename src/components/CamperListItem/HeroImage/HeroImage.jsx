/* eslint-disable react/prop-types */
import style from './HeroImage.module.css'

export const HeroImage = ({image})=>{
    return (
        <div className={style.wrapper} >
            <img src={image} alt="Photo of the camper" className={style.image} />
        </div>
    )
    
}