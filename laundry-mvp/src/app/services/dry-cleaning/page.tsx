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
  Shirt, 
  Shield, 
  Clock, 
  Truck, 
  Leaf, 
  CheckCircle, 
  Star,
  ArrowLeft,
  Sparkles,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dry Cleaning Service - LaundryPro',
  description: 'Professional dry cleaning service for delicate fabrics. Eco-friendly solvents, expert finishing, and stain treatment. Quality guaranteed.',
  keywords: 'dry cleaning, delicate fabrics, eco-friendly, stain treatment, professional finishing',
}

const processSteps = [
  {
    step: 1,
    title: 'Inspection & Tagging',
    description: 'Each garment is carefully inspected for stains, damage, and fabric type. Items are tagged with unique identifiers for tracking.',
    icon: Shield
  },
  {
    step: 2,
    title: 'Pre-Treatment',
    description: 'Stains are identified and treated with specialized solutions before the main cleaning process begins.',
    icon: Sparkles
  },
  {
    step: 3,
    title: 'Eco-Friendly Cleaning',
    description: 'Garments are cleaned using our certified eco-friendly solvents that are gentle on fabrics and the environment.',
    icon: Leaf
  },
  {
    step: 4,
    title: 'Quality Inspection',
    description: 'Every item undergoes a thorough quality check to ensure stains are removed and the garment is properly cleaned.',
    icon: CheckCircle
  },
  {
    step: 5,
    title: 'Professional Finishing',
    description: 'Final pressing and finishing to restore the garment to its original appearance and ensure a crisp, professional look.',
    icon: Star
  }
]

const pricingItems = [
  {
    item: 'Shirts & Blouses',
    price: '$12',
    description: 'Business shirts, casual shirts, blouses'
  },
  {
    item: 'Pants & Trousers',
    price: '$15',
    description: 'Dress pants, khakis, slacks'
  },
  {
    item: 'Suits (2-piece)',
    price: '$35',
    description: 'Jacket and pants together'
  },
  {
    item: 'Dresses',
    price: '$25',
    description: 'Casual and formal dresses'
  },
  {
    item: 'Coats & Jackets',
    price: '$30',
    description: 'Winter coats, blazers, jackets'
  },
  {
    item: 'Skirts',
    price: '$18',
    description: 'All types of skirts'
  }
]

const benefits = [
  {
    title: 'Eco-Friendly Process',
    description: 'We use certified green solvents that are safe for your clothes and the environment.',
    icon: Leaf
  },
  {
    title: 'Expert Care',
    description: 'Our trained professionals handle each garment with the care it deserves.',
    icon: Shield
  },
  {
    title: 'Stain Treatment',
    description: 'Specialized stain removal techniques for even the toughest stains.',
    icon: Sparkles
  },
  {
    title: 'Quality Guarantee',
    description: '100% satisfaction guaranteed or we\'ll re-clean for free.',
    icon: CheckCircle
  }
]

export default function DryCleaningPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-laundry-blue hover:text-laundry-blue/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <Badge variant="premium" className="mb-4">Premium Service</Badge>
            <Heading variant="hero" size="5xl" className="mb-6">
              Professional Dry Cleaning
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert dry cleaning for delicate fabrics and garments that require special care. 
              Our eco-friendly process ensures your clothes look their best while protecting the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Shirt} className="h-8 w-8 text-laundry-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delicate Fabrics</h3>
              <p className="text-sm text-gray-600">Safe for silk, wool, and other delicate materials</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Leaf} className="h-8 w-8 text-laundry-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Certified green solvents and processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-laundry-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={Star} className="h-8 w-8 text-laundry-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Finishing</h3>
              <p className="text-sm text-gray-600">Professional pressing and finishing</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Our Dry Cleaning Process
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive 5-step process that ensures your garments receive the best care possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-laundry-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon icon={step.icon} className="h-8 w-8 text-laundry-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-laundry-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Transparent Pricing
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, competitive pricing for all your dry cleaning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {pricingItems.map((item, index) => (
              <Card key={index} variant="pricing-card" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.item}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-laundry-blue">{item.price}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card variant="feature-card" className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Icon icon={Zap} className="h-8 w-8 text-laundry-orange mr-3" />
                <Heading variant="card" size="xl">Express Service Available</Heading>
              </div>
              <p className="text-gray-600 mb-6">
                Need your dry cleaning done faster? Our express service offers same-day turnaround 
                for an additional $10 per item.
              </p>
              <Button variant="laundry-primary" asChild>
                <a href="/book">Book Express Service</a>
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container variant="page">
          <div className="text-center mb-16">
            <Heading variant="section" size="4xl" className="mb-6">
              Why Choose Our Dry Cleaning?
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with eco-friendly practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="feature-card" className="p-6">
                <div className="flex items-start">
                  <div className={`p-3 bg-${benefit.icon === Leaf ? 'laundry-green' : benefit.icon === Shield ? 'laundry-blue' : benefit.icon === Sparkles ? 'laundry-purple' : 'laundry-orange'}/10 rounded-xl mr-4`}>
                    <Icon icon={benefit.icon} className={`h-6 w-6 text-${benefit.icon === Leaf ? 'laundry-green' : benefit.icon === Shield ? 'laundry-blue' : benefit.icon === Sparkles ? 'laundry-purple' : 'laundry-orange'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-laundry-blue/5 to-laundry-green/5">
        <Container variant="page">
          <div className="text-center">
            <Heading variant="section" size="3xl" className="mb-6">
              Ready for Professional Dry Cleaning?
            </Heading>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your dry cleaning service today and experience the difference of professional care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="laundry-primary" size="lg" asChild>
                <a href="/book">Book Now</a>
              </Button>
              <Button variant="laundry-outline" size="lg" asChild>
                <a href="/pricing">View All Pricing</a>
              </Button>
            </div>
          </div>
                 </Container>
       </section>
       </div>
     </MainLayout>
   )
 }
