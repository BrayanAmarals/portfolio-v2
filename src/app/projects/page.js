import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-4xl">In development...</h1>
      <Link
        href={"/"}
        className="text-[#E2E8F0] text-base font-medium tracking-tight flex flex-row gap-2 mt-10"
      >
        Back to the Home <Icon icon="mdi:arrow-top-right"></Icon>
      </Link>
    </div>
  );
}
