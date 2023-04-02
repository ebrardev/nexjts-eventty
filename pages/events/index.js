
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
function AllEventPage() {

    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }
    return (
        <div>
            <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
        </Fragment>
        </div>
    )

}

export default AllEventPage;