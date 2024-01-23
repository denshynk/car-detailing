import React from "react";
import Fullpage, {
	FullPageSections,
	FullpageSection,
	FullpageNavigation,
} from "@ap.cx/react-fullpage";

import ImageComponent from "./ImageComponent";
import { scroller } from "react-scroll";

const FullPageScroll = () => {
	const SectionStyle = {
		height: "100vh",
		width: "100%",
		display: "flex",
	};
	return (
		<>
			<Fullpage>
				<FullpageNavigation />
				<FullPageSections>
					<FullpageSection style={SectionStyle}>
						<div className="mainpage">
							<div className="centerBox">
								<p>Отримайте більше задоволення від Вашого авто разом з VVC</p>
								<h1>СУЧАСНА ДIТЕЙЛIНГ СТУДIЯ!</h1>
							</div>
						</div>
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<div className="secondpage">
							<div className="pageSlice mt-40">
								<h1>VVC - save and comfotr</h1>
								<ImageComponent />
							</div>
						</div>
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<h1>Screen 3</h1>
					</FullpageSection>
				</FullPageSections>
			</Fullpage>
		</>
	);
};

export default FullPageScroll;
