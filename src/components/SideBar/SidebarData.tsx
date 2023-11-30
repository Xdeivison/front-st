import {
  UsersThree,
  User,
  ChartLine,
  Student,
  Paperclip,
  GraduationCap,
  ChalkboardTeacher,
  ScribbleLoop,
  Article,
} from "phosphor-react";
import React, { useEffect } from 'react';

type IGeneral = {
  path: string;
  title: string;
  icon: JSX.Element;
  // permission: boolean;
} | {
  title: string;
  icon: JSX.Element;
  path: string;
  // permission?: undefined;
}

export function useMenu() {
  const [GeneralMenu, setGeneralMenu] = React.useState<IGeneral[] | null>(null);
  

  useEffect(() => {
    setGeneralMenu([
      {
        path: "/home",
        title: "Home",
        icon: <ChartLine size={24} color="#fff" weight="light" />,
      },
      {
        path: "/about",
        title: "Sobre",
        icon: <ChartLine size={24} color="#fff" weight="light" />,
      },
      {
        title: "Imprensa",
        icon: <UsersThree size={24} color="#fff" weight="light" />,
        path: "/conference",
        
      },
      {
        title: "Boletim",
        icon: <Student size={24} color="#fff" weight="light" />,
        path: "/boletim",
      },
      {
        path: "/contact",
        title: 'Contato',
        icon: <Paperclip size={24} color="#fff" weight="light" />,
        
      },
      {
        title: 'Dados Histórico',
        icon: <ChalkboardTeacher size={24} color="#fff" weight="light" />,
        path: "/historic",
        
      },
      {
        title: 'Estações',
        icon: <GraduationCap size={24} color="#fff" weight="light" />,
        path: "/list-stations",
        
      },
    ]);
  }, []);
  return { GeneralMenu };
}


