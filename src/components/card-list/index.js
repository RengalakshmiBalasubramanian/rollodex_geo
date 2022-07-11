import Card from "../card"
import './index.css'

function CardList(props) {

    return (
        <div className="card-list">

            
            {
                props.list.map((user,index) =>{
                    return(
                        <Card user = {user}/>

                    )
                }

                )
            }
        </div>

    )
}

export default CardList
