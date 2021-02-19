import groq from 'groq'
import client from '../../../client'

export const GET_POSTS = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`