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
import EstimateCostModal from "@/app/components/EstimateCostModal";
import { useRouter } from "next/navigation";

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
  const {
    isOpen: estimateModalisOpen,
    onOpen: estimateModalonOpen,
    onClose: estimateModalonClose,
  } = useDisclosure();
  const {
    isOpen: cartModalisOpen,
    onOpen: cartModalonOpen,
    onClose: cartModalonClose,
  } = useDisclosure();
  const toast = useToast();
  const { push } = useRouter();
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
    setSelectedItemList((prevItems: any) => {
      if (item.category) {
        const filteredItems = prevItems.filter(
          (prevItem: any) => prevItem.category !== item.category
        );
        return [...filteredItems, item];
      }
      return [...prevItems, item];
    });
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
  // need to change to true
  return (
    <Box bg="#fff" pb="20">
      <Modal
        size={{ base: "xs", md: "sm" }}
        isOpen={false}
        // isOpen={showFiltermodal}
        onClose={filterModalonClose}
      >
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
          pt={{ base: "10", md: "20" }}
          pb={{ base: "50px", md: "100px" }}
          textAlign="center"
        >
          <Text
            fontSize={{ base: "24px", md: "48px" }}
            color="#fff"
            fontWeight="bold"
          >
            Cost Estimator{" "}
            <Box as="span" color="#EDAB5B">
              Tool
            </Box>
          </Text>
          <Text
            color="#fff"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="normal"
          >
            Give your home a new look with these interior <br /> design ideas
            curated for you
          </Text>
        </Box>
      </Box>
      <Box px={{ base: "5", md: "10" }} mt="-35px">
        <Flex display={{ base: "none", md: "none", lg: "flex" }} gap="5">
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
                            ({ product }: any) => product.name === element.name
                          ).length
                        )
                          ? "primary.500 !important"
                          : "#f5f5f5 !important",
                        color: Boolean(
                          selectedItemsList.filter(
                            ({ product }: any) => product.name === element.name
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
                                ({ product }: any) =>
                                  product.name === element.name
                              ).length
                            )
                              ? "primary.500"
                              : "secondary.500"
                          }
                          _hover={{ transform: "scale(1.08)" }}
                          color="#fff"
                          // isLoading={isSubmitting}
                          onClick={() =>
                            handleAddItems({
                              product: element,
                              category: selectedItem.category,
                            })
                          }
                          w="full"
                          mt="5"
                          leftIcon={<CartIcon h="5" w="5" />}
                          fontFamily="Roboto"
                        >
                          {Boolean(
                            selectedItemsList.filter(
                              ({ product }: any) =>
                                product.name === element.name
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
                  {selectedItemsList.map(
                    ({ product, category }: any, i: number) => (
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
                          {product.name}
                        </Box>
                        <Image src={product.image} w="30px" h="30px" />
                      </Flex>
                    )
                  )}
                  {selectedItemsList.length < 5 && (
                    <Text
                      mt="5"
                      fontSize="sm"
                      fontFamily="Roboto"
                      color="red"
                      textAlign="center"
                    >
                      Please Select All the Manditory Items !!
                    </Text>
                  )}
                  <Button
                    mt="5"
                    bg="secondary.500"
                    _hover={{ bg: "secondary.500", color: "#fff" }}
                    color="#fff"
                    fontFamily="Roboto"
                    isDisabled={selectedItemsList.length > 5 ? false : true}
                    w="full"
                    onClick={estimateModalonOpen}
                  >
                    Get Total Cost
                  </Button>
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
        <Box display={{ base: "block", md: "block", lg: "none" }}>
          <Flex
            flexDir="column"
            gap="3"
            shadow="lg"
            bg="#ffffff"
            rounded="lg"
            px="4"
            py="4"
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

          <Box mt="2" py="4">
            <Text
              mb="2"
              fontSize="20px"
              fontWeight="semibold"
              fontFamily="Roboto"
            >
              Construction Items
            </Text>
            <Swiper
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
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
                      <Image mx="auto" src={`${item.image}`} h="80px" />
                    </Box>
                    <Box
                      py="1"
                      fontSize={{ base: "sm", md: "md" }}
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
                        color: selectedItem.name !== item.name && "primary.500",
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
            <Flex mt="5" gap="5" justifyContent="center">
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
              <Flex mt="5" gap="5" justifyContent="space-between">
                <Text
                  mb="2"
                  mt="4"
                  fontSize="20px"
                  fontWeight="semibold"
                  fontFamily="Roboto"
                  textTransform="capitalize"
                >
                  {selectedItem?.name}
                </Text>
                <Box pos="relative" w="fit-content">
                  <IconButton
                    bg="#ffffff"
                    color="primary.500"
                    _hover={{
                      bg: "primary.500",
                      color: "#ffffff",
                    }}
                    position="relative"
                    aria-label="Search database"
                    icon={<CartIcon h="5" w="5" />}
                    rounded="full"
                    border="2px solid"
                    borderColor="primary.500"
                    onClick={cartModalonOpen}
                  />

                  {selectedItemsList.length > 0 && (
                    <Flex
                      align="center"
                      justify="center"
                      position="absolute"
                      bg="red"
                      fontFamily="Roboto"
                      w="5"
                      p="4px"
                      h="5"
                      top="-8px"
                      right="-5px"
                      rounded="full"
                      color="#fff"
                    >
                      <Text fontSize="12px" lineHeight="100%">
                        {" "}
                        {selectedItemsList.length}
                      </Text>
                    </Flex>
                  )}
                </Box>

                {/* Cart Items  */}
                <Modal
                  size="xs"
                  isOpen={cartModalisOpen}
                  onClose={cartModalonClose}
                >
                  <ModalOverlay />
                  <ModalContent rounded="lg" bg="#ffffff">
                    <ModalHeader
                      py="10px"
                      borderBottom="2px solid"
                      bg="secondary.500"
                      borderTopRadius="lg"
                      fontFamily="Roboto"
                      color="#ffffff"
                      fontSize="lg"
                      fontWeight="medium"
                      borderColor="#8b8b8b29"
                      textAlign="center"
                    >
                      Selected Items
                    </ModalHeader>
                    <ModalCloseButton color="#fff" />
                    <ModalBody w="full">
                      {selectedItemsList.length > 0 ? (
                        <>
                          {selectedItemsList.map(
                            ({ name, image }: any, i: number) => (
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
                            )
                          )}
                        </>
                      ) : (
                        <>
                          <Image
                            src="/images/cart.png"
                            h="250px"
                            w="250px"
                            mx="auto"
                          />
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
                            Looks like you have not added anything to your cart
                            go ahead & explore
                          </Text>
                        </>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      {selectedItemsList.length > 0 && (
                        <Button
                          type="submit"
                          bg="secondary.500"
                          _hover={{ bg: "secondary.500", color: "#fff" }}
                          color="#fff"
                          fontFamily="Roboto"
                          // onClick={handleFilterAdd}
                        >
                          Calculate
                        </Button>
                      )}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Grid gap="3" templateColumns="repeat(2, 1fr)">
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
                        leftIcon={
                          <CartIcon
                            h={{ base: "4", md: "5" }}
                            w={{ base: "4", md: "5" }}
                          />
                        }
                        fontSize={{ base: "sm", md: "md" }}
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
      </Box>

      <EstimateCostModal
        isOpen={estimateModalisOpen}
        total={"20,000"}
        onClose={estimateModalonClose}
        action={
          <Button
            mt="8"
            bg="secondary.500"
            _hover={{ bg: "secondary.500", color: "#fff" }}
            color="#fff"
            fontFamily="Roboto"
            w="full"
            onClick={() => {
              sessionStorage.setItem(
                "service",
                JSON.stringify({
                  name: "Home Construction",
                  type: "home_construction",
                  image: "/images/home_construction.png",
                  estimatedCost: "20,000",
                  constructionItems: selectedItemsList,
                })
              );
              push("/book-appointment");
            }}
          >
            Book Appointment
          </Button>
        }
      />
    </Box>
  );
}
