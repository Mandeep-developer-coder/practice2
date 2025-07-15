import { Hero } from "../components/Hero"
import { CarCards } from "../components/CarCard"
import { Banner } from "../components/Banner"
import { Testimonial } from "../components/Testimonial"
import { NewsLetter } from "../components/NewsLetter"
export const Home=()=>{
    return(
        <>
        <Hero></Hero>
        <CarCards/>
        <Banner></Banner>
        <Testimonial></Testimonial>
        <NewsLetter></NewsLetter>
        </>
    )

}