
/* eslint-disable arrow-body-style */
import React, { ReactNode } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import { useMenu } from './SidebarData';
import SidebarItem from './SidebarItem';
import { Loading } from '../Loading';

import {
  SidebarWrapper,
  ChildrenWrapper,
  Logo,
  TopSection,
} from './styles';


interface SidebarProps {
  children?: ReactNode
  variant?: 'general';
}

const Sidebar: React.FC<SidebarProps> = ({ children, variant = 'general' }) => {
  const { GeneralMenu } = useMenu();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <HamburgerIcon open={open} onClick={() => setOpen(!open)}>
        <AiOutlineMenu size={40} style={{ color: "black" }} />
      </HamburgerIcon>
      <SidebarWrapper open={open} style={{ background: '#3eb282' }}>
        <TopSection>
          <Logo src="/img/SIFOR LOGO.png" />
        </TopSection>
        {GeneralMenu
          // : ExtUserMenu?.map((item, index) => <SidebarItem key={index} item={item} />)}
          ? GeneralMenu?.map((item, index) => <SidebarItem key={index} item={item} setOpen={setOpen} />)
          : <Loading />}
      </SidebarWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
};

export default Sidebar;

const HamburgerIcon = styled.div<{ open: boolean }>`
  display:none;

  @media (max-width: 1000px) {
    display: ${({ open }) => (open ? 'none' : 'flex')};
    padding: 25px 0px 0px 20px;
  }
  `;