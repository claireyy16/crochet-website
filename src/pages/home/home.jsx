import React from "react";
import styles from "./home.css";

export const Home = () => {
	return (
		<div className="home">
			<h1 className="title">home</h1>
			<p className="intro">
					{" "}
					hello, welcome to my shop and my page!<br></br>
					here is a bit about me:
				</p>
			<div className="textIntro">
				<ul className="meList">
					<li>i am a young adult cancer survivor and advocate</li>
					<li>i am an undergraduate computer science student</li>
					<li>i love creating, especially crocheting</li>
				</ul>
				<p className='about'>
					i initially learned to crochet after looking at my friend's request
					for a mushroom bucket hat and saying "that looks easy". <br></br>
					it was not easy. <br></br>
					but, i found something i could use to pass time in the hospital, and
					before long i was in love.
				</p>
			</div>
		</div>
	);
};
