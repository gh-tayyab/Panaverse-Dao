import CoreTrack from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import SpecializeTrack from "@/components/widgets/SpecializeTrack";
import Web from "@/components/widgets/Web";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero />
  <CoreTrack />
  <SpecializeTrack />
  <Web />
  </>
  );
}
