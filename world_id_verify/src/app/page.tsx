"use client";
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';
import { useState } from 'react';

const verifyProof = async (proof: any) => {
  try {
    console.log('Sending proof:', proof);
    const response = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ proof }),
    });

    if (response.ok) {
      const { verified } = await response.json();
      console.log('Verification response:', verified);
      return verified;
    } else {
      const { error } = await response.json();
      console.error('Verification error:', error);
      throw new Error(error);
    }
  } catch (error) {
    console.error('Error verifying proof:', error);
    throw new Error('Verification failed');
  }
};

const onSuccess = () => {
  console.log("Success");
};

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = async (proof: any) => {
    try {
      const verified = await verifyProof(proof);
      if (verified) {
        setIsVerified(true);
      }
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return (
    <div className="container-center">
      <h1>Community Site</h1>
      <p>월드 커뮤니티는 세계 최초로 월드 ID만 사용하는 완전 영지식 증명 커뮤니티입니다.</p>
      {isVerified ? (
        <p>로그인 성공!</p>
      ) : (
        <IDKitWidget
          app_id="app_6c3821fa0dbede374338de59f453db3b"
          action="verify"
          verification_level={VerificationLevel.Device}
          handleVerify={handleVerify}
          onSuccess={onSuccess}
        >
          {({ open }) => (
            <button
              onClick={open}
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Verify with World ID
            </button>
          )}
        </IDKitWidget>
      )}
    </div>
  );
}
