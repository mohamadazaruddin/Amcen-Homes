import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function StatsChart({ chartData }: any) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box maxW="full" mx="auto" fontFamily="Roboto">
      <Text fontSize="2xl" mb="4" textAlign="center">
        Website Statistics
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={6}
      >
        {/* Box containing the Pie Chart */}
        <Box flex="1" position="relative">
          <Box pos="absolute" top="130px" left="130px" textAlign="center">
            Total
            <br /> <strong>2000</strong>
          </Box>
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              innerRadius={70}
              fill="#8884d8"
              dataKey="value"
              //   label={({ name, value }) => `${name}: ${value}`}
            >
              {chartData?.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>

        {/* Box containing the Legends */}
        <Box flex="1">
          <Text fontSize="lg" fontWeight="bold" mb="4">
            Legends
          </Text>
          <Box>
            {chartData?.map((entry: any, index: number) => (
              <Flex
                key={entry.name}
                align="center"
                mb="2"
                fontSize="md"
                fontWeight="medium"
              >
                <Box
                  w="16px"
                  h="16px"
                  bg={COLORS[index % COLORS.length]}
                  mr="2"
                  borderRadius="full"
                />
                <Text>{`${entry.name}: ${entry.value}`}</Text>
              </Flex>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
