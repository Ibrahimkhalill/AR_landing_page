import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGlobe } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React from 'react';
import RestaurantRegistrationModal from '@/components/RestaurantRegistrationModal';
export default function FAQ() {
	// State to track which FAQ is expanded
	const [expandedIndex, setExpandedIndex] = useState(null);
	const isMobile = useIsMobile();

	// FAQ data
	const faqs = [
		{
			question: 'How does your service work?',
			answer:
				"To start, fill out our contact form on our website, and our team will call you back to discuss your needs. After that, we create a new restaurant profile in our dashboard tailored to your business. Once set up, we provide you with dashboard access, allowing you to manage your restaurant details. You can then connect your own domain to your restaurant's menu homepage for a personalized online presence.",
		},
		{
			question: 'What is your pricing model, and do you offer custom pricing?',
			answer:
				"Our pricing is customized based on your restaurant's needs, such as menu size, features, and traffic volume. After you contact us via the form, we’ll call you to assess your requirements and propose a tailored pricing plan. Reach out through our contact form at [ourwebsite.com/contact] to get started with a quote.",
		},
		{
			question: 'How can I get support if I face any issues?',
			answer:
				'Support is available through our contact form on [ourwebsite.com/support]. Submit your query, and our team will call you back to assist. We aim to respond within 24 hours and resolve issues efficiently to keep your restaurant dashboard running smoothly.',
		},
		{
			question: 'What kind of maintenance or updates do you provide?',
			answer:
				'We regularly maintain and update our platform to enhance performance, security, and features. Updates to your restaurant dashboard, including new tools or menu options, are rolled out during off-peak hours. We notify you via email or through your dashboard in advance to minimize any disruption to your operations.',
		},
		{
			question: 'How long does the onboarding process take?',
			answer:
				'The onboarding process typically takes 2-3 business days after you submit the contact form. Once we call you back, we’ll gather necessary details, set up your restaurant profile, and provide dashboard access. Connecting your domain may add an additional day depending on your domain provider.',
		},
		{
			question: 'How do I connect my domain to the menu homepage?',
			answer:
				'After receiving dashboard access, log in and navigate to the "Domain Settings" section. Enter your domain name, follow the provided DNS configuration instructions, and verify ownership. Our support team is available via the contact form at [ourwebsite.com/support] if you need assistance with the setup.',
		},
		{
			question: 'What payment methods do you accept?',
			answer:
				'We accept bank transfers and major credit cards (Visa, MasterCard, American Express) for payment. After agreeing on a custom pricing plan, we’ll send an invoice to your registered email, with payment details included. Contact us at [ourwebsite.com/contact] for any payment-related queries.',
		},
		{
			question: 'Is my data secure with your service?',
			answer:
				'Yes, we prioritize your security. All data is encrypted using industry-standard SSL/TLS protocols, and your dashboard access is protected with strong password requirements and two-factor authentication (2FA). Regular security audits are conducted to ensure compliance with data protection standards.',
		},
		{
			question: 'Can I update my menu on the dashboard?',
			answer:
				'Yes, you can easily update your menu through the dashboard. Log in, go to the "Menu Management" section, and add, edit, or remove items as needed. Changes are live immediately after saving. We also provide periodic menu update suggestions based on customer trends—check your dashboard notifications.',
		},
		{
			question: 'What happens if there’s an outage or technical issue?',
			answer:
				'In case of an outage or technical issue, our team is notified automatically and works to resolve it promptly. You’ll receive an update via email or dashboard notification. For urgent issues, submit a request through [ourwebsite.com/support], and we’ll call you back to address the problem.',
		},
	];

	// Toggle FAQ expansion
	const toggleFAQ = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className="min-h-screen ">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95  ">
				<div className="container flex h-16 items-center">
					<div className="mr-4 hidden md:flex">
						<a href="/" className="mr-6 flex items-center space-x-2">
							<img src="/logo.jpg" className="w-10" />
							<span className="font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
								JVAI FoodAR
							</span>
						</a>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Product</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
											<li className="row-span-3">
												<NavigationMenuLink asChild>
													<a
														className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
														href="/">
														<img src="/logo.jpg" className="w-16" />
														<div className="mb-2 mt-4 text-lg font-medium">
															FoodAR
														</div>
														<p className="text-sm leading-tight text-muted-foreground">
															Turn your menu into an immersive 3D AR experience
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														href="#features"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
														<div className="text-sm font-medium leading-none">
															Features
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Explore our advanced 3D modeling technology
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														href="#how-it-works"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
														<div className="text-sm font-medium leading-none">
															How It Works
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Learn how to integrate 3D AR in your restaurant
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<a
														href="#benefits"
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
														<div className="text-sm font-medium leading-none">
															Benefits
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															Discover how AR menus increase customer engagement
														</p>
													</a>
												</NavigationMenuLink>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<div className="w-full flex-1 md:w-auto md:flex-none">
							{isMobile && (
								<div className="flex items-center">
									<img src="/logo.jpg" className="w-10" />
									<span className="font-bold ml-1">FoodAR</span>
								</div>
							)}
						</div>
						<nav className="flex items-center space-x-2">
							<Button onClick={() => setShowModal(true)}>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</nav>
					</div>
				</div>
			</header>

			{/* Container with max-width for desktop */}
			<div className=" mx-auto container ">
				<br />
				<h1 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
					Frequently Asked Questions
				</h1>
				<p className="text-gray-600 text-center mb-12">
					Everything you need to know about setting up and managing your
					restaurant’s online menu.
				</p>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden border">
							<button
								className="w-full flex justify-between items-center p-4 text-left focus:outline-none  px-5"
								onClick={() => toggleFAQ(index)}>
								<h2 className="text-lg font-semibold text-gray-800">
									{faq.question}
								</h2>
								{expandedIndex === index ? (
									<FaChevronUp className="text-blue-500" />
								) : (
									<FaChevronDown className="text-blue-500" />
								)}
							</button>
							{expandedIndex === index && (
								<div className="p-4 bg-gray-50">
									<p className="text-gray-600">{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
				<br />
			</div>
			<footer className="w-full py-6 md:py-12 border-t">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="flex flex-col space-y-4">
							<div className="flex items-center space-x-2">
								<img src="/logo.jpg" className="w-20" />
								<span className="font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
									JVAI FoodAR
								</span>
							</div>
							<p className="text-sm text-muted-foreground">
								Revolutionizing restaurant menus with AR technology and 3D food
								models.
							</p>
						</div>
						<div className="flex flex-col space-y-2">
							<h3 className="font-medium">Product</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="/#features"
										className="text-sm text-muted-foreground hover:text-foreground">
										Features
									</a>
								</li>
								<li>
									<a
										href="/#how-it-works"
										className="text-sm text-muted-foreground hover:text-foreground">
										How It Works
									</a>
								</li>
								<li>
									<a
										href="/faq"
										className="text-sm text-muted-foreground hover:text-foreground">
										FAQ
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col space-y-2">
							<h3 className="font-medium">Corporate Address</h3>
							<ul className="space-y-2">
								<li>
									<a className="text-sm text-muted-foreground hover:text-foreground">
										Daisy Garden, House 14,Block A, Banasree, main road,
										Dhaka-1219
									</a>
								</li>
								<li>
									<a
										href="mailto:info@bdcalling.com"
										className="text-sm text-muted-foreground hover:text-foreground">
										Email : info@bdcalling.com
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col space-y-2">
							<h3 className="font-medium">Other Branches Address</h3>
							<ul className="space-y-2">
								<li>
									<a className="text-sm text-muted-foreground hover:text-foreground">
										Kaderia Tower, 1st,2nd & 3rd Floor, Plot # JA-28, 8-B,
										Mohakhali Gulshan Road Dhaka 1212 (Opposition side of Brac
										Center)
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-muted-foreground">
							© 2025 JAVI (Sister concern of Betopia Group). All rights
							reserved.
						</p>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<a
								href="https://www.facebook.com/Betopia.Group"
								target="_blank"
								className="text-muted-foreground hover:text-foreground">
								<FaFacebook size={20} />
							</a>
							<a
								href="https://www.linkedin.com/company/betopiagroup/"
								target="_blank"
								className="text-muted-foreground hover:text-foreground">
								<IoLogoLinkedin size={21} />
							</a>
							<a
								href="https://www.betopiagroup.com/"
								target="_blank"
								className="text-muted-foreground hover:text-foreground">
								<FaGlobe size={20} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
