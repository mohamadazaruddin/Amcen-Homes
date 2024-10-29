import { Box } from "@chakra-ui/react";
import { escape } from "querystring";
import React from "react";

export default function ItemsViewer(data: any) {
  if (data.length > 0) {
    const productNames = data.map((item: any) => item.product.name).join(", ");
    return <Box as="span">{productNames}</Box>;
  } else {
    return <>N/A</>;
  }
}
