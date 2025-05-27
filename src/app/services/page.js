
import React from 'react';
import ServicesHeader from '@/components/services/servicesHeader';
import OdooServices from '@/components/services/odooServices';
import OdooProject from '@/components/services/odooProject';  

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <OdooServices />
      <OdooProject />
    </>
  );
}
