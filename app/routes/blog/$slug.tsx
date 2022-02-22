import type { LoaderFunction } from "remix"
import { useLoaderData } from "remix"
import { getPost, Post } from "~/post"
import invariant from "tiny-invariant"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"
import { ImageGrid } from "~/components"

export const loader: LoaderFunction = async ({ params }) => {
  console.log("slug loader")
  invariant(params.slug, "expected params.slug")
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData<Post>()

  console.log("post", post)

  return (
    <PostWrapper>
      <div className="meta-container">
        <div className="category-name">{post.category}</div>
        <h1>{post.title}</h1>
        <p className="short-description">{post.shortDescription}</p>
        <ImageGrid sources={[post.coverImage]}>
          <ImageGrid.Image src={post.coverImage} alt="project preview" />
        </ImageGrid>
        {/*<img src={post.coverImage} />*/}
      </div>

      <main dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostWrapper>
  )
}

const PostWrapper = styled.article`
  width: 100%;
  color: var(--color__grayscale_900);
  
  iframe {
    position: relative !important; // TODO: make this work without !important
  }

  .meta-container {
    text-align: center;
    margin: var(--spacing__400) 0 var(--spacing__700) 0;

    .category-name {
      color: var(--color__accent);
      font-size: var(--font_size__400);
      text-transform: uppercase;
      font-weight: 600;
    }

    h1 {
      margin: var(--spacing__200) 0 0 0;
      font-size: var(--font_size__700);
    }

    .short-description {
      margin: var(--spacing__200) 0 0 0;
      font-size: var(--font_size__500);
      //font-weight: 600;
      color: var(--color__grayscale_500);
    }

    img {
      width: 100%;
      margin:0;
    }
  }

  a {
    color: var(--color__accent);
    text-decoration: underline;
  }

  blockquote {
    margin: 0;
    padding-left: var(--spacing__400);
    color: var(--color__grayscale_500);
    border-left: 3px solid var(--color__grayscale_400);
  }

  main {
    ${breakpoints.from.md`max-width: 38em;`}
    ${breakpoints.from.xl`max-width: 36em;`}
    margin: 0 auto;
  }

  li {
    list-style: disc inside;

    //font-weight: 700;
    color: var(--color__text_700);

    &::marker {
      color: var(--color__accent);
    }
  }

  img {
    // ${breakpoints.from.lg`
    //   margin-left: calc(-1 * var(--spacing__500));
    //   margin-right: calc(-1 * var(--spacing__500));
    // `}
    // width: calc(100% + calc(2 * var(--spacing__500)));
    // max-width:none;

    border-radius: 12px;
    display: block;
    width: 100%;

    margin-top: var(--spacing__600);
    margin-bottom: var(--spacing__600);
  }

  pre {
    font-size: var(--font_size__400);
    border-radius: 12px;
    padding: var(--spacing__500);
    background: var(--color__grayscale_300);
    font-family: monospace;
    color: var(--color__grayscale_700);
    overflow: auto;

    // ${breakpoints.from.lg`
    //   margin-left: calc(-1 * var(--spacing__500));
    //   margin-right: calc(-1 * var(--spacing__500));
    // `}
    margin-top: var(--spacing__600);
    margin-bottom: var(--spacing__600);
  }

  p {
    margin: var(--spacing__500) 0;

    code {
      background: var(--color__grayscale_300);
      padding: 6px 10px;
      border-radius: 6px;
      font-family: monospace;
      color: var(--color__grayscale_700);
      font-size: 0.91em;
    }
  }

  h1,
  h2,
  h3 {
    margin-top: var(--spacing__800);
  }
`
