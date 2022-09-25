import daniel from '../../assets/images/image-daniel.jpg'
import './_styleCard.scss'

export default function Card(){

    return ( //360 px como max
        <div className={`container __card${'1'}`} > 
            <div className="imgCard">
                <img src={daniel} alt="" />
                <div className='name_titleCard'>
                    <p>name</p>
                    <p>graduated</p>

                </div>
            </div>

            <div className='container __info'>
                <div>  
                    <p><strong>Opinion</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus. Delectus iure quos eius saepe reprehenderit suscipit laborum labore vel qui facere. Officiis, rem nihil. Numquam velit vel nam quos!</p>
                    <p><strong>History</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat voluptas rerum maiores at numquam odit, dolore et magni debitis sed, in est aspernatur accusamus natus recusandae molestiae delectus ex.</p>
                </div>
            </div>

        </div>
    );
}