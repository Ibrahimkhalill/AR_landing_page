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
import {
	ArrowRight,
	ChevronRight,
	QrCode,
	UploadCloud,
	Utensils,
	Smartphone,
	Star,
	TrendingUp,
	ClipboardList,
	Settings,
	Layers3,
	Eye,
	Rotate3D,
	ZoomIn,
	PlayCircle,
	RefreshCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React from 'react';
import RestaurantRegistrationModal from '@/components/RestaurantRegistrationModal';
import LazyLoadModelViewer from '@/components/LazyLoadModelViewer';
import LazyLoadVideo from '@/components/LazyLoadVideo';

const Index = () => {
	const isMobile = useIsMobile();
	const [showModal, setShowModal] = React.useState(false);

	return (
		<div className="flex flex-col min-h-screen">
			<RestaurantRegistrationModal
				open={showModal}
				onOpenChange={setShowModal}
			/>

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

			<main className="flex-1">
				<section className="w-full py-20 bg-gradient-to-b from-background via-background to-secondary/20">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
									Next-Generation 3D Experience
								</div>
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
									Turn Your Menu Into an{' '}
									<span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
										AR Experience!
									</span>
								</h1>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Give your customers a taste of the future with 3D models of
									every dish—accessible with just a QR scan.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="group animate-pulse hover:animate-none"
									onClick={() => setShowModal(true)}>
									Book a Demo
									<ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</div>
						</div>
					</div>
					<div className="container px-4 md:px-6 mt-16">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="rounded-lg border bg-card shadow-sm overflow-hidden relative">
								<LazyLoadModelViewer src="https://ar-menu-bucket-jvai-files.s3-accelerate.amazonaws.com/static_files/pizza.glb" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
							</div>
							<div className=" relative rounded-lg border bg-card shadow-sm overflow-hidden">
								<LazyLoadModelViewer src="https://ar-menu-bucket-jvai-files.s3-accelerate.amazonaws.com/static_files/haniban.glb" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="how-it-works"
					className="w-full py-5 md:py-24 bg-secondary/20">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
									How It Works
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									A simple 4-step process to revolutionize your restaurant's
									dining experience
								</p>
							</div>
						</div>
						<div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="rounded-full bg-primary p-4">
									<Utensils className="h-6 w-6 text-primary-foreground" />
								</div>
								<h3 className="text-xl font-bold">You Register</h3>
								<p className="text-muted-foreground">
									Restaurant signs up through our landing page or dashboard
								</p>
							</div>
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="rounded-full bg-primary p-4">
									<UploadCloud className="h-6 w-6 text-primary-foreground" />
								</div>
								<h3 className="text-xl font-bold">You Add Your Menu</h3>
								<p className="text-muted-foreground">
									Upload your food items, images, and descriptions
								</p>
							</div>
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="rounded-full bg-primary p-4">
									<Layers3 className="h-6 w-6 text-primary-foreground" />
								</div>
								<h3 className="text-xl font-bold">We 3D-ify Your Dishes</h3>
								<p className="text-muted-foreground">
									Our system converts the images to stunning 3D AR models
								</p>
							</div>
							<div className="flex flex-col items-center text-center space-y-4">
								<div className="rounded-full bg-primary p-4">
									<QrCode className="h-6 w-6 text-primary-foreground" />
								</div>
								<h3 className="text-xl font-bold">
									Your Customers Experience It
								</h3>
								<p className="text-muted-foreground">
									We give you a restaurant web page + unique QR codes for each
									table
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="features"
					className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-secondary/10">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
									Experience the Future of Dining
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Immerse your customers in a lifelike 3D AR menu that brings
									dishes to life.
								</p>
							</div>
						</div>

						<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
							<div className="space-y-4">
								<div className="rounded-lg border bg-card shadow-sm overflow-hidden relative group">
									<img
										src="/demo_starbucs.jpg"
										alt="3D Food Model Demo"
										className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
										<p className="text-white text-sm font-medium">
											Preview your dish in stunning 2d detail.
										</p>
									</div>
								</div>
								<div className="rounded-lg border bg-card shadow-sm overflow-hidden relative group">
									<LazyLoadModelViewer src="https://ar-menu-bucket-jvai-files.s3-accelerate.amazonaws.com/static_files/starbucks_coffee.glb" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
										<p className="text-white text-sm font-medium">
											Preview your dish in stunning 3D detail.
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-6">
								<h3 className="text-2xl font-bold ">
									Switch Between Classic & AR Views
								</h3>
								<div className="flex flex-col space-y-4">
									<Accordion
										type="single"
										collapsible
										className="w-full border rounded-lg shadow-sm">
										<AccordionItem value="2d-menu">
											<AccordionTrigger className="hover:bg-accent px-4">
												2D Menu (Traditional)
											</AccordionTrigger>
											<AccordionContent>
												<div className="rounded-lg bg-card p-4">
													<p className="text-sm text-muted-foreground">
														Traditional flat images that lack depth, limiting
														the customer’s ability to fully visualize your
														dishes.
													</p>
												</div>
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="3d-menu">
											<AccordionTrigger className="hover:bg-accent px-4">
												3D Interactive AR View
											</AccordionTrigger>
											<AccordionContent>
												<div className="rounded-lg bg-card p-4 space-y-4">
													<p className="text-sm text-muted-foreground">
														Explore lifelike 3D models—rotate, zoom, and place
														dishes in the real world using AR technology.
													</p>
													<div className="flex justify-center">
														<a
															href="https://demo-restaurant.crocoshark.com/"
															target="_blank">
															<Button
																size="sm"
																className="bg-primary hover:bg-primary/90">
																Launch AR Demo Restaurant
															</Button>
														</a>
													</div>
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
								<div className="flex flex-col space-y-4">
									<h4 className="font-bold text-lg">
										What Makes JVAI FoodAR Special:
									</h4>
									<ul className="space-y-3">
										<li className="flex items-center">
											<Rotate3D className="h-6 w-6 text-primary shrink-0 mr-3" />
											<span className="text-foreground">
												360° Rotation: Spin your dishes around with ease and see
												every yummy angle!
											</span>
										</li>
										<li className="flex items-center">
											<Eye className="h-6 w-6 text-primary shrink-0 mr-3" />
											<span className="text-foreground">
												AR Placement: Place virtual dishes right on your table
												for a fun, real-life preview!
											</span>
										</li>
										<li className="flex items-center">
											<ZoomIn className="h-6 w-6 text-primary shrink-0 mr-3" />
											<span className="text-foreground">
												In-Depth Details: Zoom in to explore ingredients,
												textures, and how it’s all served up!
											</span>
										</li>

										<li className="flex items-center">
											<RefreshCw className="h-6 w-6 text-primary shrink-0 mr-3" />
											<span className="text-foreground">
												Real-Time Updates: Keep your menu fresh with instant
												changes anytime!
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="benefits"
					className="w-full py-12 md:py-24 bg-secondary/20">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
									Benefits for Restaurants
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Why leading restaurants are switching to 3D AR menus
								</p>
							</div>
						</div>
						<div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-4">
										<Star className="h-10 w-10 text-primary" />
										<h3 className="text-xl font-bold">Impress Diners</h3>
										<p className="text-muted-foreground">
											Wow your customers with futuristic menus that enhance
											their dining experience
										</p>
									</div>
								</CardContent>
							</Card>
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-4">
										<TrendingUp className="h-10 w-10 text-primary" />
										<h3 className="text-xl font-bold">Boost Orders</h3>
										<p className="text-muted-foreground">
											Increase sales through realistic 3D food previews that
											entice customers to order more
										</p>
									</div>
								</CardContent>
							</Card>
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-4">
										<ClipboardList className="h-10 w-10 text-primary" />
										<h3 className="text-xl font-bold">Easy Management</h3>
										<p className="text-muted-foreground">
											User-friendly dashboard for managing your 3D menu items
											and updating in real-time
										</p>
									</div>
								</CardContent>
							</Card>
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-4">
										<Smartphone className="h-10 w-10 text-primary" />
										<h3 className="text-xl font-bold">Works Everywhere</h3>
										<p className="text-muted-foreground">
											Compatible with all smartphones and devices—no app
											download required
										</p>
									</div>
								</CardContent>
							</Card>
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-4">
										<QrCode className="h-10 w-10 text-primary" />
										<h3 className="text-xl font-bold">QR Code Integration</h3>
										<p className="text-muted-foreground">
											Seamless table access through custom QR codes that enhance
											the dining experience
										</p>
									</div>
								</CardContent>
							</Card>
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-4">
										<Settings className="h-10 w-10 text-primary" />
										<h3 className="text-xl font-bold">Full Control</h3>
										<p className="text-muted-foreground">
											Customize your 3D menu to match your brand and
											restaurant's unique style
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section id="preview" className="w-full py-12 md:py-24">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
									Live Restaurant Page Preview
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									See how your restaurant's AR menu web page will look to
									customers
								</p>
							</div>
						</div>
						<div className="mx-auto mt-12 w-[80%]">
							<div className="relative group shadow-md border rounded-xl">
								{/* <video
									src="https://ar-menu-bucket-jvai-files.s3-accelerate.amazonaws.com/static_files/demo.mp4"
									loop
									muted
									autoPlay
									className="w-full h-[500px] object-cover rounded-xl md:h-[600px] lg:h-[700px]"
								/> */}
								{/* Dark overlay over the entire video */}

								<LazyLoadVideo src="https://ar-menu-bucket-jvai-files.s3-accelerate.amazonaws.com/static_files/demo.mp4" />

								<div className="absolute inset-0 bg-gradient-to-t rounded-xl from-black/80 to-transparent opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none"></div>
							</div>
							<div className="flex flex-col items-center justify-center mt-8 space-y-4">
								<div className="bg-secondary/20 p-6 rounded-lg">
									<div className="flex flex-col items-center space-y-4">
										<img src="/qr.png" className="w-24" />
										<h3 className="text-xl font-bold">Try It Yourself</h3>
										<p className="text-center text-muted-foreground">
											Scan this QR code to experience a sample restaurant menu
											on your device
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <section
					id="testimonials"
					className="w-full py-12 md:py-24 bg-secondary/20">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									What Restaurants Say
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Hear from our satisfied restaurant partners
								</p>
							</div>
						</div>
						<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col space-y-4">
										<div className="flex items-center space-x-4">
											<div className="rounded-full bg-primary/20 p-2">
												<Utensils className="h-6 w-6 text-primary" />
											</div>
											<div>
												<h3 className="text-lg font-bold">Gourmet Delights</h3>
												<p className="text-sm text-muted-foreground">
													Fine Dining Restaurant
												</p>
											</div>
										</div>
										<p className="italic">
											"Since we added 3D menus, our order rates skyrocketed.
											Customers love exploring dishes in 3D before ordering."
										</p>
										<div className="flex">
											{Array(5)
												.fill(null)
												.map((_, i) => (
													<Star
														key={i}
														className="h-5 w-5 fill-primary text-primary"
													/>
												))}
										</div>
									</div>
								</CardContent>
							</Card>
							<Card className="hover:shadow-lg transition-shadow">
								<CardContent className="pt-6">
									<div className="flex flex-col space-y-4">
										<div className="flex items-center space-x-4">
											<div className="rounded-full bg-primary/20 p-2">
												<Utensils className="h-6 w-6 text-primary" />
											</div>
											<div>
												<h3 className="text-lg font-bold">Fusion Café</h3>
												<p className="text-sm text-muted-foreground">
													Modern Bistro
												</p>
											</div>
										</div>
										<p className="italic">
											"Our customers are blown away by the interactive 3D menu.
											It's become a talking point and differentiator for our
											café."
										</p>
										<div className="flex">
											{Array(5)
												.fill(null)
												.map((_, i) => (
													<Star
														key={i}
														className="h-5 w-5 fill-primary text-primary"
													/>
												))}
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
						<div className="mt-12 text-center">
							<h3 className="text-xl font-bold mb-6">
								Trusted by Restaurants Everywhere
							</h3>
							<div className="flex flex-wrap justify-center gap-8 opacity-70">
								{Array.from({ length: 6 }).map((_, index) => (
									<div
										key={index}
										className="h-12 w-24 rounded-md bg-muted flex items-center justify-center">
										<span className="text-sm font-medium">
											Restaurant {index + 1}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section> */}

				<section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
									Ready to Transform Your Menu?
								</h2>
								<p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
									Join hundreds of restaurants already delighting their
									customers with 3D AR menus
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									variant="secondary"
									className="group"
									onClick={() => setShowModal(true)}>
									Start Your 3D Menu Today
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>

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
										href="#features"
										className="text-sm text-muted-foreground hover:text-foreground">
										Features
									</a>
								</li>
								<li>
									<a
										href="#how-it-works"
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
};

export default Index;
