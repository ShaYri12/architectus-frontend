"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const CreateVisualisationModal = ({ onClose, onCreate }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);

  const handleMicClick = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Speech recognition not supported in this browser. Please use Chrome or a supported browser."
      );
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          setText((prevText) => prevText + event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      // Optional: Update textarea in real-time with interim results
      document.querySelector("textarea").value = text + interimTranscript;
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>
      
      <div className="bg-white rounded-[20px] p-6 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
          Create
        </h1>

        <p className="text-sm text-[#0F0A19B2]">
        Please describe in as much detail as possible what you intend to create, update, or modify.


        </p>

        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        />

        <div className="relative my-6 md:my-8">
          <textarea
            value={text}
            placeholder="Type"
            onChange={(e) => setText(e.target.value)}
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 pt-4 border-[#E7E7E7] text-[#0F0A19] w-full rounded-xl bg-[#FAFAFA] h-[140px]"
          ></textarea>

          <button
            className="absolute bottom-4 right-4"
            onClick={handleMicClick}
          >
            {isRecording ? (
              <Image
                src="/assets/icons/pause-icon.svg"
                alt="pause icon"
                width={32}
                height={32}
                loading="lazy"
              />
            ) : (
              <Image
                src="/assets/icons/mic-icon.svg"
                alt="mic icon"
                width={32}
                height={32}
                loading="lazy"
              />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-5 items-center gap-y-5">
          <button
            onClick={onCreate}
            className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Create
          </button>

          <button
            onClick={onClose}
            className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVisualisationModal;
