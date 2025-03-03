import level_1 from '../../assets/images/1.svg'
import level_2 from '../../assets/images/2.svg'
import level_3 from '../../assets/images/3.svg'
import level_4 from '../../assets/images/4.svg'
import level_5 from '../../assets/images/5.svg'
import level_6 from '../../assets/images/6.svg'
import level_7 from '../../assets/images/7.svg'
import level_8 from '../../assets/images/8.svg'

function Hangeman({step}){
    const images = [level_1,level_2,level_3,level_4,level_5,level_6,level_7,level_8]
    return(
        <div className='w-[360px] h-[360px]'>
            <img src={step>=images.length ? images[images.length-1]:images[step]} />
            
        </div>
    )


}
 export default Hangeman