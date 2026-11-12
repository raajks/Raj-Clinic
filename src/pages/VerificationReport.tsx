import React from 'react';
import { ShieldCheck, AlertTriangle, FileCheck, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { verificationChecklist } from '../data/verificationChecklist';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';

export const VerificationReport: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === 'hi' ? 'सत्यापन एवं ऑडिट रिपोर्ट' : 'Clinical Data Audit'}
          badgeVariant="teal"
          title={language === 'hi' ? 'क्लिनिक सूचना सत्यापन एवं आगामी चेकलिस्ट' : 'Clinic Verification Report & Information Audit'}
          subtitle={
            language === 'hi'
              ? 'आधिकारिक मुद्रित पोस्टरों से निकाली गई समस्त जानकारी का ऑडिट विवरण एवं क्लिनिक प्रबंधन द्वारा पुष्टि हेतु शेष बिंदुओं की सूची।'
              : 'Complete audit of information extracted from official reference posters versus items awaiting administrative confirmation.'
          }
        />

        {/* Audit Table */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 mb-12">
          <div className="p-6 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-navy-800">
                {language === 'hi' ? 'सूचना सत्यापन मैट्रिक्स' : 'Information Verification Matrix'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'hi' ? 'स्रोत: राज क्लिनिक संदर्भ पोस्टर 1, 2 एवं 3' : 'Source: Raj Clinic Printed Poster Materials (Posters 1, 2, and 3)'}
              </p>
            </div>

            <Link
              to="/gallery"
              className="text-xs font-semibold text-healthcare hover:underline flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'पोस्टर देखें' : 'View Posters'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/75 text-slate-700 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Data Point</th>
                  <th className="py-3.5 px-4">Poster Source</th>
                  <th className="py-3.5 px-4 sm:px-6">Status</th>
                  <th className="py-3.5 px-4 sm:px-6">Extracted Value / Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {verificationChecklist.map((item, idx) => {
                  const isVerified = item.status === 'VERIFIED';
                  const isExtracted = item.status === 'EXTRACTED_FROM_POSTER';
                  const isPending = item.status === 'PENDING_CLINIC_CONFIRMATION';

                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-navy-800">
                        {item.field}
                      </td>
                      <td className="py-4 px-4 text-slate-500 text-xs">
                        {item.posterSource}
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        {isVerified && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <FileCheck className="w-3 h-3" />
                            <span>VERIFIED</span>
                          </span>
                        )}
                        {isExtracted && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-healthcare border border-blue-200">
                            <span>EXTRACTED</span>
                          </span>
                        )}
                        {isPending && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <AlertTriangle className="w-3 h-3" />
                            <span>PENDING</span>
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-xs text-slate-700 leading-relaxed">
                        <div className="font-medium text-navy-800">{item.currentValue}</div>
                        <div className="text-slate-500 mt-0.5 italic">{item.actionRequired}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Checklist for Clinic Administration */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
          <h3 className="text-lg font-bold text-navy-800 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-accent" />
            <span>Checklist of Items for Raj Clinic Administration to Provide</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            The website architecture is intentionally configuration-driven. When the clinic provides the following assets, they can be inserted into <code className="px-2 py-0.5 bg-white border rounded text-slate-800 font-mono text-xs">data/doctors.ts</code> and <code className="px-2 py-0.5 bg-white border rounded text-slate-800 font-mono text-xs">public/images/</code> without any code refactoring:
          </p>

          <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
            <li><strong>Official Doctor Photos:</strong> High-resolution portraits for Dr. Manish Kumar, Dr. Kuldeep Sharma, Dr. Shamsad Akhtar Siddiqui, and Dr. Navneet Kumar Sharma to replace high-grade placeholders.</li>
            <li><strong>Medical Council Registration Numbers:</strong> State Medical Council / National Medical Commission registration numbers for published doctors.</li>
            <li><strong>Actual Facility Photos:</strong> High-resolution photographs of Raj Clinic building facade, reception counter, consultation chambers, procedure theater, and in-patient recovery beds.</li>
            <li><strong>Extended Hours Verification:</strong> Clarification whether Dr. Manish Kumar holds evening consultations daily or on specific weekdays (Poster 1 states 8-11 AM, while Poster 3 states 8 AM-5 PM).</li>
            <li><strong>Pharmacy / OT Shift Confirmation:</strong> Specific OPD schedule for Dr. Navneet Kumar Sharma (D.O.T.T., D.Pharma).</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

