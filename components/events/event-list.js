
import EventItem from "./event-item";
function EventList(props){
    const { items } = props;
    return (
        <ul>
            {items.map(event=>(
                 <EventItem  
                    key={event.id}
                 id={event.id} 
                 title={event.title}
                  location={event.location}
                   date={event.date}
                    image={event.image}
                     />))}
                
                {/* <li></li> */}

            </ul>

    )
}

export default EventList;