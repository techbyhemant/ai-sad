import React from "react";

const Locations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve clients across multiple locations with our comprehensive
            construction and engineering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Main Office
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>123 Construction Avenue</p>
              <p>Building District, BD 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@company.com</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Regional Office
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>456 Engineering Plaza</p>
              <p>Industrial Zone, IZ 67890</p>
              <p>Phone: (555) 987-6543</p>
              <p>Email: regional@company.com</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Service Center
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>789 Service Street</p>
              <p>Commercial Area, CA 54321</p>
              <p>Phone: (555) 456-7890</p>
              <p>Email: service@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
