import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

const Sidebar = () => {
  return (
    <Wrapper>
      <LinkWrapper><Link href="/lifestyle">Lifestyle<Bracket><div>[</div><div>]</div></Bracket></Link></LinkWrapper>  
      <Link href="/jordan">Jordan</Link>
      <ActiveLink href="/running">Running</ActiveLink>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </Wrapper>
  );
};

const Wrapper = styled.aside``;

 const Bracket = styled.div`
   display: flex;
 `

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);
  line-height: 2;
`;

const ActiveLink = styled(Link)`
  color: var(--color-primary);
`;

const LinkWrapper = styled.div`
  display: flex;

  ${Bracket} {
    position: relative;
    left: 0;
    margin-right: 8px;
    align-items: center;
    width: 130%;
    margin-left: -15%;
    justify-content: center;

    :first-child {
      transition: transform 350ms ease-in, opacity 150ms;

        transform: translateX(0);
        opacity: 0.5;
      }

    :last-child {
      transition: transform 350ms ease-in, opacity 150ms;

      transform: translateX(0);
      opacity: 0.5;
    }
    
    &:hover {
      :first-child {
        transition: transform 350ms ease-in, opacity 150ms;

        transform: translateX(-50px);
        opacity: 1;
      }

      :last-child {
        transition: transform 350ms ease-in, opacity 150ms;

        transform: translateX(50px);
        opacity: 1;
      }
  }
}
`

export default Sidebar;
