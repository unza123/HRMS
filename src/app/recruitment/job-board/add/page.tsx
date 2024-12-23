'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RichTextEditor } from '@/components/ui/rich-text-editor';

export default function AddJobPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <Link href="/" className="text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <span className="text-gray-500">›</span>
        <Link href="/recruitment" className="text-gray-500">Recruitment</Link>
        <span className="text-gray-500">›</span>
        <Link href="/job-board" className="text-gray-500">Job Board</Link>
        <span className="text-gray-500">›</span>
        <span className="text-purple-600">Add Job</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Add Job</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Save Job
        </Button>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-purple-600 font-medium mb-6">Add Job Details</h2>
        
        <div className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <Input 
              placeholder="Enter Job Title"
              className="w-full"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <RichTextEditor 
              placeholder="Enter job description..."
            />
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select className="w-full rounded-md border border-gray-300 p-2">
                <option value="">Select Department</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            {/* Hiring Manager */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hiring Manager
              </label>
              <div className="relative">
                <Input 
                  placeholder="Select Hiring Manager"
                  className="w-full pr-10"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Requirement Period */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Requirement period
              </label>
              <Input 
                type="date"
                className="w-full"
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select className="w-full rounded-md border border-gray-300 p-2">
                <option value="">Select Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            {/* Jobsite */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jobsite
              </label>
              <select className="w-full rounded-md border border-gray-300 p-2">
                <option value="">Select Jobsite</option>
                <option value="onsite">Onsite</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <Input 
                placeholder="Enter Experience in Years"
                className="w-full"
              />
            </div>

            {/* Expected Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Salary
              </label>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter Salary"
                  className="flex-1"
                />
                <select className="w-24 rounded-md border border-gray-300 p-2">
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full rounded-md border border-gray-300 p-2">
                <option value="">Select Location</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
              </select>
            </div>

            {/* Available Vacancy */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Vacancy
              </label>
              <Input 
                placeholder="Enter No Of Vacancies"
                type="number"
                className="w-full"
              />
            </div>

            {/* Skill Set */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skill Set
              </label>
              <Input 
                placeholder="Add Skills..."
                className="w-full"
              />
            </div>
          </div>

          {/* Post Job Button */}
          <div className="flex justify-center mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 w-full max-w-md">
              Post Job
            </Button>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <Link 
          href="/job-board"
          className="text-gray-500 flex items-center gap-2 hover:text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          back
        </Link>
      </div>
    </div>
  );
}
