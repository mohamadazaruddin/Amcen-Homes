import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export default function InstaIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5Z"
        fill="currentColor"
      />
      <path
        d="M16 3C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3H12H16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
