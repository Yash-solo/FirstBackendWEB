import './Review.css'
interface propsType {
    revName: string,
    House: string,
    stars: number,
    message: string
}
const ReviewCard = (props: propsType) => {

    return (
        <div className='my-review'>
            <div className='reviewImg'></div>
            <div className='messages'>
                <h1>{props.revName}</h1>
                <h3>{props.stars}⭐</h3>
                <p>{props.message}</p>
                <p>For :- {props.House}</p>
            </div>
        </div>
    )
}

export default ReviewCard
