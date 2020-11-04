import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LinkForm from './components/LinkForm'
import LinkList from './components/LinkList'

function App() {
  const [links, setLinks] = useState([])

  const loadLinks = async () => {
    try {
      const res = await fetch('/api/getLinks')
      const links = await res.json()
      setLinks(links)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadLinks()
  }, [])

  return (
    <>
      <Container>
        <Row className='center-items'>
          <Col>
            <h1 className='text-center mb-5'>List O' Link</h1>
            <LinkForm refreshLinks={loadLinks} />
            <LinkList links={links} refreshLinks={loadLinks} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
