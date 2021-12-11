import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
    ArrowBackIosRounded,
    ArrowForwardIosRounded,
} from "@material-ui/icons"
import { blue } from "@material-ui/core/colors";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
        <ArrowForwardIosRounded className={className} style={{ ...style, color: blue[300], display: "block" }} />
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
        <ArrowBackIosRounded className={className} style={{ ...style, color: blue[300], display: "block" }}/>
      </div>
    )
  }

const LatestWorksList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
  };
  return (
    // TODO 画像ファイルが出力されない問題の解決
    <Slider {...settings}>
      <div>
        <img src="/images/20210331_mizu-zekkei_016-670x443.jpg" alt="img 1"></img>
      </div>
      <div>
        <img src="images/20210402_zekkei_030.jpg" alt="img 2"></img>
      </div>
      <div>
        <img src="src/images/contents-heading-department.jpg" alt="img 3"></img>
      </div>
      <div>
        <img src="/home/sugiyama/workspace/nit-workshop-showroom/src/images/d233868bb5f3332a721fdca88d75d980.jpg" alt="img 4"></img>
      </div>
    </Slider>
  )
}
export default LatestWorksList