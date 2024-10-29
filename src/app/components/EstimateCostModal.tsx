import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function EstimateCostModal({
  isOpen,
  onClose,
  total,
  action,
}: any) {
  return (
    <Modal
      size="sm"
      closeOnOverlayClick={false}
      blockScrollOnMount={false}
      isOpen={isOpen}
      isCentered
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent rounded="lg" bg="#ffffff">
        {/* <ModalHeader></ModalHeader> */}
        <ModalCloseButton color="#000" />
        <ModalBody py="5" mt="5" fontFamily="Roboto" textAlign="center">
          <Image src="/images/money.png" h="200px" w="200px" mx="auto" />
          <Text fontSize="24px" fontWeight="normal">
            Your Total Estimated Cost is
          </Text>
          <Text fontSize="32px" fontWeight="bold" color="primary.500">
            ₹ {total}
          </Text>
          {action}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
