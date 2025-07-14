'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sosmedSchema, SosmedFormData } from '@/domain/sosmed-schema';
import { useState } from 'react';

export default function SosmedForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SosmedFormData>({
    resolver: zodResolver(sosmedSchema),
  });

  const onSubmit = async (data: SosmedFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate API call - in a real app, this would call your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted with data:', data);
      setSubmitMessage('Social media URLs saved successfully!');
      reset();
    } catch (error) {
      setSubmitMessage('Error saving social media URLs. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Social Media URLs</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Facebook URL */}
        <div>
          <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-2">
            Facebook URL
          </label>
          <input
            {...register('facebook')}
            type="url"
            id="facebook"
            placeholder="https://facebook.com/yourprofile"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.facebook && (
            <p className="mt-1 text-sm text-red-600">{errors.facebook.message}</p>
          )}
        </div>

        {/* Instagram URL */}
        <div>
          <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
            Instagram URL
          </label>
          <input
            {...register('instagram')}
            type="url"
            id="instagram"
            placeholder="https://instagram.com/yourprofile"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.instagram && (
            <p className="mt-1 text-sm text-red-600">{errors.instagram.message}</p>
          )}
        </div>

        {/* LinkedIn URL */}
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn URL
          </label>
          <input
            {...register('linkedin')}
            type="url"
            id="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.linkedin && (
            <p className="mt-1 text-sm text-red-600">{errors.linkedin.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Saving...' : 'Save Social Media URLs'}
        </button>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`p-3 rounded-md ${
            submitMessage.includes('successfully') 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}