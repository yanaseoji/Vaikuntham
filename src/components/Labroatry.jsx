import React, { useEffect } from 'react';
import { Microscope, FlaskRound as Flask, TestTubes, Beaker, ShieldCheck, FileCheck, Droplets, Leaf } from 'lucide-react';



function Labroatry() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white " >
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000")'
        }}
      >
        <div className="h-full inset-0 bg-gradient-to-r from-red-900/80 to-black/60 ">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Advanced Diagnostic Laboratory
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Where tradition meets modern science in crafting precise homeopathic remedies
              </p>
              <button
                className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight * 0.9,
                    behavior: "smooth",
                  });
                }}
              >
                Explore Our Services
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-4 text-red-900">Our Laboratory Services</h2>
  <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
    Explore our wide range of diagnostic services ensuring accurate and reliable health assessments for patients of all ages.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <ServiceCard
      icon={<Microscope className="w-10 h-10" />}
      title="Complete Blood Count (CBC)"
      description="Comprehensive analysis of red cells, white cells, and platelets to detect infections, anemia, and more."
    />
    <ServiceCard
      icon={<Flask className="w-10 h-10" />}
      title="Liver Function Test (LFT)"
      description="Assesses liver health by measuring enzymes, proteins, and bilirubin in the blood."
    />
    <ServiceCard
      icon={<TestTubes className="w-10 h-10" />}
      title="Kidney Function Test (KFT)"
      description="Evaluates how well the kidneys are working by testing urea, creatinine, and electrolytes."
    />
    <ServiceCard
      icon={<Beaker className="w-10 h-10" />}
      title="Thyroid Profile (T3, T4, TSH)"
      description="Helps diagnose thyroid imbalances affecting metabolism and energy levels."
    />
    <ServiceCard
      icon={<ShieldCheck className="w-10 h-10" />}
      title="Blood Sugar Test"
      description="Includes fasting, random, and postprandial glucose tests for diabetes monitoring."
    />
    <ServiceCard
      icon={<FileCheck className="w-10 h-10" />}
      title="Urine Routine & Microscopy"
      description="Screens for urinary tract infections, kidney disorders, and metabolic conditions."
    />
  </div>
</div>

      {/* Process Section */}
      <div className="bg-gradient-to-b from-red-50 to-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-red-900">Our Laboratory Process</h2>
          <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
            Experience our meticulous approach to homeopathic medicine preparation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="/lab.avif"
                alt="Laboratory Process"
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="space-y-8">
              <ProcessStep
                icon={<Leaf className="w-8 h-8" />}
                title="Source Material Selection"
                description="Careful selection and verification of raw materials from trusted suppliers"
              />
              <ProcessStep
                icon={<Droplets className="w-8 h-8" />}
                title="Preparation"
                description="Standardized preparation methods following homeopathic principles"
              />
              <ProcessStep
                icon={<TestTubes className="w-8 h-8" />}
                title="Testing"
                description="Multiple stages of testing to ensure quality and potency"
              />
              <ProcessStep
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Quality Control"
                description="Final quality checks and certification before release"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quality Standards */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-red-900">Our Quality Standards</h2>
          <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
            We maintain the highest standards in homeopathic medicine preparation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-900">GMP Certified</h3>
              <p className="text-gray-600 leading-relaxed">Following Good Manufacturing Practice guidelines for consistent quality</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-900">ISO </h3>
              <p className="text-gray-600 leading-relaxed"> Quality management certification ensuring excellence</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Beaker className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-900">HPUS Compliant</h3>
              <p className="text-gray-600 leading-relaxed">Following Homeopathic Pharmacopoeia standards for safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-red-50 to-pink-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <div className="text-red-600">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-red-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ icon, title, description }) {
  return (
    <div className="flex gap-6 group">
      <div className="bg-gradient-to-br from-red-50 to-pink-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
        <div className="text-red-600">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-red-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default Labroatry;