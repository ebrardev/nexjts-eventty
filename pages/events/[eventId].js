import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
function EventDetailPage(){
    const router = useRouter();
    
   const eventId= router.query.eventId;
   const event =getEventById(eventId);

   function handleGoBack(){
       router.push('/');
   }

   if(!event){
         return <p>No event found!</p>
    }
    return (
        <Fragment>
             <EventSummary title={event.title} />
                <EventLogistics
                 date={event.date}
                  address={event.location}
                     image={event.image}
                        imageAlt={event.title}   
                  />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
                <button style={{display: 'block',padding:"10px", margin: '0 auto', backgroundColor: 'blue', color: 'white'}}  onClick={handleGoBack}>Show All Events</button>

            </Fragment>
    )

}

export default EventDetailPage;


