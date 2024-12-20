import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  Button,
  Text,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const EstimateSelectBox = ({
  label,
  optionsList,
  optionName,
  selectOption,
  setOption,
  wrapperProps,
}: any) => {
  return (
    <Flex
      align="center"
      gap="4"
      fontFamily="Roboto"
      h="fit-content"
      {...wrapperProps}
    >
      <Text
        fontSize="md"
        fontWeight="normal"
        color="secondary.500"
        whiteSpace="nowrap"
      >
        {label}
      </Text>
      <Menu matchWidth={true} placement="bottom">
        <MenuButton
          as={Button}
          bg="#ffffff"
          fontWeight="medium"
          border="1px solid"
          fontFamily="Roboto"
          borderColor="#cdc9c9"
          w="full"
          textAlign="start"
          gap="5"
          rightIcon={<ChevronDownIcon w="5" h="5" />}
        >
          {selectOption ? selectOption : optionName}
        </MenuButton>
        <MenuList zIndex={99}>
          {optionsList.map((option: any, index: number) => (
            <MenuItem
              key={index}
              onClick={() => {
                setOption(option.name);
                console.log(`${label}: ${option.name}`);
              }}
            >
              {option.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default EstimateSelectBox;
