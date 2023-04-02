
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
function AllEventPage() {

    const events = getAllEvents();
    return (
        <div>
            <Fragment>
            <EventsSearch />
        <EventList items={events} />
        </Fragment>
        </div>
    )

}

export default AllEventPage;