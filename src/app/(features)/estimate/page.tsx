"use client";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Image,
  Text,
  IconButton,
  Grid,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  constructionItems,
  floorsList,
  areaList,
  cityList,
} from "../../../../public/content.json";
import EstimateSelectBox from "@/app/components/EstimateSelectBox";
import ProductInfoCard from "@/app/components/ProductInfoCard";
import ProductCard from "@/app/components/ProductCard";
import CartIcon from "@/app/components/Icons/CartIcon";

export default function Estimate() {
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showFiltermodal, setShowFiltermodal] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>(constructionItems[0]);
  const [selectedItemsList, setSelectedItemList] = useState<any>([]);
  const {
    isOpen: filterModalisOpen,
    onOpen: filterModalonOpen,
    onClose: filterModalonClose,
  } = useDisclosure();
  const toast = useToast();
  const handleFilterAdd = () => {
    let errorMessage = "";

    if (selectedFloor.length === 0) {
      errorMessage = "Please select an Floors.";
    } else if (selectedArea.length === 0) {
      errorMessage = "Please select a Area.";
    } else if (selectedCity.length === 0) {
      errorMessage = "Please select the number of City.";
    }

    if (errorMessage) {
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        // variant: "left-accent",
        position: "top",
      });
    } else {
      setShowFiltermodal(false);
    }
  };

  const handleAddItems = (item: any) => {
    // const currentItem = constructionItems.filter(
    //   (item) => item.category == selectedItem.category
    // );

    // const presentItem = currentItem[0].items.filter(
    //   (element: { name: any }) => element.name === item.name
    // );
    // const additem = presentItem[0].name;
    // if (additem !== item.name) {
    //   setSelectedItemList((prevItems: any) => [...prevItems, item]);
    // }
    // console.log(additem, "additem");
    // console.log(selectedItemsList, "additem");
    const present = selectedItemsList.filter(
      ({ name }: any) => name === item.name
    );
    if (present.length > 0) {
      console.log("already present", selectedItemsList);
    } else {
      setSelectedItemList((prevItems: any) => [...prevItems, item]);
    }
  };

  const constructionItemsRef = useRef<any>(null);
  const handlePrev = () => {
    if (constructionItemsRef.current) {
      constructionItemsRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (constructionItemsRef.current) {
      constructionItemsRef.current.slideNext();
    }
  };

  return (
    <Box bg="#fff" pb="20">
      <Modal size="sm" isOpen={showFiltermodal} onClose={filterModalonClose}>
        <ModalOverlay />
        <ModalContent rounded="lg" bg="#ffffff">
          <ModalHeader
            py="10px"
            borderBottom="2px solid"
            bg="secondary.500"
            borderTopRadius="lg"
            fontFamily="Roboto"
            color="#ffffff"
            fontSize="2xl"
            fontWeight="medium"
            borderColor="#8b8b8b29"
            textAlign="center"
          >
            House Information
          </ModalHeader>

          <ModalBody w="full">
            <EstimateSelectBox
              label="Select Floors :"
              optionsList={floorsList}
              wrapperProps={{
                mb: 5,
              }}
              optionName="No of Floors"
              selectOption={selectedFloor}
              setOption={setSelectedFloor}
            />
            <EstimateSelectBox
              label="Select Area :"
              optionsList={areaList}
              optionName="Area"
              wrapperProps={{
                mb: 5,
              }}
              selectOption={selectedArea}
              setOption={setSelectedArea}
            />
            <EstimateSelectBox
              label="Select City :"
              optionsList={cityList}
              optionName="City"
              wrapperProps={{
                mb: 5,
              }}
              selectOption={selectedCity}
              setOption={setSelectedCity}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              bg="secondary.500"
              _hover={{ bg: "secondary.500", color: "#fff" }}
              color="#fff"
              fontFamily="Roboto"
              onClick={handleFilterAdd}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('https://img.freepik.com/premium-photo/real-estate-broker-agent-presenting-consult-customer-decision-making-sign-insurance-form-agreement-buy-sell-home-model-concerning-mortgage-loan-offer-house-insurance_265022-23653.jpg?w=900')"
      >
        <Box
          bg="#000000b8"
          w="full"
          h="full"
          pt="20"
          pb="100px"
          textAlign="center"
        >
          <Text fontSize="48px" color="#fff" fontWeight="bold">
            Cost Estimator
            <Box as="span" color="#EDAB5B">
              Tool
            </Box>
          </Text>
          <Text color="#fff" fontSize="md" fontWeight="normal">
            Give your home a new look with these interior <br /> design ideas
            curated for you
          </Text>
        </Box>
      </Box>
      <Box px="10" mt="-35px">
        <Flex gap="5">
          <Box w="70%">
            <Flex
              h="fit-content"
              gap="5"
              px="8"
              py="4"
              shadow="lg"
              bg="#ffffff"
              rounded="full"
            >
              <EstimateSelectBox
                label="Select Floors :"
                optionsList={floorsList}
                optionName="No of Floors"
                selectOption={selectedFloor}
                setOption={setSelectedFloor}
              />
              <EstimateSelectBox
                label="Select Area :"
                optionsList={areaList}
                optionName="Area"
                selectOption={selectedArea}
                setOption={setSelectedArea}
              />
              <EstimateSelectBox
                label="Select City :"
                optionsList={cityList}
                optionName="City"
                selectOption={selectedCity}
                setOption={setSelectedCity}
              />
            </Flex>
            <Box
              border="1px solid"
              borderColor="#22232626"
              w="full"
              mt="5"
              bg="#ffffff"
              p="4"
              shadow="lg"
              rounded="lg"
            >
              <Text
                mb="3"
                mt="4"
                fontSize="2xl"
                fontWeight="normal"
                fontFamily="Roboto"
              >
                Construction Items
              </Text>
              <Swiper
                spaceBetween={20}
                slidesPerView={4}
                onSwiper={(swiper) => {
                  constructionItemsRef.current = swiper;
                }}
              >
                {constructionItems?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Box
                      rounded="lg"
                      role="group"
                      overflow="hidden"
                      _hover={{
                        borderColor: "primary.500",
                      }}
                      onClick={() => {
                        console.log(item, "item");
                        setSelectedItem(item);
                      }}
                      bg="#ffffff"
                      border="2px solid"
                      borderColor={
                        selectedItem?.name === item?.name
                          ? "primary.500"
                          : "#22232626"
                      }
                    >
                      <Box p="4">
                        <Image mx="auto" src={`${item.image}`} h="150px" />
                      </Box>
                      <Box
                        py="2"
                        fontSize="md"
                        fontWeight="medium"
                        fontFamily="Roboto"
                        color={
                          selectedItem.name === item.name
                            ? "#ffffff"
                            : "secondary.500"
                        }
                        textAlign="center"
                        bg={
                          selectedItem.name === item.name
                            ? "primary.500"
                            : "#f5f5f5"
                        }
                        _groupHover={{
                          borderColor: "primary.500",
                          color:
                            selectedItem.name !== item.name && "primary.500",
                        }}
                        w="full"
                        borderTop="2px solid"
                        borderColor={
                          selectedItem.name === item.name
                            ? "primary.500"
                            : "#22232626"
                        }
                      >
                        {item.tag}
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Flex mt="8" gap="5" justifyContent="center">
                <IconButton
                  bg="#ffffff"
                  color="primary.500"
                  _hover={{
                    bg: "primary.500",
                    color: "#ffffff",
                  }}
                  aria-label="Search database"
                  icon={<ArrowBackIcon h="5" w="5" />}
                  rounded="full"
                  border="2px solid"
                  borderColor="primary.500"
                  onClick={handlePrev}
                />
                <IconButton
                  bg="#ffffff"
                  rounded="full"
                  border="2px solid"
                  borderColor="primary.500"
                  _hover={{
                    bg: "primary.500",
                    color: "#ffffff",
                  }}
                  color="primary.500"
                  aria-label="Search database"
                  icon={<ArrowForwardIcon h="5" w="5" />}
                  onClick={handleNext}
                />
              </Flex>

              <Box>
                <Text
                  mb="3"
                  mt="4"
                  fontSize="2xl"
                  fontWeight="medium"
                  fontFamily="Roboto"
                  textTransform="capitalize"
                >
                  {selectedItem?.name}
                </Text>

                <Grid
                  gap="5"
                  templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                >
                  {selectedItem?.items.map((element: any, i: number) => (
                    <ProductCard
                      wrapperProps={{
                        border: "1px solid",
                        borderColor: Boolean(
                          selectedItemsList.filter(
                            ({ name }: any) => name === element.name
                          ).length
                        )
                          ? "primary.500 !important"
                          : "#f5f5f5 !important",
                        color: Boolean(
                          selectedItemsList.filter(
                            ({ name }: any) => name === element.name
                          ).length
                        )
                          ? "primary.500 !important"
                          : "secondary.500 !important",
                      }}
                      key={i}
                      name={element.name}
                      content={element.content}
                      image={element.image}
                      action={
                        <Button
                          type="submit"
                          bg={
                            Boolean(
                              selectedItemsList.filter(
                                ({ name }: any) => name === element.name
                              ).length
                            )
                              ? "primary.500"
                              : "secondary.500"
                          }
                          _hover={{ transform: "scale(1.08)" }}
                          color="#fff"
                          // isLoading={isSubmitting}
                          onClick={() => handleAddItems(element)}
                          w="full"
                          mt="5"
                          leftIcon={<CartIcon h="5" w="5" />}
                          fontFamily="Roboto"
                        >
                          {Boolean(
                            selectedItemsList.filter(
                              ({ name }: any) => name === element.name
                            ).length
                          )
                            ? "Added"
                            : "Add"}
                        </Button>
                      }
                    />
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box w="30%">
            <Box
              bg="#ffffff"
              border="1px solid"
              borderColor="#22232626"
              p="5"
              shadow="lg"
              rounded="lg"
            >
              <Text
                mb="3"
                fontSize="lg"
                fontWeight="medium"
                fontFamily="Roboto"
                textTransform="capitalize"
              >
                Selected Items
              </Text>
              {selectedItemsList.length > 0 ? (
                <>
                  {selectedItemsList.map(({ name, image }: any, i: number) => (
                    <Flex
                      key={i}
                      py="2"
                      align="center"
                      justify="space-between"
                      borderBottom="1px solid"
                      borderColor="#22232626"
                    >
                      <Box
                        fontSize="lg"
                        fontFamily="Roboto"
                        fontWeight="normal"
                      >
                        {name}
                      </Box>
                      <Image src={image} w="30px" h="30px" />
                    </Flex>
                  ))}
                </>
              ) : (
                <>
                  <Image src="/images/cart.png" h="250px" w="250px" mx="auto" />
                  <Text
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="medium"
                    fontFamily="Roboto"
                    color="secondary.500"
                  >
                    Your Cart is Empty
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="sm"
                    mt="1"
                    mb="4"
                    fontWeight="normal"
                    fontFamily="Roboto"
                    color="secondary.500"
                  >
                    Looks like you have not added anything to your cart go ahead
                    & explore
                  </Text>
                </>
              )}
            </Box>
            <Box
              mt="5"
              bg="#ffffff"
              p="5"
              shadow="lg"
              rounded="lg"
              border="1px solid"
              borderColor="#22232626"
            >
              <ProductInfoCard
                image={selectedItem?.image}
                content={selectedItem?.content}
                name={selectedItem.name}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
function toast(arg0: {
  title: string;
  description: string;
  status: string;
  duration: number;
  isClosable: boolean;
}) {
  throw new Error("Function not implemented.");
}
