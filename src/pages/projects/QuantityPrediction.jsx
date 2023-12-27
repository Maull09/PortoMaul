import React from 'react'
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock} from 'react-icons/fi';
import ImagePlaceholder from '../../images/qtyandcs2.jpg'
import {
	FiArrowDownCircle,
  FiGithub
} from 'react-icons/fi';

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
                22 October 2023
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
        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            See The Project
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href= "https://drive.google.com/file/d/1inZrPJzAcxnYtZMSU9ysVFoEcnH75-GX/view?usp=sharing"
              target="__blank"
              aria-label="Share Project"
              className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            >
              <span className="text-lg lg:text-2xl">
                <FiArrowDownCircle/>
              </span>
            </a>
            <a
              href= "https://github.com/Maull09/PBI-Kalbe"
              target="__blank"
              aria-label="Share Project"
              className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            >
              <span className="text-lg lg:text-2xl">
                <FiGithub/>
              </span>
            </a>
          </div>
        </div>
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
				
        <ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
  )
}

export default QuantityPrediction