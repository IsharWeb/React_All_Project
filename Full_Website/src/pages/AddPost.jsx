import React from 'react'
// import { Container, PostForm } from '../components/'
import Container from '../components/Container/Container'
import PostForm from '../components/Postfrom/PostFrom'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost