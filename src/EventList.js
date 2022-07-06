import React from 'react';
import Event from './Event';
import { Grid, Segment } from 'semantic-ui-react';

export default function EventList(props) {
	const { events } = props;
	return (
		<>
			<Grid stackable columns={2} className="event-grid" padded="horizontally">
				{events.map((event) => (
					<Grid.Column key={event}>
						<Segment className="event-block">
							<Event event={event} />
						</Segment>
					</Grid.Column>
				))}
			</Grid>
		</>
	);
}
