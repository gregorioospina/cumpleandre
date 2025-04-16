"use client";

import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { forwardRef, useMemo, useState } from "react";

const dialogItems = [
	{
		buttonText: "¿Quieres pre?",
		slideText: "CAE CON GUARO",
		color: "#e56734",
	},
	{
		buttonText: "¿Quieres after?",
		slideText: "CAE YA",
		color: "#2546ff",
	},
	{
		buttonText: "¿Quieres rumba?",
		slideText: "QUÉ ESPERAS",
		color: "#10b567",
	},
];

export default function CentralDialog() {
	const items = useMemo(() => [0, 1, 2], []);

	const [selectedItem, setSelectedItem] = useState(items[0]);
	const [direction, setDirection] = useState<1 | -1>(1);

	function setSlide(newDirection: 1 | -1) {
		const nextItem = wrap(0, items.length, selectedItem + newDirection);
		console.log(nextItem);
		setSelectedItem(nextItem);
		setDirection(newDirection);
	}

	const color = useMemo(() => dialogItems[selectedItem].color, [selectedItem]);

	const slideText = useMemo(() => dialogItems[selectedItem].slideText, [selectedItem]);
	const leftButtonText = useMemo(() => dialogItems[wrap(0, items.length, selectedItem - 1)], [selectedItem, items]);
	const rightButtonText = useMemo(() => dialogItems[wrap(0, items.length, selectedItem + 1)], [items, selectedItem]);

	return (
		<div style={container}>
			{" "}
			<div className="flex max-w-[90px] flex-col justify-center items-center">
				<p className="text-xs text-nowrap mb-3 font-bold uppercase"> {leftButtonText.buttonText} </p>
				<motion.button
					initial={false}
					animate={{ backgroundColor: leftButtonText.color }}
					aria-label="Previous"
					style={button}
					onClick={() => setSlide(-1)}
					whileFocus={{ outline: `2px solid ${color}` }}
					whileTap={{ scale: 0.9 }}>
					<p>{"<"}</p>
				</motion.button>
			</div>
			<AnimatePresence custom={direction} initial={false} mode="popLayout">
				<Slide key={selectedItem} color={color} text={slideText} />
			</AnimatePresence>
			<div className="flex  max-w-[90px] flex-col justify-center items-center">
				<p className="text-xs text-nowrap mb-3"> {rightButtonText.buttonText} </p>
				<motion.button
					initial={false}
					animate={{ backgroundColor: rightButtonText.color }}
					aria-label="Next"
					style={button}
					onClick={() => setSlide(1)}
					whileFocus={{ outline: `2px solid ${color}` }}
					whileTap={{ scale: 0.9 }}>
					<p>{">"}</p>
				</motion.button>
			</div>
		</div>
	);
}

const Slide = forwardRef(function Slide({ color, text }: { color: string; text: string }, ref: React.Ref<HTMLDivElement>) {
	const direction = usePresenceData();
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: direction * 50 }}
			animate={{
				opacity: 1,
				x: 0,
				transition: {
					delay: 0.2,
					type: "spring",
					visualDuration: 0.3,
					bounce: 0.4,
				},
			}}
			exit={{ opacity: 0, x: direction * -50 }}
			style={{ ...box, backgroundColor: color }}>
			<div className="w-full p-2 h-full flex justify-center items-center">
				<p className="text-3xl font-bold">{text}</p>
			</div>
		</motion.div>
	);
});

const container: React.CSSProperties = {
	display: "flex",
	position: "relative",
	width: "100%",
	justifyContent: "space-around",
	alignItems: "center",
	gap: 10,
};

const box: React.CSSProperties = {
	width: 150,
	height: 150,
	backgroundColor: "#0cdcf7",
	borderRadius: "10px",
};

const button: React.CSSProperties = {
	width: 40,
	height: 40,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	zIndex: 1,
	outlineOffset: 2,
};
