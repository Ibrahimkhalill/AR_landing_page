import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, ChevronRight, QrCode, UploadCloud, Utensils, Smartphone, Star, TrendingUp, ClipboardList, Settings, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";
import RestaurantRegistrationModal from "@/components/RestaurantRegistrationModal";

const Index = () => {
  const isMobile = useIsMobile();
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <RestaurantRegistrationModal open={showModal} onOpenChange={setShowModal} />
      
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
                            href="/"
                          >
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
                            href="#features"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
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
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
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
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
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
                <NavigationMenuItem>
                  <Link to="#pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="#testimonials" className={navigationMenuTriggerStyle()}>
                    Testimonials
                  </Link>
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
              <Button variant="outline" className="hidden md:flex">
                Log in
              </Button>
              <Button>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background via-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                  Next-Generation Restaurant Technology
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Turn Your Menu Into an{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    AR Experience!
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Give your customers a taste of the future with 3D models of every dish—accessible with just a QR scan.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group animate-pulse hover:animate-none"
                  onClick={() => setShowModal(true)}
                >
                  Book a Demo
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  See It In Action
                </Button>
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-6 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hero Section Main Image */}
              <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
                    alt="Delicious Food in 3D" 
                    className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              
              {/* Hero Section Secondary Image */}
              <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" 
                    alt="Restaurant Experience" 
                    className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A simple 4-step process to revolutionize your restaurant's dining experience
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
                <h3 className="text-xl font-bold">Your Customers Experience It</h3>
                <p className="text-muted-foreground">
                  We give you a restaurant web page + unique QR codes for each table
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See It In Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Watch how customers can interact with your menu in 3D AR
                </p>
              </div>
            </div>
            
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
              <div className="space-y-4">
                <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1565299543923-37dd37887442"
                    alt="3D Food Model Demo"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288"
                    alt="Interactive Food Visualization"
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Toggle Between Views</h3>
                <div className="flex flex-col space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="2d-menu">
                      <AccordionTrigger>2D Menu (Traditional)</AccordionTrigger>
                      <AccordionContent>
                        <div className="rounded-lg border bg-card p-4">
                          <p className="text-sm text-muted-foreground">
                            Static images that don't fully represent your delicious offerings. Customers can only see flat photos.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3d-menu">
                      <AccordionTrigger>3D Interactive View (AR)</AccordionTrigger>
                      <AccordionContent>
                        <div className="rounded-lg border bg-card p-4 space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Fully interactive 3D models that customers can rotate, zoom, and place in their real environment through AR.
                          </p>
                          <div className="flex justify-center">
                            <Button size="sm" variant="outline">Try AR Demo</Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>Rotate dishes 360° to see every angle</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>Place virtual food on real tables with AR</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>Get detailed view of ingredients and presentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits for Restaurants</h2>
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
                      Wow your customers with futuristic menus that enhance their dining experience
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
                      Increase sales through realistic 3D food previews that entice customers to order more
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
                      User-friendly dashboard for managing your 3D menu items and updating in real-time
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
                      Compatible with all smartphones and devices—no app download required
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
                      Seamless table access through custom QR codes that enhance the dining experience
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
                      Customize your 3D menu to match your brand and restaurant's unique style
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Live Restaurant Page Preview</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See how your restaurant's AR menu web page will look to customers
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {[
                    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
                  ].map((imgSrc, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-video items-center justify-center p-6">
                            <div className="relative w-full h-full">
                              <img 
                                src={imgSrc}
                                alt={`Restaurant Example ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                  <h3 className="text-2xl font-bold">Restaurant Example {index + 1}</h3>
                                  <p className="text-white/80">Interactive 3D menu experience</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <div className="flex flex-col items-center space-y-4">
                    <QrCode className="h-16 w-16 text-primary" />
                    <h3 className="text-xl font-bold">Try It Yourself</h3>
                    <p className="text-center text-muted-foreground">
                      Scan this QR code to experience a sample restaurant menu on your device
                    </p>
                    <Button size="sm" variant="outline">
                      Load Sample QR
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Restaurants Say</h2>
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
                        <p className="text-sm text-muted-foreground">Fine Dining Restaurant</p>
                      </div>
                    </div>
                    <p className="italic">
                      "Since we added 3D menus, our order rates skyrocketed. Customers love exploring dishes in 3D before ordering."
                    </p>
                    <div className="flex">
                      {Array(5).fill(null).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
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
                        <p className="text-sm text-muted-foreground">Modern Bistro</p>
                      </div>
                    </div>
                    <p className="italic">
                      "Our customers are blown away by the interactive 3D menu. It's become a talking point and differentiator for our café."
                    </p>
                    <div className="flex">
                      {Array(5).fill(null).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-6">Trusted by Restaurants Everywhere</h3>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-12 w-24 rounded-md bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">Restaurant {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                  Ready to Transform Your Menu?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Join hundreds of restaurants already delighting their customers with 3D AR menus
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Start Your 3D Menu Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Book a Demo
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
                <Layers3 className="h-6 w-6" />
                <span className="font-bold">FoodAR</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Revolutionizing restaurant menus with AR technology and 3D food models.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a></li>
                <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FoodAR. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
