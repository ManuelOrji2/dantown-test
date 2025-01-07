import React from "react";
import Image from "next/image";

import Logo from "/public/images/logo.png";
import homeIcon from "/public/images/home.png";
import timeLineIcon from "/public/images/Group 224.png";
import communityIcon from "/public/images/Group 225.png";
import discoverIcon from "/public/images/Group 226.png";
import friendsIcon from "/public/images/Group 227.png";
import bookmarkIcon from "/public/images/Group 228.png";
import eventIcon from "/public/images/Group 229.png";
import discussionIcon from "/public/images/Group 230.png";

import sportsIcon from "/public/images/Group 216.png";
import gamingIcon from "/public/images/Group 212.png";
import musicIcon from "/public/images/Group 213.png";
import techNscienceIcon from "/public/images/Group 215.png";

const NavLinks = [
	{
		img: homeIcon,
		name: "Home",
	},
	{
		img: timeLineIcon,
		name: "Timeline",
	},
	{
		img: communityIcon,
		name: "Community",
	},
	{
		img: discoverIcon,
		name: "Discover",
	},
	{
		img: friendsIcon,
		name: "Friends",
	},
	{
		img: bookmarkIcon,
		name: "Bookmark",
	},
	{
		img: eventIcon,
		name: "Event",
	},
	{
		img: discussionIcon,
		name: "Discussion",
	},
];

const CategoryLinks = [
	{
		img: sportsIcon,
		name: "Sports",
	},
	{
		img: gamingIcon,
		name: "Gaming",
	},
	{
		img: musicIcon,
		name: "Music",
	},
	{
		img: techNscienceIcon,
		name: "Tech & Science",
	},
];

const Nav = () => {
	return (
		<nav className="w-[16.55%] h-[900] bg-white box-border flex flex-col gap-[45px] p-[42px]">
			<div className=" flex flex-col items-center gap-[37px]">
				<div>
					<Image src={Logo} alt="" />
				</div>
				<div className="flex flex-col p-5 gap-[37px]">
					{NavLinks.map((navlink) => (
						<div className=" flex items-center gap-[19px]" key={navlink.name}>
							<div>
								<Image src={navlink.img} alt="" />
							</div>
							<span className="text-[14px] text-[#8695A0]">{navlink.name}</span>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col items-center gap-[20px]">
				<h1 className="text-[16px] text-[#0F3F62] font-bold">Category</h1>
				<div className="flex flex-col gap-[20px] ">
					{CategoryLinks.map((link) => (
						<div className="flex items-center gap-[19px]" key={link.name}>
							<div>
								<Image src={link.img} />
							</div>
							<span className="text-[14px] text-[#8695A0]">{link.name}</span>
						</div>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
