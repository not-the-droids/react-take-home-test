import React, { Component } from 'react'

export class FeaturedCrewSection extends Component {
  renderCastMember = (name, role) => (
    <li style={listItemStyle}>
      <div>
        <p style={crewNameStyle}>{name}</p>
        <span style={crewRoleStyle}>{role}</span>
      </div>
    </li>
  )

  render() {
    return (
      <div>
        <h3 style={subHeadingStyle}>Featured Crew</h3>
        <ul style={castListStyle}>
          {this.renderCastMember('Bob Kane', 'Character')}
          {this.renderCastMember('Sam Hamm', 'Screen Play')}
        </ul>
      </div>
    )
  }
}

const subHeadingStyle = {
  margin: 0,
  lineHeight: '10pt',
}

const castListStyle = {
  padding: 0,
  margin: 0,
}

const listItemStyle = {
  listStyle: 'none',
  display: 'inline-block',
  margin: '20px 20px 0 0',
}

const crewNameStyle = {
  fontSize: '11pt',
  fontWeight: '600',
  margin: 0,
  marginBottom: '0.3em',
}

const crewRoleStyle = {
  fontSize: '9pt',
  lineHeight: '1pt',
  margin: 0,
}

export default FeaturedCrewSection
