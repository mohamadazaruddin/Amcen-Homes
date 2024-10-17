// components/Map.tsx
import React from "react";
import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box rounded="lg" overflow="hidden" height="full" width="100%">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.52844897246!2d72.94818796704038!3d19.037155030876466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c42c5cff734d%3A0x94cd3c4a964074a!2sDosti%20Hotel!5e0!3m2!1sen!2sin!4v1729136380758!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
