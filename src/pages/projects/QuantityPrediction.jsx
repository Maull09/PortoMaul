import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/qtyandcs.jpg'


const QuantityPrediction = () => {
  return (
    <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>

        {/* PROJECT HEADER */}
        <div>
          <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          Quantitiy Prediction And Customer Segmentation   
          </p>
          <div className="flex">
            <div className="flex items-center mr-10">
              <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                1 January 2024
              </span>
            </div>
          </div>
        </div>

        {/* PROJECT GALLERY */}
        <div className="grid grid-cols-1 sm:gap-10 mt-12">
              {/* Awalnya ada md:grid-cols-3 */}
              <div className="mb-10 sm:mb-0">
                <img
                  src={ImagePlaceholder}
                  className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                  style={{ width: '100%', height: '100%' }}
                  alt="QuantityPrediction"
                />
              </div>
        </div>

        {/* PROJECT INFO */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Quantitiy Prediction And Customer Segmentation  
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The project was initiated as a part of Kalbe Nutritionals' initiative to enhance its business operations. The primary focus was on two key areas: predicting daily sales quantities of products and segmenting customers. The goal was to ascertain product sales quantities for optimal inventory management and to create distinct customer segments for targeted marketing strategies.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The project employed data science techniques for both quantity prediction and customer segmentation. For the sales quantity prediction, a time series forecasting approach was utilized. The customer data, including demographics and purchase history, was analyzed to segment customers into meaningful groups. This dual approach was designed to address both inventory efficiency and personalized marketing needs.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In-depth analysis of customer data revealed distinct purchasing patterns and preferences. This information was crucial in forming customer segments, which were then used to tailor marketing strategies. Additionally, the sales quantity prediction model helped in understanding product demand trends, enabling better stock management and reducing overstocking or stockouts.
              </p>
              
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The successful implementation of this project led to more efficient inventory management and enhanced marketing strategies. The ability to predict product quantities reduced operational costs, while customer segmentation allowed for more effective and personalized marketing efforts. These improvements significantly contributed to overall business efficiency and customer satisfaction.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In conclusion, this project stands as a testament to the power of data science in transforming business operations. The combination of predictive analytics and customer segmentation provided Kalbe Nutritionals with a competitive edge, optimizing both inventory management and marketing strategies. This project highlights the importance of data-driven decision-making in the modern business landscape.
              </p>
        </div>
      </div>
				
				
			</SingleProjectProvider>
		</motion.div>
  )
}

export default QuantityPrediction