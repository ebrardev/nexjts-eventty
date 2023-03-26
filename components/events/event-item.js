import Link from "next/link";

function eventItem(props) {

    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`
    return (
        <li>
            <img src={'/'+ image} alt={title} />
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                        </div>
             
                <div>
                    <address>{formattedAddress}</address>
                    </div>
                    </div>
                <div>
                    <Link href = {{exploreLink}} >Explore Link</Link>
                </div>
            </div>
            </li>
    )
}

export default eventItem;