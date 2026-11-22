'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BentoFeatures } from '@/components/home/BentoFeatures';
import { SolutionsGrid } from '@/components/home/SolutionsGrid';
import { RoiCalculator } from '@/components/calculator/RoiCalculator';
import { MethodologyList } from '@/components/home/MethodologyList';
import { FoundersAuthority } from '@/components/home/FoundersAuthority';
import { LeadModal } from '@/components/ui/LeadModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const handleOpenModal = (topic?: string) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection onOpenModal={() => handleOpenModal()} />
      <BentoFeatures onOpenModal={() => handleOpenModal()} />
      <SolutionsGrid onOpenModal={handleOpenModal} />
      <RoiCalculator onOpenModal={() => handleOpenModal()} />
      <MethodologyList onOpenModal={() => handleOpenModal()} />
      <FoundersAuthority onOpenModal={() => handleOpenModal()} />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={selectedTopic}
      />
    </div>
  );
}
