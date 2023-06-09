import Head from 'next/head';
import { HeroSection } from '@/components/section/hero-section';
import { BroughtSection } from '@/components/section/brought-section';
import { Header } from '@/components/layout/header';
import { Carousel } from '@/components/ui/carousel/carousel';
import { useEffect, useState } from 'react';

export default function Home() {
	const [pageData, setPageData] = useState({
		heroSection: { sliderImages: [] },
	});

	useEffect(() => {
		fetch('data/home-page.json')
			.then((data) => data.json())
			.then((data) => setPageData(data));
	}, []);

	const { heroSection } = pageData;

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header
				hasMobileCta
				navItems={[
					{
						text: 'Events',
						href: './',
					},
					{
						text: 'My Stream Passes',
						href: './',
					},
					{
						text: 'FAQ’s',
						href: './',
					},
				]}
			/>
			<main>
				<HeroSection {...heroSection}>
					{heroSection.sliderImages.length > 0 && (
						<Carousel
							list={[...heroSection.sliderImages, ...heroSection.sliderImages]}
						/>
					)}
				</HeroSection>
				<BroughtSection title="Brought to you by">
					<p>
						Africa to the World is a movement pioneered by uduX - Africa’s first
						indigenous music platform.
					</p>
					<p>
						For us this platform is the express path to a global audience. From
						Africa to the world and back to Africa.
					</p>
					<p>
						We want you to experience alongside Africa’s biggest stars, powered
						by the belief that <br /> - One day you’ll be the master of your own
						stage.
					</p>
				</BroughtSection>
			</main>
		</>
	);
}
