import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppointmentSection } from '../components/home/AppointmentSection';

export const AppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get('doctor') || '';

  return (
    <div className="py-6">
      <AppointmentSection initialDoctorId={doctorId} isStandalonePage={true} />
    </div>
  );
};

