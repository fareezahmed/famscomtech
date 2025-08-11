import { Metadata } from 'next'
import MainLayout from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  Truck, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  Navigation,
  Phone,
  Mail
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas - LaundryPro',
  description: 'Check if we service your area in Melbourne. Free pickup and delivery available in select zones. View delivery zones and pricing.',
  keywords: 'service areas, delivery zones, Melbourne laundry service, pickup delivery areas',
}

const serviceZones = [
  {
    zone: 'Zone 1 - CBD & Inner City',
    areas: ['Melbourne CBD', 'Southbank', 'Docklands', 'East Melbourne', 'West Melbourne', 'North Melbourne', 'Carlton', 'Fitzroy'],
    deliveryTime: 'Same Day',
    deliveryFee: 'Free',
    color: 'laundry-blue',
    popular: true
  },
  {
    zone: 'Zone 2 - Inner East',
    areas: ['Richmond', 'South Yarra', 'Toorak', 'Prahran', 'Windsor', 'St Kilda', 'St Kilda East', 'Elwood', 'Balaclava'],
    deliveryTime: 'Next Day',
    deliveryFee: 'Free',
    color: 'laundry-green',
    popular: false
  },
  {
    zone: 'Zone 3 - Inner North',
    areas: ['Brunswick', 'Brunswick East', 'Northcote', 'Thornbury', 'Preston', 'Coburg', 'Pascoe Vale', 'Essendon', 'Moonee Ponds'],
    deliveryTime: 'Next Day',
    deliveryFee: 'Free',
    color: 'laundry-orange',
    popular: false
  },
  {
    zone: 'Zone 4 - Inner West',
    areas: ['Footscray', 'Yarraville', 'Seddon', 'Kingsville', 'Newport', 'Williamstown', 'Spotswood', 'Altona', 'Altona North'],
    deliveryTime: 'Next Day',
    deliveryFee: '$5',
    color: 'laundry-purple',
    popular: false
  },
  {
    zone: 'Zone 5 - Bayside',
    areas: ['Brighton', 'Brighton East', 'Hampton', 'Sandringham', 'Beaumaris', 'Black Rock', 'Cheltenham', 'Mentone', 'Parkdale'],
    deliveryTime: '2-3 Days',
    deliveryFee: '$10',
    color: 'laundry-yellow',
    popular: false
  },
  {
    zone: 'Zone 6 - Eastern Suburbs',
    areas: ['Hawthorn', 'Kew', 'Camberwell', 'Glen Iris', 'Malvern', 'Armadale', 'Caulfield', 'Caulfield North', 'Caulfield South'],
    deliveryTime: '2-3 Days',
    deliveryFee: '$8',
    color: 'laundry-red',
    popular: false
  }
]

const deliveryFeatures = [
  {
    title: 'Free Pickup & Delivery',
    description: 'We come to you - no need to leave your home or office',
    iconName: 'Truck'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Choose pickup and delivery times that work for you',
    iconName: 'Clock'
  },
  {
    title: 'Secure Handling',
    description: 'Your clothes are handled with care and security',
    iconName: 'CheckCircle'
  },
  {
    title: 'Real-time Tracking',
    description: 'Track your order from pickup to delivery',
    iconName: 'Navigation'
  }
]

const popularAreas = [
  'Melbourne CBD',
  'Richmond',
  'Brunswick',
  'South Yarra',
  'Fitzroy',
  'Hawthorn',
  'St Kilda',
  'Footscray'
]

export default function AreasPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center mb-16">
            <Badge variant="service-tag" className="mb-4">Service Areas</Badge>
            <Heading variant="hero" size="5xl" className="mb-6">
              We Service Melbourne
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Check if we service your area and enjoy convenient pickup and delivery. 
              We cover most of Melbourne with flexible delivery options and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={MapPin} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">6 Service Zones</h3>
              <p className="text-sm text-gray-600">Covering most of Melbourne</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Truck} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-sm text-gray-600">In most areas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Clock} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Timing</h3>
              <p className="text-sm text-gray-600">Choose your schedule</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Zones */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Service Zones & Delivery
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your zone and see delivery options and pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceZones.map((zone, index) => (
              <Card key={index} variant={zone.popular ? "pricing-card" : "feature-card"} className={`p-6 ${zone.popular ? 'border-2 border-laundry-blue' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{zone.zone}</CardTitle>
                    {zone.popular && (
                      <Badge variant="premium" className="text-xs">Most Popular</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Icon icon={Clock} className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-gray-600">{zone.deliveryTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon icon={DollarSign} className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-gray-600">{zone.deliveryFee}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Areas Covered:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {zone.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-1 h-1 bg-${zone.color} rounded-full mr-2`}></div>
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="laundry-outline" size="sm" className="w-full" asChild>
                    <a href="/book">Book Service</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Why Choose Our Delivery Service?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convenient, reliable, and secure pickup and delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryFeatures.map((feature, index) => {
              const iconMap = {
                Truck,
                Clock,
                CheckCircle,
                Navigation
              };
              const IconComponent = iconMap[feature.iconName as keyof typeof iconMap];
              
              return (
                <Card key={index} variant="feature-card" className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-laundry-blue/10 rounded-xl mr-4">
                      <Icon icon={IconComponent} className="h-6 w-6 text-laundry-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Popular Areas */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Popular Service Areas
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These areas have the highest customer satisfaction and fastest delivery times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {popularAreas.map((area, index) => (
              <Card key={index} variant="feature-card" className="p-4 text-center">
                <div className="w-12 h-12 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon icon={Star} className="h-6 w-6 text-laundry-green" />
                </div>
                <p className="text-sm font-medium text-gray-900">{area}</p>
                <p className="text-xs text-gray-600 mt-1">Same day delivery</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Area Checker */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center">
            <Card variant="feature-card" className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Icon icon={MapPin} className="h-8 w-8 text-laundry-blue mr-3" />
                <Heading variant="card" size="xl">Check Your Area</Heading>
              </div>
              <p className="text-gray-600 mb-6">
                Not sure if we service your area? Contact us to check availability and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="laundry-primary" asChild>
                  <a href="/contact">Check My Area</a>
                </Button>
                <Button variant="laundry-outline" asChild>
                  <a href="/book">Book Now</a>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Need Help?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us to check service availability in your area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Phone} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">1300 123 456</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8am-6pm</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Mail} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">info@laundrypro.com.au</p>
              <p className="text-sm text-gray-500">24/7 support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={MapPin} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">123 Laundry St, Melbourne</p>
              <p className="text-sm text-gray-500">By appointment only</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center">
            <Heading variant="section" size="3xl" className="mb-6">
              Ready to Get Started?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your service today and enjoy convenient pickup and delivery in your area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="laundry-primary" size="lg" asChild>
                <a href="/book">Book Now</a>
              </Button>
              <Button variant="laundry-outline" size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
                 </Container>
       </section>
       </div>
     </MainLayout>
   )
 }
