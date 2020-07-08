import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

const Marker = () => <Icon name="map marker alternate" size="big" color="red" />

const EventDetailedMap = ({ lat, lng }) => {
  const zoom = 14
  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB00U4ZHGCXDyXBA2hp2M61yPzdESR3dJs' }}
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
          distanceToMouse={() => {}}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  )
}

export default EventDetailedMap
