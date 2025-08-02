import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, User, TrendingUp } from "lucide-react";

export const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Size Guide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find your perfect fit with our comprehensive sizing chart
            </p>
          </div>
        </div>
      </section>

      {/* Size Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sweatpants Size Chart
              </h2>
              <p className="text-gray-600 text-lg">
                All measurements are in inches. For the best fit, measure yourself and compare to our chart.
              </p>
            </div>

            {/* Size Chart Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Size</th>
                      <th className="px-6 py-4 text-left font-semibold">Waist</th>
                      <th className="px-6 py-4 text-left font-semibold">Hip</th>
                      <th className="px-6 py-4 text-left font-semibold">Inseam</th>
                      <th className="px-6 py-4 text-left font-semibold">Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">XS</td>
                      <td className="px-6 py-4 text-gray-600">26-28</td>
                      <td className="px-6 py-4 text-gray-600">34-36</td>
                      <td className="px-6 py-4 text-gray-600">30</td>
                      <td className="px-6 py-4 text-gray-600">40</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">S</td>
                      <td className="px-6 py-4 text-gray-600">28-30</td>
                      <td className="px-6 py-4 text-gray-600">36-38</td>
                      <td className="px-6 py-4 text-gray-600">31</td>
                      <td className="px-6 py-4 text-gray-600">41</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">M</td>
                      <td className="px-6 py-4 text-gray-600">30-32</td>
                      <td className="px-6 py-4 text-gray-600">38-40</td>
                      <td className="px-6 py-4 text-gray-600">32</td>
                      <td className="px-6 py-4 text-gray-600">42</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">L</td>
                      <td className="px-6 py-4 text-gray-600">32-34</td>
                      <td className="px-6 py-4 text-gray-600">40-42</td>
                      <td className="px-6 py-4 text-gray-600">33</td>
                      <td className="px-6 py-4 text-gray-600">43</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">XL</td>
                      <td className="px-6 py-4 text-gray-600">34-36</td>
                      <td className="px-6 py-4 text-gray-600">42-44</td>
                      <td className="px-6 py-4 text-gray-600">34</td>
                      <td className="px-6 py-4 text-gray-600">44</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">XXL</td>
                      <td className="px-6 py-4 text-gray-600">36-38</td>
                      <td className="px-6 py-4 text-gray-600">44-46</td>
                      <td className="px-6 py-4 text-gray-600">35</td>
                      <td className="px-6 py-4 text-gray-600">45</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Measurement Guide */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-gray-200">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-lg">
                    <Ruler className="h-5 w-5 text-brand-red mr-2" />
                    How to Measure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong>Waist:</strong> Measure around your natural waistline</li>
                    <li><strong>Hip:</strong> Measure around the fullest part of your hips</li>
                    <li><strong>Inseam:</strong> Measure from crotch to ankle</li>
                    <li><strong>Length:</strong> Measure from waistband to hem</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-lg">
                    <User className="h-5 w-5 text-brand-red mr-2" />
                    Model Fit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Model:</strong> 6'0" (183cm)</p>
                    <p><strong>Waist:</strong> 32"</p>
                    <p><strong>Wearing:</strong> Size L</p>
                    <p><strong>Fit:</strong> Regular, slightly relaxed through leg</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-lg">
                    <TrendingUp className="h-5 w-5 text-brand-red mr-2" />
                    Fit Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Between sizes? Size up for relaxed fit</li>
                    <li>• Drawstring allows waist adjustment</li>
                    <li>• Pre-shrunk fabric for consistent sizing</li>
                    <li>• Tapered leg design for modern silhouette</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact for Help */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Not Sure About Your Size?
              </h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help you find the perfect fit.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Contact Us for Help
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SizeGuide;