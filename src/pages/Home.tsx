"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "../styles/pages/Home.css";
import Welcome from "@/components/Home/Welcome";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";

export default function Home() {
    return (
      <>
        <NavBar/>
        <Welcome/>
        <Portfolio/>
        <Services/>
        <Footer/>
      </>
    );
  }
  