import React from 'react'
import Event from './Event'
import { Grid, Segment } from 'semantic-ui-react'

export default function EventList(props) {
  const { events } = props

  const changeWidth = (val) => {
    console.log('🚀 ~ file: EventList.js ~ line 9 ~ EventList ~ val', val)
  }

  return (
    <>
      <Grid stackable columns={2} className="event-grid" padded="horizontally">
        {events.map((event, i) => (
          <Event
            key={event.id}
            event={event}
            changeWidth={changeWidth}
            evenOrOdd={i % 2 === 0}
          />
        ))}
      </Grid>
    </>
  )
}

//  ;<Grid stackable columns={2} className="event-grid" padded="horizontally">
//    {events.map((event) => (
//      <Grid.Column width={12} key={event.id}>
//        <Segment className="event-block">
//          <Event event={event} changeWidth={changeWidth} />
//        </Segment>
//      </Grid.Column>
//    ))}
//  </Grid>
