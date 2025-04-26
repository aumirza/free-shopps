"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2024-04-01", sale: 222, mobile: 150 },
  { date: "2024-04-02", sale: 97, mobile: 180 },
  { date: "2024-04-03", sale: 167, mobile: 120 },
  { date: "2024-04-04", sale: 242, mobile: 260 },
  { date: "2024-04-05", sale: 373, mobile: 290 },
  { date: "2024-04-06", sale: 301, mobile: 340 },
  { date: "2024-04-07", sale: 245, mobile: 180 },
  { date: "2024-04-08", sale: 409, mobile: 320 },
  { date: "2024-04-09", sale: 59, mobile: 110 },
  { date: "2024-04-10", sale: 261, mobile: 190 },
  { date: "2024-04-11", sale: 327, mobile: 350 },
  { date: "2024-04-12", sale: 292, mobile: 210 },
  { date: "2024-04-13", sale: 342, mobile: 380 },
  { date: "2024-04-14", sale: 137, mobile: 220 },
  { date: "2024-04-15", sale: 120, mobile: 170 },
  { date: "2024-04-16", sale: 138, mobile: 190 },
  { date: "2024-04-17", sale: 446, mobile: 360 },
  { date: "2024-04-18", sale: 364, mobile: 410 },
  { date: "2024-04-19", sale: 243, mobile: 180 },
  { date: "2024-04-20", sale: 89, mobile: 150 },
  { date: "2024-04-21", sale: 137, mobile: 200 },
  { date: "2024-04-22", sale: 224, mobile: 170 },
  { date: "2024-04-23", sale: 138, mobile: 230 },
  { date: "2024-04-24", sale: 387, mobile: 290 },
  { date: "2024-04-25", sale: 215, mobile: 250 },
  { date: "2024-04-26", sale: 75, mobile: 130 },
  { date: "2024-04-27", sale: 383, mobile: 420 },
  { date: "2024-04-28", sale: 122, mobile: 180 },
  { date: "2024-04-29", sale: 315, mobile: 240 },
  { date: "2024-04-30", sale: 454, mobile: 380 },
  { date: "2024-05-01", sale: 165, mobile: 220 },
  { date: "2024-05-02", sale: 293, mobile: 310 },
  { date: "2024-05-03", sale: 247, mobile: 190 },
  { date: "2024-05-04", sale: 385, mobile: 420 },
  { date: "2024-05-05", sale: 481, mobile: 390 },
  { date: "2024-05-06", sale: 498, mobile: 520 },
  { date: "2024-05-07", sale: 388, mobile: 300 },
  { date: "2024-05-08", sale: 149, mobile: 210 },
  { date: "2024-05-09", sale: 227, mobile: 180 },
  { date: "2024-05-10", sale: 293, mobile: 330 },
  { date: "2024-05-11", sale: 335, mobile: 270 },
  { date: "2024-05-12", sale: 197, mobile: 240 },
  { date: "2024-05-13", sale: 197, mobile: 160 },
  { date: "2024-05-14", sale: 448, mobile: 490 },
  { date: "2024-05-15", sale: 473, mobile: 380 },
  { date: "2024-05-16", sale: 338, mobile: 400 },
  { date: "2024-05-17", sale: 499, mobile: 420 },
  { date: "2024-05-18", sale: 315, mobile: 350 },
  { date: "2024-05-19", sale: 235, mobile: 180 },
  { date: "2024-05-20", sale: 177, mobile: 230 },
  { date: "2024-05-21", sale: 82, mobile: 140 },
  { date: "2024-05-22", sale: 81, mobile: 120 },
  { date: "2024-05-23", sale: 252, mobile: 290 },
  { date: "2024-05-24", sale: 294, mobile: 220 },
  { date: "2024-05-25", sale: 201, mobile: 250 },
  { date: "2024-05-26", sale: 213, mobile: 170 },
  { date: "2024-05-27", sale: 420, mobile: 460 },
  { date: "2024-05-28", sale: 233, mobile: 190 },
  { date: "2024-05-29", sale: 78, mobile: 130 },
  { date: "2024-05-30", sale: 340, mobile: 280 },
  { date: "2024-05-31", sale: 178, mobile: 230 },
  { date: "2024-06-01", sale: 178, mobile: 200 },
  { date: "2024-06-02", sale: 470, mobile: 410 },
  { date: "2024-06-03", sale: 103, mobile: 160 },
  { date: "2024-06-04", sale: 439, mobile: 380 },
  { date: "2024-06-05", sale: 88, mobile: 140 },
  { date: "2024-06-06", sale: 294, mobile: 250 },
  { date: "2024-06-07", sale: 323, mobile: 370 },
  { date: "2024-06-08", sale: 385, mobile: 320 },
  { date: "2024-06-09", sale: 438, mobile: 480 },
  { date: "2024-06-10", sale: 155, mobile: 200 },
  { date: "2024-06-11", sale: 92, mobile: 150 },
  { date: "2024-06-12", sale: 492, mobile: 420 },
  { date: "2024-06-13", sale: 81, mobile: 130 },
  { date: "2024-06-14", sale: 426, mobile: 380 },
  { date: "2024-06-15", sale: 307, mobile: 350 },
  { date: "2024-06-16", sale: 371, mobile: 310 },
  { date: "2024-06-17", sale: 475, mobile: 520 },
  { date: "2024-06-18", sale: 107, mobile: 170 },
  { date: "2024-06-19", sale: 341, mobile: 290 },
  { date: "2024-06-20", sale: 408, mobile: 450 },
  { date: "2024-06-21", sale: 169, mobile: 210 },
  { date: "2024-06-22", sale: 317, mobile: 270 },
  { date: "2024-06-23", sale: 480, mobile: 530 },
  { date: "2024-06-24", sale: 132, mobile: 180 },
  { date: "2024-06-25", sale: 141, mobile: 190 },
  { date: "2024-06-26", sale: 434, mobile: 380 },
  { date: "2024-06-27", sale: 448, mobile: 490 },
  { date: "2024-06-28", sale: 149, mobile: 200 },
  { date: "2024-06-29", sale: 103, mobile: 160 },
  { date: "2024-06-30", sale: 446, mobile: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  sale: {
    label: "sale",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function SalesChart() {
  const months = React.useMemo(
    () =>
      chartData
        .map((item) => {
          const date = new Date(item.date);
          return date.toLocaleDateString("en-US", {
            month: "long",
          });
        })
        .filter((value, index, self) => self.indexOf(value) === index),
    []
  );

  const [month, setMonth] = React.useState(months[0]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const selectedMonth = new Date(
      Date.parse(`1 ${month} ${new Date().getFullYear()}`)
    );
    return date.getMonth() === selectedMonth.getMonth();
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 sm:flex-row">
        <CardTitle>
          <h3 className="text-xl font-semibold">Sales</h3>
        </CardTitle>
        <Select value={month} onValueChange={setMonth}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select a Month" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {months.map((month, i) => (
              <SelectItem
                key={month}
                value={month}
                defaultChecked={i === 0}
                className="rounded-lg"
              >
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sale)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sale)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={20}
              minTickGap={25}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={30} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dot={true}
              dataKey="sale"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-sale)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
