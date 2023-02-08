import { React, useState } from "react";
import { DarkTagColor, LightTagColor } from "../colors/UtilityFunction";
import BannerImg from "../images/cross.svg";
function Banner({ bannerText, BannerColor, variant }) {
	const [isOpen, setIsOpen] = useState(true); // setting the state for closing the banner initially it is opened
	if (!isOpen) {
		return null;
	}
	const onCloseHandler = () => {
		// adding the functionality for closing the banner by clicking
		setIsOpen(false);
	};
	return (
		<>
			<div
				className="banner"
				style={{
					backgroundColor: `${LightTagColor(BannerColor)}`,
					borderColor: `${DarkTagColor(BannerColor)}`,
				}} // background color and border color of the banner based on the Banner prop passed by the user
			>
				<div className="banner-text">
					{/* user pass data */}
					{bannerText}
					<span style={{ color: "purple" }}>Learn more</span>
				</div>
				{/* cross image will be added based on the crossed variant and closed the banner by clicking on the cross image*/}
				<img
					src={variant === "crossed" ? BannerImg : ""}
					alt=""
					onClick={() => setIsOpen(false)}
					className="banner-image"
				/>
			</div>
		</>
	);
}

export default Banner;
