"use client";

import React from "react";

export default function Service({ params }: { params: { service: string } }) {
  console.log(params, "params");

  return <div> Welcome to {params.service} Page</div>;
}
