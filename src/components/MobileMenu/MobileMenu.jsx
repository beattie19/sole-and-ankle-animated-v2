import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 250ms ease-in-out;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  /* @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  animation: slideIn 500ms cubic-bezier(0.19, 1, 0.22, 1); */

  @keyframes doorClose {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  perspective: 250px;
  transform-origin: right;

  animation: doorClose 2000ms cubic-bezier(0.19, 1, 0.22, 1) forwards;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* opacity: 0; */

  /* @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: appear;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards; */
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  opacity: 0;

  @keyframes appear-single {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:nth-of-type(1) {
    animation: appear-single 200ms ease-in-out 0.2s forwards;
  }
  &:nth-of-type(2) {
    animation: appear-single 200ms ease-in-out 0.4s forwards;
  }
  &:nth-of-type(3) {
    animation: appear-single 200ms ease-in-out 0.6s forwards;
  }
  &:nth-of-type(4) {
    animation: appear-single 200ms ease-in-out 0.8s forwards;
  }
  &:nth-of-type(5) {
    animation: appear-single 200ms ease-in-out 1s forwards;
  }
  &:nth-of-type(6) {
    animation: appear-single 200ms ease-in-out 1.2s forwards;
  }

`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: appear;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
