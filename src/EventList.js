import React from 'react';
import Event from './Event';

export default function EventList(props) {
	const { events } = props;
	return (
		<ul className="event-list">
			{events.map((event) => (
				<li key={event.id}>
					<Event event={event} />
				</li>
			))}
		</ul>
	);
}
