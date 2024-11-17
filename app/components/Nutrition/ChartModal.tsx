import Image from "next/image";
import React from "react";

interface ChartModalProps {
  onClose: () => void;
  onCreate: () => void;
}

const ChartModal: React.FC<ChartModalProps> = ({ onClose, onCreate }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 py-3">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[800px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-3 right-4 cursor-pointer"
        />

        <div className="flex flex-col gap-y-4 h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          <h2 className="text-[#0F1017] text-lg md:text-2xl font-semibold py-2 border-b-2">
            Nutrition Facts
          </h2>

          <ul className="text-[#0F1017]">
            <li className="text-base font-medium opacity-60">
              8 servings per container
            </li>
            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b-[8px] border-black">
              <p>Serving size</p>
              <p>2/3 cup (55g)</p>
            </li>

            <li className="text-base font-medium opacity-80 pt-3">
              Amount per serving
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b-4 border-black">
              <p>Calories</p>
              <p className="text-blue-600">230</p>
            </li>

            <li className="text-base font-bold flex justify-end py-3 border-b">
              <p>% Daily Value*</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Total Fat <span className="font-normal ml-4">8g</span>
              </p>
              <p className="text-blue-600">10%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b pl-4">
              <p>
                Saturated Fat <span className="ml-4 font-normal">1g</span>
              </p>
              <p className="text-blue-600">5%</p>
            </li>

            <li className="text-base font-normal py-3 border-b pl-4">
              <p>
                Trans Fat <span className="ml-4">0g</span>
              </p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Cholesterol <span className="font-normal ml-4">0mg</span>
              </p>
              <p className="text-blue-600">0%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Sodium <span className="font-normal ml-4">160mg</span>
              </p>
              <p className="text-blue-600">7%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Total Carbohydrate <span className="font-normal ml-4">37g</span>
              </p>
              <p className="text-blue-600">13%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 pl-4 border-b">
              <p className="font-normal">
                Dietary Fiber <span className="ml-4">4g</span>
              </p>
              <p className="text-blue-600">14%</p>
            </li>

            <li className="text-base font-normal py-3 pl-4 border-b">
              <p>
                Total Sugars <span className="ml-4">12g</span>
              </p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 pl-4 border-b">
              <p className="font-normal">Includes 10g added sugars</p>
              <p className="text-blue-600">20%</p>
            </li>

            <li className="text-base font-bold py-4 border-b-[8px] border-black">
              <p>
                Protein <span className="ml-4 font-normal">3g</span>
              </p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Vitamin D <span className="font-normal ml-4">2mg</span>
              </p>
              <p className="text-blue-600">10%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Calcium <span className="font-normal ml-4">260mg</span>
              </p>
              <p className="text-blue-600">20%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b">
              <p>
                Iron <span className="font-normal ml-4">8mg</span>
              </p>
              <p className="text-blue-600">45%</p>
            </li>

            <li className="text-base font-bold flex items-center justify-between gap-1 py-3 border-b-4 border-black">
              <p>
                Potassium <span className="font-normal ml-4">235mg</span>
              </p>
              <p className="text-blue-600">6%</p>
            </li>
          </ul>

          <p className="text-[#0F1017] text-sm max-w-[700px] mt-2">
            *The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2,000 calories a day is used
            for general nutrition advice.
          </p>

          <button
            type="button"
            onClick={onCreate}
            className="bg-[#3D2278] mt-12 text-white rounded-[10px] w-full min-h-12 max-w-[200px] mx-auto text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
