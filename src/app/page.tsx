"use client";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import EnteringImg from "./components/entering-img";

const topContent = [
	"/img/top/after.png",
	"/img/top/guaro.png",
	"/img/top/where.png",
	"/img/top/pre.png",
	"/img/top/rumba.png",
	"/img/top/when.png",
	"/img/top/where.png",
];

const bottomContent = [
	"/img/bottom/after.png",
	"/img/bottom/guaro.png",
	"/img/bottom/where.png",
	"/img/bottom/pre.png",
	"/img/bottom/rumba.png",
	"/img/bottom/when.png",
	"/img/bottom/where.png",
];

export default function Home() {
	const [showCentralDialog, setShowCentralDialog] = useState<boolean>(false);

	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	useEffect(() => {
		setInterval(() => {
			setSelectedIndex((p) => {
				if (p + 1 > topContent.length) {
					return 0;
				} else return p + 1;
			});
		}, 2700);
	}, []);

	return (
		<div
			className={`grid ${
				showCentralDialog ? " text-black" : "bg-black text-white"
			} grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
			{showCentralDialog && (
				<>
					{" "}
					<EnteringImg imgSrc="/img/1.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/2.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/3.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/4.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/5.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/6.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/7.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/8.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/9.jpg" on={showCentralDialog} />
					<EnteringImg imgSrc="/img/10.jpg" on={showCentralDialog} />
				</>
			)}
			<main className="flex justify-center z-50 w-full flex-col gap-[32px] row-start-2 items-center ">
				{!showCentralDialog && (
					<>
						<p className="text-lg"> Andre te invita a su cumpleaños</p>
						<button onClick={() => setShowCentralDialog(true)} className="text-xs p-2 border border-white rounded-lg">
							Haz clic aquí para ver de qué se trata
						</button>
					</>
				)}
				{showCentralDialog && (
					<div className="flex z-50 rounded-lg bg-cover bg-center bg-[url('/img/jee.JPG')] shadow-2xl fixed w-[80%] max-w-[600px] aspect-square ">
						{topContent.map((tc, i) => (
							<AnimatePresence key={"top" + tc} initial={false}>
								{selectedIndex === i ? (
									<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
										<img className="absolute top-[-50px] right-0" src={tc} height={"80px"} alt="house" />
									</motion.div>
								) : null}
							</AnimatePresence>
						))}
						{bottomContent.map((tc, i) => (
							<AnimatePresence key={"bottom" + tc} initial={false}>
								{selectedIndex === i ? (
									<motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} key="box">
										<img className="absolute bottom-[-50px] left-0" src={tc} height={"80px"} alt="date" />
									</motion.div>
								) : null}
							</AnimatePresence>
						))}
					</div>
				)}
			</main>
		</div>
	);
}
