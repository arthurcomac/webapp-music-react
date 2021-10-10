import React, { useState, useEffect } from "react";
import ButtonPlayer from 'styles/components/ButtonPlayer';

import { FaPlay, FaPause } from "react-icons/fa";

const Player = (payload) => {
	const [playing, setPlaying] = useState(false);

	const audio = new Audio(payload);

	const handle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing]);

	// useEffect(() => {
	// 	audio.addEventListener('ended', () => setPlaying(false));
	// 	return () => {
	// 		audio.removeEventListener('ended', () => setPlaying(false));
	// 	};
	// }, []);

	return (
		<ButtonPlayer onClick={handle}>{playing ? <FaPause /> : <FaPlay />}</ButtonPlayer>
	)
}

export default Player;
