import { TextProps } from "@chakra-ui/react";
import mongoose from "mongoose";

export type HeaderProps = {
  name: string;
};
export type appLogoProps = {
  logoHeight?: number;
  logoWidth?: number;
  appNameProps?: TextProps;
};
declare global {
  var mongoose: {
    conn: mongoose.Connection | any;
    promise: Promise<mongoose.Connection> | any;
  };
}
