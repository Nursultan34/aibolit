import CardLayout from '../card-layout/CardLayout'
import './Card.css'


export default function DirectionCard() {
    return (
        <CardLayout className='card'>
            <div>кардиология</div>
             <img className='svg' src="/icons/cardiology.svg" alt="asd" />
        </CardLayout>
    )
}