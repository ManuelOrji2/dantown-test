import closeIcon from "../../../public/images/Group 32.png";
import sendIcon from "../../../public/images/Group 96.png";
import smilingEmoji from "../../../public/images/Group 42.png";

import Image from "next/image";

const Modal = () => {
	return (
		<section className="h-[311px] flex flex-col gap-[15px] bg-white rounded-[20px]">
			<div className="bg-[#5DC2C4] py-[16px] px-[24px] flex items-center justify-between rounded-[20px] rounded-b">
				<h1 className="text-[#fff] text-[16px]">Ironmen</h1>
				<div className="cursor-pointer">
					<Image src={closeIcon} alt="" />
				</div>
			</div>
			<div className="flex flex-col items-center gap-[30px] px-[20px]">
				<div className="w-[68px] bg-[#072E75] text-[#fff] text-[13px] rounded-[15px] px-2 py-1 text-center">
					Today
				</div>
				<div className="flex flex-col gap-[16px]">
					<div className="flex items-end gap-2">
						<span className="text-[13px] text-[#5DC2C4] bg-[#E0F3F3] rounded-[15px] p-3">
							When will the event be held?
						</span>
						<span className="text-[#8695A0] text-[13px]">10:22 am</span>
					</div>
					<div className="flex items-end gap-2 justify-end">
						<span className="text-[#8695A0] text-[13px]">10:24 am</span>
						<span className="text-[13px] text-[#fff] bg-[#5DC2C4] rounded-[15px] p-3">
							Tommorow at 4 pm
						</span>
					</div>
					<div className="flex items-center gap-[10px] mt-[4px]">
						<div className="flex items-center justify-between px-3 py-2 rounded-[15px] border border-[#D6DCE0] ">
							<input
								className="outline-none placeholder:text-[12px]"
								type="text"
								placeholder="Type here..."
							/>
							<Image className="cursor-pointer" src={smilingEmoji} alt="" />
						</div>{" "}
						<div className="cursor-pointer">
							<Image src={sendIcon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Modal;
