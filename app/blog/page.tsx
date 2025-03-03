import React from 'react';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-primary mb-8">ব্লগ পোস্ট</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          আমাদের মাদরাসার সর্বশেষ খবর এবং আপডেট:
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
} 