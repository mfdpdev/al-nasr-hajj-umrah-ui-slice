import Button from "../../components/button/Button"
import aboutus from "./../../assets/about.png"
export default function AboutUs(){
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <img src={aboutus} alt="" />
        </div>
        <div className="flex-2">
          <h1>A Wonderful Agency To Fulfill your Dreams</h1>
          <p>The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have been trusted since 2006 and have obtained a license from SAUDI ARABIA to become this travel agency.</p>
          <ul>
            <li>Flight Jakarta Saudi - Saudi Jakarta</li>
            <li>Tickets are included in the cost</li>
            <li>Comfortable hotel with rating of 4</li>
            <li>We cover the Visa Fee and it's Included</li>
          </ul>
          <Button>Learn More</Button>
        </div>
      </div>
    </>
  )
}
