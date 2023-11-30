import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const NavLink = styled(BaseNavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 95%;
  height: 3rem;

  margin: 4px 0;
  gap: 0.5rem;

  text-decoration: none;
  border-bottom: 1px solid rgba(71, 208, 150, 0.6);
  border-radius: 5px;
  background: transparent;

  font-size: 1rem;
  font-weight: 600;
  color: #f4f6fc;

  padding-left: 1rem;


  &:hover {
    background: rgba(71, 208, 150, 0.6);
    color: #fff;
  }

  &.selected {
    background: rgba(71, 208, 150, 0.6);
    color: #fff;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  text-align: center;
  color: #fdfeff;
  margin: 1rem 0;

  img {
    margin-top: 1rem;
  }

  h6 {
    max-width: 16rem;
    margin-bottom: 1rem;
  }
`;

export const ChildrenWrapper = styled.main`
  /* width: 100vw;
  margin: 2.5rem 2.5rem 0 2.5rem; */
`;

export const SidebarWrapper = styled.div<{open:boolean}>`
  display: flex;
  min-width: 230px;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;


  @media (max-width: 1000px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 16rem;
  height: 4rem;

  gap: 0.5rem;

  text-decoration: none;
  border: none;
  background: transparent;

  font-size: 1.25rem;
  font-weight: 600;
  color: #fdfeff;

  padding-left: 0.5rem;

  &:hover {
    background: #47d096;
    border-radius: 10px;
    border-left: 6px solid #f5f5dc;
  }
`;

export const SubmenuWrapper = styled.div`
  display: flex;
  width: 14rem;
  justify-content: space-between;
  align-items: center;
`;

export const SubmenuTitle = styled(ButtonWrapper)`
  width: auto;
  justify-content: end;
`;

export const SidebarItemContent = styled.div`
  display: flex;
  overflow: hidden;
  height: auto;
  max-width: auto;
  text-decoration: none;
  border: none;
  background-color: rgb(45, 127, 93, 0.4);
  border-radius: 1rem;
  padding-left: 0.5rem;
`;

export const ToggleButton = styled.span`
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
`;
