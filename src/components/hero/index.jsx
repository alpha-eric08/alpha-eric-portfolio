import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

const Hero = () => {
  return (
    <div id="home"
    className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
  >
        <LeftColumn />
        <RightColumn />
    </div>
  )
}

export default Hero