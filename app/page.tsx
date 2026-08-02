'use client';

import React, { useState } from 'react';
import { Loader, CustomCursor, TargetCursor } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  MetricsGrid,
  RiskManagementTabs,
  PlatformGrid,
  ActionableAiTools,
  WallOfTrust,
  ResourcesBlog,
} from '@/components/sections';
import { ScheduleDemoModal, InteractiveWorkflowModal, SearchModal, ServiceHeroModal, ServiceDetail } from '@/components/modals';

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1C1D21] font-sans selection:bg-[#FF5A60] selection:text-white">
      {/* Initial Website Speed Loader Animation */}
      <Loader minDuration={1600} />

      {/* High-End Custom Techy Interactive Cursor */}
      <CustomCursor />
      <TargetCursor cursorColor="#FF5A60" cursorColorOnTarget="#1C1D21" spinDuration={3} />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* Main Hero Section with Interactive Radar Canvas */}
      <Hero
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
      />

      {/* ACT 01: Proven Enterprise Impact 4-Metric Grid */}
        <MetricsGrid />

        <RiskManagementTabs
          onOpenDemo={() => setDemoOpen(true)}
          onOpenWorkflow={() => setWorkflowOpen(true)}
        />

        <PlatformGrid
          onOpenWorkflow={() => setWorkflowOpen(true)}
        />

        <ActionableAiTools
          onOpenWorkflow={() => setWorkflowOpen(true)}
        />

        <WallOfTrust
          onOpenDemo={() => setDemoOpen(true)}
          onOpenWorkflow={() => setWorkflowOpen(true)}
        />

        <ResourcesBlog
          onOpenDemo={() => setDemoOpen(true)}
          onOpenWorkflow={() => setWorkflowOpen(true)}
        />

      {/* Signature High-Impact Coral Footer */}
      <Footer
        onOpenDemo={() => setDemoOpen(true)}
        onOpenWorkflow={() => setWorkflowOpen(true)}
      />

      {/* Modals */}
      <ScheduleDemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />

      <InteractiveWorkflowModal
        isOpen={workflowOpen}
        onClose={() => setWorkflowOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenDemo={() => setDemoOpen(true)}
      />

      <ServiceHeroModal
        isOpen={selectedService !== null}
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenDemo={() => setDemoOpen(true)}
      />
    </div>
  );
}
