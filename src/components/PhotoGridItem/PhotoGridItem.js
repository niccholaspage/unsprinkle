import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifUrl = src.replace('.jpg', '.avif');
  const twoXavifUrl = src.replace('.jpg', '@2x.avif');
  const threeXavifUrl = src.replace('.jpg', '@2x.avif');

  const jpgUrl = src.replace('.jpg', '.jpg');
  const twoXJpgUrl = src.replace('.jpg', '@2x.jpg');
  const threeXJpgUrl = src.replace('.jpg', '@2x.jpg');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>

          <source srcset={`${avifUrl}, ${twoXavifUrl} 2x, ${threeXavifUrl} 3x`} type="image/avif" />
          <source srcset={`${jpgUrl}, ${twoXJpgUrl} 2x, ${threeXJpgUrl} 3x`} />
          <Image alt={alt} src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
