import React from 'react'

import { Button, Card } from 'react-bootstrap'

const LinkCard = ({ link, refreshLinks }) => {
  const archiveLink = async () => {
    link.archived = true
    try {
      await fetch('/.netlify/functions/updateLink', {
        method: 'PUT',
        body: JSON.stringify(link),
      })
      refreshLinks()
    } catch (error) {
      console.error('AAH', error)
    }
  }

  const deleteLink = async () => {
    const id = link._id
    try {
      await fetch('/.netlify/functions/deleteLink', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      })
      refreshLinks()
    } catch (error) {
      console.error('AAH', error)
    }
  }

  return (
    <>
      <Card>
        <Card.Header>{link.name}</Card.Header>
        <Card.Body>
          <a href={link.url}>{link.url}</a>
          <p>{link.description}</p>
        </Card.Body>
        <Card.Footer className='center-items'>
          <Button
            onClick={archiveLink}
            type='button'
            className='btn btn-warning'
          >
            Archive
          </Button>
          <Button onClick={deleteLink} type='button' className='btn btn-danger'>
            delete
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default LinkCard
