import { VerificationItem } from '../types';

export const verificationChecklist: VerificationItem[] = [
  {
    field: 'Clinic Name & Hindi Name',
    posterSource: 'Posters 1, 2, 3',
    currentValue: 'RAJ CLINIC / राज क्लिनिक',
    status: 'VERIFIED',
    actionRequired: 'Fully verified from all official printed materials.'
  },
  {
    field: 'Primary Phone & WhatsApp',
    posterSource: 'Posters 1, 2, 3 top banner',
    currentValue: '9305238955 (+91 93052 38955)',
    status: 'VERIFIED',
    actionRequired: 'Direct link configured for telephone and WhatsApp.'
  },
  {
    field: 'Physical Clinic Address',
    posterSource: 'Posters 1, 2, 3 address strip',
    currentValue: 'Dudahi Gandhi Chowk se 100 meter, Purab Block Road, Dudahi, Kushinagar, UP',
    status: 'VERIFIED',
    actionRequired: 'Exact wording from posters preserved. Street landmark confirmed.'
  },
  {
    field: 'Dr. Manish Kumar Qualifications & Timings',
    posterSource: 'Posters 1, 2, 3',
    currentValue: 'M.S., Shalya | Timings: Daily 8:00 AM – 11:00 AM (Poster 3 mentions 8:00 AM – 5:00 PM)',
    status: 'EXTRACTED_FROM_POSTER',
    actionRequired: 'Confirm whether evening OPD is daily or on specific days.'
  },
  {
    field: 'Dr. Kuldeep Sharma Qualifications & Timings',
    posterSource: 'Posters 1, 2',
    currentValue: 'M.B.B.S., D.Ortho | Timings: Monday & Friday 12:00 PM – 5:00 PM',
    status: 'VERIFIED',
    actionRequired: 'Fully verified from posters 1 and 2.'
  },
  {
    field: 'Dr. Shamsad Akhtar Siddiqui Designation & Timings',
    posterSource: 'Posters 1, 2',
    currentValue: 'Medical Officer, Bihar Govt. | Timings: Daily 2:00 PM – 6:00 PM, Sunday Full Day',
    status: 'VERIFIED',
    actionRequired: 'Confirmed from posters 1 and 2.'
  },
  {
    field: 'Dr. Navneet Kumar Sharma Qualifications & Schedule',
    posterSource: 'Poster 1',
    currentValue: 'D.O.T.T., D.Pharma | Schedule: To be confirmed',
    status: 'PENDING_CLINIC_CONFIRMATION',
    actionRequired: 'Obtain exact consultation or on-duty hours from clinic administration.'
  },
  {
    field: 'Maternity Normal Delivery & Operation Facilities',
    posterSource: 'Posters 1, 2, 3',
    currentValue: '24 Hours Normal Delivery & Operation Facility Stated on Posters',
    status: 'EXTRACTED_FROM_POSTER',
    actionRequired: 'Clinic to confirm scope of surgical procedures performed on-site vs daycare.'
  },
  {
    field: 'In-Patient Admission Facility',
    posterSource: 'Poster 3',
    currentValue: 'मरीज भर्ती करने की सुविधा (Patient Admission Beds)',
    status: 'EXTRACTED_FROM_POSTER',
    actionRequired: 'Confirm bed capacity and overnight admission protocols.'
  },
  {
    field: 'Medical Council Registration Numbers',
    posterSource: 'Not listed on posters',
    currentValue: 'Pending clinic submission',
    status: 'PENDING_CLINIC_CONFIRMATION',
    actionRequired: 'Collect and add state/national medical council registration numbers for all practitioners.'
  },
  {
    field: 'Actual Doctor & Clinic Facility Photographs',
    posterSource: 'No photos printed on posters',
    currentValue: 'High-quality professional placeholder photography clearly marked as such',
    status: 'PENDING_CLINIC_CONFIRMATION',
    actionRequired: 'Replace placeholder images with real high-resolution photographs of clinic premises and practitioners once supplied.'
  }
];

