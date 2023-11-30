/* eslint-disable no-else-return */
import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  SidebarItemContent,
  SubmenuTitle,
  SubmenuWrapper,
  ToggleButton,
  NavLink,
} from "./styles";

interface SidebarProps {
  item : any,
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarItem: React.FC<SidebarProps> = ({ item, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.childrens) {
    return (
      <>
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          <SubmenuWrapper>
            <SubmenuTitle>
              { item.icon }
              { item.title }
            </SubmenuTitle>
            <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <CaretDown size={16} color="#fff" weight="duotone" />
            </div>
          </SubmenuWrapper>
        </ToggleButton>

        <SidebarItemContent style={{ display: isOpen ? "block" : "none" }}>
          { item.childrens.map((child: any, index: React.Key) => <SidebarItem key={index} item={child} setOpen={setOpen} />) }
        </SidebarItemContent>
      </>
    );
  } else {
    return (
      <NavLink 
      to={item.path}
      onClick={() => setOpen((prev) => !prev)} 
      // to={{ pathname: item.path, state: { title: item.title } }} 
      // activeClassName="selected"
      >
        {item.icon}
        {item.title}
      </NavLink>
    );
  }
};

export default SidebarItem;
