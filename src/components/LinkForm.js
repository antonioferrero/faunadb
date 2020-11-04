import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const LinkForm = ({ refreshLinks }) => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const resetForm = () => {
    setName('')
    setUrl('')
    setDescription('')
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const body = { name, url, description }
    try {
      await fetch('/.netlify/functions/createLink', {
        method: 'POST',
        body: JSON.stringify(body),
      })
      resetForm()
      refreshLinks()
    } catch (error) {}
  }

  return (
    <Card>
      <Card.Header>Add Link</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Link Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
              type='text'
              placeholder='Link URL'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Link Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button variant='success' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LinkForm
