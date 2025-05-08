import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight, Layers3 } from 'lucide-react';
import React from 'react';
import RestaurantRegistrationModal from '@/components/RestaurantRegistrationModal';

const PrivacyPolicy = () => {
	const isMobile = useIsMobile();
	const [showModal, setShowModal] = React.useState(false);

	return (
		<div className="flex flex-col min-h-screen">
			<RestaurantRegistrationModal
				open={showModal}
				onOpenChange={setShowModal}
			/>

			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center">
					<div className="mr-4 hidden md:flex">
						<a href="/" className="mr-6 flex items-center space-x-2">
							<Layers3 className="h-6 w-6" />
							<span className="font-bold">FoodAR</span>
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
														<Layers3 className="h-6 w-6" />
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
														href="/#features"
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
														href="/#how-it-works"
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
														href="/#benefits"
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
									<Layers3 className="h-6 w-6 mr-2" />
									<span className="font-bold">FoodAR</span>
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

			<main className="flex-1 bg-gradient-to-b from-background to-secondary/10">
				<section className="w-full py-12 md:py-24">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-6 text-center">
							<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
								Privacy Policy
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								At FoodAR, we’re committed to protecting your privacy. This
								policy explains how we handle your information with care.
							</p>
						</div>

						<div className="mt-12 space-y-8">
							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">
									1. Information We Collect
								</h2>
								<p className="text-muted-foreground">
									We collect information you provide when you sign up, such as
									your restaurant’s name, email, and menu details. We also
									gather usage data (like how customers interact with your AR
									menu) to improve our services.
								</p>
							</div>

							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">
									2. How We Use Your Information
								</h2>
								<p className="text-muted-foreground">
									Your data helps us create stunning 3D AR models, manage your
									account, and enhance your experience. We may also use it to
									send you updates or promotional offers (you can opt out
									anytime!).
								</p>
							</div>

							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">
									3. Sharing Your Information
								</h2>
								<p className="text-muted-foreground">
									We don’t sell your data. We only share it with trusted
									partners (like cloud providers) to deliver our services, and
									they’re bound by strict confidentiality agreements.
								</p>
							</div>

							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
								<p className="text-muted-foreground">
									You can access, update, or delete your data anytime through
									your dashboard. If you need help, just reach out to us at
									support@foodar.com.
								</p>
							</div>

							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">5. Security</h2>
								<p className="text-muted-foreground">
									We use industry-standard encryption to protect your data.
									However, no system is 100% secure, so we’re always working to
									keep your information safe.
								</p>
							</div>

							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">
									6. Changes to This Policy
								</h2>
								<p className="text-muted-foreground">
									We may update this policy from time to time. If we make big
									changes, we’ll notify you via email or a notice on our
									website.
								</p>
							</div>

							<div className="rounded-lg border bg-card shadow-sm p-6">
								<h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
								<p className="text-muted-foreground">
									Got questions? Email us at support@foodar.com or call us at
									+1-800-FOODAR. We’re here to help!
								</p>
							</div>
						</div>

						<div className="mt-12 text-center">
							<Button
								size="lg"
								className="group bg-primary hover:bg-primary/90"
								onClick={() => setShowModal(true)}>
								Join FoodAR Today
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</div>
				</section>
			</main>

			<footer className="w-full py-6 md:py-12 border-t">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="flex flex-col space-y-4">
							<div className="flex items-center space-x-2">
								<Layers3 className="h-6 w-6" />
								<span className="font-bold">FoodAR</span>
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
							</ul>
						</div>
						<div className="flex flex-col space-y-2">
							<h3 className="font-medium">Resources</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-sm text-muted-foreground hover:text-foreground">
										Blog
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-muted-foreground hover:text-foreground">
										Documentation
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col space-y-2">
							<h3 className="font-medium">Legal</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="/privacy-policy"
										className="text-sm text-muted-foreground hover:text-foreground">
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href="/terms-of-service"
										className="text-sm text-muted-foreground hover:text-foreground">
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-muted-foreground">
							© 2025 FoodAR. All rights reserved.
						</p>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5">
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
								</svg>
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5">
									<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
								</svg>
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default PrivacyPolicy;
