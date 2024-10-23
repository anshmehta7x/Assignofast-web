"use client"
import React, {useEffect,useState} from 'react';

const CountUpAnimation = ({
	iconComponent,
	initialValue,
	targetValue,
	text,
}) => {
	const [count, setCount] = useState(initialValue);
	const duration = 8000;

	useEffect(() => {
		let startValue = initialValue;
		const interval = Math.floor(
			duration / (targetValue - initialValue));

		const counter = setInterval(() => {
			startValue += 1;
			setCount(startValue);
			if (startValue >= targetValue) {
				clearInterval(counter);
			}
		}, interval);

		return () => {
			clearInterval(counter);
		};
	}, [targetValue, initialValue]);

	return (
		<div className="container">
			<div className="icon">{iconComponent}</div>
			<span className="num">{count}</span>
			<span className="text">{text}</span>
		</div>
	);
};

    export default function Stats() {
    const statsData = [
        { initialValue:0, targetValue: 2200, label: "Followers", addn:"+" },
        { initialValue:0,targetValue: 120, label: "Projects",addn:"+" },
        { initialValue:0,targetValue: 97, label: "Awards", addn:"+" }
    ];


    return (
        <section className="bg-black text-white p-6 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        GET ACQUAINTED WITH <br className="hidden md:inline" /> OUR KEY FACTS
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end md:w-2/3">
                    {statsData.map((stat, index) => {
                        
                        return (
                            <div key={index} className="p-4 m-2 text-center w-auto lg:mr-12 lg:ml-12">
                                <CountUpAnimation
                                initialValue={stat.initialValue}
                                targetValue={stat.targetValue}
                                text={stat.addn}
                                />
                                <p>{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}