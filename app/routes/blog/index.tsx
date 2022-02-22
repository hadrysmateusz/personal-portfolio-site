import { Link, useLoaderData } from "remix"
import styled from "styled-components"

import { getPosts } from "~/post"
import type { Post } from "~/post"
import React from "react"
import { breakpoints } from "~/components/Breakpoints"

interface PostCardProps {
  title: string
  category: string
  shortDescription: string
  coverImage: string
  slug: string
}

// TODO: currently the internal blog is disabled due to production build issues, probably should be fixed by migrating to mdx pages or cms

export const loader = () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<any>()
  console.log("loader: ", posts)

  return (
    <PostsIndexWrapper>
      {/*<h1>Posts</h1>*/}
      <ul>
        {/*{posts.map(({ html, ...post }) => (*/}
        {/*  <PostCard key={post.slug} {...post} />*/}
        {/*))}*/}
      </ul>
    </PostsIndexWrapper>
  )
}

const PostCard = (post: PostCardProps) => {
  const { title, category, shortDescription, slug, coverImage } = post
  return (
    <PostCardWrapper>
      <div className="meta-container">
        <div className="category">{category}</div>
        <Link to={slug}>
          <h2 className="title">{title}</h2>
        </Link>
        <div className="description">{shortDescription}</div>
      </div>
      <Link to={`/blog/${slug}`} className="image-link">
        <img className="image" src={coverImage} alt="" />
      </Link>
    </PostCardWrapper>
  )
}

const PostCardWrapper = styled.div`
  .meta-container {
    margin-top: var(--spacing__400);
    ${breakpoints.from.md`margin-top: 0;`}
    
    
    .category {
      font-size: var(--font_size__400);
      font-weight: 600;
      color: var(--color__accent);
      text-transform: uppercase;
    }
    .title {
      font-size: var(--font_size__600);
      font-weight: 700;

      margin-top: var(--spacing__300);
      margin-bottom: var(--spacing__400);
    }
    .description {
      color: var(--color__text_500);
      font-size: var(--font_size__500);
      ${breakpoints.from.md`font-size: var(--font_size__400);`}
    }
  }

  @media (max-width: ${breakpoints.sm.value - 1 + breakpoints.sm.unit}) {
    display: grid;
    width: 100%;

    grid-template-areas:
      "image"
      "meta";

    .meta-container {
      grid-area: meta;
    }

    img.image {
      object-fit: cover;
      display: block;
      width: 100%;

      grid-area: image;
      border-radius: 6px;
      margin-bottom: var(--spacing__400);
    }
  }

  @media (min-width: ${breakpoints.sm.toString()}) {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    gap: var(--spacing__600);

    .image-link {
      display: block;
      height: 11em;
      img {
        object-fit: cover;
        max-width: 300px;
        ${breakpoints.from.md`max-width: 360px;`}
        ${breakpoints.from.lg`max-width: 415px;`}
      }
    }
  }
`

const PostsIndexWrapper = styled.div`
  width: 100%;
  margin: var(--spacing__800) 0;
  ul {
    display: grid;
    gap: var(--spacing__700);
  }
`
