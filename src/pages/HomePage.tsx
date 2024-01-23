"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "../styles/pages/Home.css";
import Welcome from "@/components/HomePage/Welcome";
import Portfolio from "@/components/HomePage/Portfolio";
import Services from "@/components/HomePage/Services";
import Brands from "@/components/HomePage/Brands";
import ProgressSteps from "@/components/HomePage/ProgressSteps";
import Reviews from "@/components/HomePage/Reviews";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Welcome />
      <Brands />
      <Portfolio />
      <Services />
      <ProgressSteps />
      <Reviews />
      <Footer />
    </>
  );
}
