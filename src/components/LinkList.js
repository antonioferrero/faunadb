import React from 'react'
import LinkCard from './LinkCard'

const LinkList = ({ links, refreshLinks }) => {
  return (
    <>
      <h2>Links</h2>
      {links &&
        links
          .filter((link) => !link.archived)
          .map((link) => (
            <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
          ))}
      <h2>Archived</h2>
      {links &&
        links
          .filter((link) => link.archived)
          .map((link) => (
            <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
          ))}
    </>
  )
}

export default LinkList
