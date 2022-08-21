import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay mute src={this.props.src} />
      </div>
    );
  }
}