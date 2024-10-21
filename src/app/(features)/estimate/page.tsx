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
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
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

export default function Estimate() {
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(constructionItems[0]);
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
            Cost Estimator{" "}
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
                label="Select Floors"
                optionsList={floorsList}
                optionName="No of Floors"
                selectOption={selectedFloor}
                setOption={setSelectedFloor}
              />
              <EstimateSelectBox
                label="Select Area"
                optionsList={areaList}
                optionName="Area"
                selectOption={selectedArea}
                setOption={setSelectedArea}
              />
              <EstimateSelectBox
                label="Select City"
                optionsList={cityList}
                optionName="City"
                selectOption={selectedCity}
                setOption={setSelectedCity}
              />
            </Flex>
            <Box w="full" mt="5" bg="#ffffff" p="4" shadow="lg" rounded="lg">
              <Text mb="3" mt="4" fontSize="2xl" fontWeight="medium">
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
                      onClick={() => setSelectedItem(item)}
                      bg="#ffffff"
                      border="2px solid"
                      borderColor={
                        selectedItem?.name === item?.name
                          ? "primary.500"
                          : "#22232626"
                      }
                    >
                      <Box p="4">
                        <Image src={`${item.image}`} h="150px" />
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

                {selectedItem?.items.map((element: any, i: number) => (
                  <>{element?.name}</>
                ))}
              </Box>
            </Box>
          </Box>
          <Box w="30%">
            <Box bg="#ffffff" p="5" shadow="lg" rounded="lg">
              <Text
                mb="3"
                fontSize="lg"
                fontWeight="medium"
                fontFamily="Roboto"
                textTransform="capitalize"
              >
                Selected Items
              </Text>
            </Box>
            <Box mt="5" bg="#ffffff" p="5" shadow="lg" rounded="lg">
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
