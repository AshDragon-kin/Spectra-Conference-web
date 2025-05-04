import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About SPECTRA</h1>
      <div className="grid gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              SPECTRA is dedicated to advancing assistive technology and making it accessible to everyone.
              We believe in creating a world where technology empowers people of all abilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Develop innovative assistive technology solutions</li>
              <li>Provide training and workshops</li>
              <li>Advocate for accessibility in technology</li>
              <li>Support research in assistive technology</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="text-lg">
              Through our initiatives, we've helped thousands of people access technology
              that enhances their daily lives and promotes independence.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="flex flex-col items-center mb-4">
            <span className="inline-flex items-center gap-2 text-blue-700 font-semibold text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" />
              </svg>
              Our Location
            </span>
            <p className="text-center text-muted-foreground mt-2 text-base">
              Pragathi Mahalakshmi Building, No.62, Industrial Sabar, Yashwanthpur 2nd stage, 62A, behind Hyundai Service Station, Narasimha Layout, Nandini Layout, Bengaluru, Karnataka 560022
            </p>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
            <iframe
              title="Spectra Assistive Technologies Limited Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62213.96423242844!2d77.4183779!3d12.9365835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6d5b8d6335%3A0x9cff94487e88c02e!2sPragathi%20Mahalakshmi%20Building%2C%20No.62%2CIndustrial%20Sabar%2CYashwanthpur%202nd%20stage%2C%2062A%2C%20behind%20Hyundai%20Service%20Station%2C%20Narasimha%20Layout%2C%20Nandini%20Layout%2C%20Bengaluru%2C%20Karnataka%20560022!5e0!3m2!1sen!2sin!4v1714820000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, minWidth: '100%', minHeight: '350px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 