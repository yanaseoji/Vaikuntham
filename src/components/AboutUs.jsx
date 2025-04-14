import React, { useEffect } from 'react';
import { Leaf, Droplets, Heart, Users, Award, Clock } from 'lucide-react';



function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/best.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">About Natural Healing</h1>
            <p className="text-xl max-w-2xl mx-auto">Dedicated to holistic wellness through the power of homeopathic medicine</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are committed to providing gentle, natural healing solutions that work in harmony with your body's own healing powers. Our approach combines traditional homeopathic wisdom with modern understanding of wellness.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Natural Healing</h3>
            <p className="text-gray-600">Harnessing nature's remedies for gentle, effective treatment</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Holistic Care</h3>
            <p className="text-gray-600">Treating the whole person, not just the symptoms</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <Droplets className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Pure Remedies</h3>
            <p className="text-gray-600">Using the highest quality natural ingredients</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12">Our Expert</h2>
          <div className=" ">
            {/* <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
              <img
                src=""
                alt=""
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-green-600 mb-2">Chief Homeopathic Practitioner</p>
                <p className="text-gray-600">20+ years experience in classical homeopathy</p>
              </div>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
              <img
                src="/doctor.jpg"
                alt=""
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Dr. kshitej bhati</h3>
                <p className="text-green-600 mb-2"> Homeopathy Specialist</p>
                <p className="text-gray-600">Expert in integrative medicine approaches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">1000+</h4>
            <p className="text-gray-600">Patients Treated</p>
          </div>
          <div>
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">15+</h4>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">10+</h4>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div>
            <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="text-2xl font-bold">100%</h4>
            <p className="text-gray-600">Homeopathic Medicines</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;