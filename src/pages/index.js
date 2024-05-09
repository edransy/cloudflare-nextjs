import React, { useState } from 'react';
import Image from 'next/image';
import testImg from '@/img/test.png';

const CloseButton = ({ onClick }) => (
  <button
    className="fixed top-6 right-6 bg-slate-800 text-white px-4 py-2 rounded-lg border-2 border-white/20 hover:bg-slate-600"
    onClick={onClick}
  >X</button>
);

export default function HomePage() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div className="w-screen min-h-screen" style={{ backgroundColor: '#eee7d7' }}>
        <div className="w-fit mx-auto md:max-w-[1200px] py-20 flex flex-col gap-6 [&>*]:mx-auto">
          <figure
            className="flex flex-col gap-2 [&>*]:mx-auto"
          >
            <Image src={testImg.src} alt="Test Image" width={571} height={228} priority />
          </figure>
          <h1 className="text-5xl font-bold text-slate-900">FONDACIJA SIDRAN <br /><br /></h1>
          <div className="text-xl flex flex-col text-slate-900">
          <div>
              Jezero 11 <br /> 71000 Sarajevo <br /> Bosna i Hercegovina <br /> <br />
          </div>
          <div>
              info@sidran.foundation
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
