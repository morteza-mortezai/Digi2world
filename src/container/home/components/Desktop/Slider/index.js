import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@material-ui/core";
import step1 from "../../../../../assets/img/step1.svg";
import step2 from "../../../../../assets/img/step2.svg";
import step3 from "../../../../../assets/img/step3.svg";
export default function SliderComponent() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5500,

	};

	return (
		<Grid container justify="center" className="stepSlider">
			<Slider {...settings} >
				<div style={{margin:"0 10px"}}>
					<img src={step1} alt="step1" style={{width:"100%",borderRadius:10}} />
				</div>
				<div style={{margin:"0 10px"}}>
					<img src={step2} alt="step2" style={{width:"100%",borderRadius:10}} />
				</div>
				<div style={{margin:"0 10px"}}>
					<img src={step3} alt="step3" style={{width:"100%",borderRadius:10}} />
				</div>
			</Slider>
		</Grid>
	);
}
