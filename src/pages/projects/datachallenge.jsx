import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';

import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/telecom2.jpg'

import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
  FiGithub
} from 'react-icons/fi';

const AirbnbAnalysis = () => {
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
          Customer Segmentation and Churn Prediction: Strategies for Optimizing Customer Retention in the Telecommunications Industry 
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
                  style={{width: '100%', height: '100%' }}
                  alt="Airbnb Analysis"
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
              href= "https://github.com/Maull09/PortoMaul/"
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
			<div className="w-full sm:w-2/3mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 text"
          >
          Customer Segmentation and Churn Prediction: Strategies for Optimizing Customer Retention in the Telecommunications Industry 
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This comprehensive portfolio showcases two pivotal projects in the telecommunications domain: 'Churn Prediction' and 'Customer Segmentation'. Both projects utilize an extensive dataset, aiming to unravel the complexities of customer behavior and enhance service retention.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              Each project begins with thorough data exploration, involving a detailed analysis of customer attributes, such as tenure, service preferences, and purchasing behavior. Data preprocessing is a critical step, ensuring high-quality and accurate analysis.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The Churn Prediction project employs advanced machine learning techniques to forecast potential service churn. By analyzing patterns in customer data, this project provides essential insights for devising effective retention strategies.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              Complementing the churn analysis, the Customer Segmentation project delves into classifying customers into distinct groups. This segmentation is based on various behavioral and demographic characteristics, enabling personalized marketing approaches.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              Together, these projects offer a holistic view of customer dynamics in the telecom sector. They not only facilitate targeted customer engagement but also pave the way for future enhancements in predictive analytics and customer relationship management.
              </p>

        </div>
      </div>
				
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
  )
}

export default AirbnbAnalysis