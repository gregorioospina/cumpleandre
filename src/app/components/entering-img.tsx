import * as motion from "motion/react-client";
import { useCallback, useEffect, useState } from "react";
interface IEnteringImg {
	on: boolean;
	imgSrc: string;
}

const EnteringImg = ({ on, imgSrc }: IEnteringImg) => {
	const [x, setX] = useState<number>(0);
	const [y, setY] = useState<number>(0);
	const [rotate, setRotate] = useState<number>(0);

	const rearrange = useCallback(() => {
		const numX = window.innerWidth;
		const numY = window.innerHeight;

		const randomX = Math.random() * numX;
		const randomY = Math.random() * numY;
		const rotation = Math.random() * 180;

		console.log({ randomX, randomY, rotation });

		setRotate(rotation);
		setX(randomX - 200);
		setY(randomY);
	}, []);

	useEffect(() => {
		if (on) {
			rearrange();
		} else {
		}
	}, [on]);

	useEffect(() => {
		let interval;
		if (on) {
			interval = setInterval(() => rearrange(), 2000);
			rearrange();
		} else {
			setX(0);
			setY(0);
			clearInterval(interval);
		}
	}, [on]);

	return (
		<div className="fixed w-full h-full">
			<motion.div className="box" animate={{ x, y, rotate }} transition={{ type: "spring", duration: 2000 }}>
				<img src={imgSrc} height={140} width={140} alt="imageeee" />
			</motion.div>
		</div>
	);
};
export default EnteringImg;
