import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/speed2.jpg'

import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
  FiGithub
} from 'react-icons/fi';



const TimeSeriesForecasting = () => {
  
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
          Time Series Forecasting of Average Vehicle Speed Using the XGBoost Algorithm  
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
                  alt="TimeSeriesForecasting"
                />
              </div>
        </div>


        {/* PROJECT INFO */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-justify">
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
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Time Series Forecasting of Average Vehicle Speed Using the XGBoost Algorithm
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project aims to forecast the average speed of vehicles on roads using the advanced XGBoost algorithm. The core objective is to leverage time series forecasting in predicting traffic patterns, which is pivotal for efficient traffic management and reducing congestion. By analyzing historical data, the project seeks to provide accurate predictions that can aid in optimizing travel routes and enhancing road safety.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The XGBoost algorithm, known for its high performance in regression tasks, was chosen for its efficiency and interpretability. We began by thoroughly preprocessing the data, including encoding categorical variables and handling missing values. The project extensively utilized the RandomizedSearchCV technique for hyperparameter tuning, ensuring the model is optimally configured for the best predictive performance.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The model was trained on a dataset comprising various traffic conditions and times, providing a comprehensive view of vehicle speed patterns. Feature engineering played a crucial role in enhancing the model's ability to interpret complex relationships within the data. Our approach focused on creating a robust model capable of handling nonlinear complexities and providing reliable forecasts.
              </p>
              
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The XGBoost model achieved a remarkable mean squared error score, indicating its accuracy in forecasting vehicle speeds. The success of this project lies in its potential to revolutionize traffic management, offering actionable insights for reducing traffic congestion and improving overall traffic flow. This predictive capability is invaluable for city planners and traffic authorities in strategic decision-making.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In conclusion, this project demonstrates the effective application of machine learning in a critical real-world scenario. By integrating the XGBoost algorithm with time series data, we have created a tool that can predict traffic conditions with significant accuracy. The outcomes of this project underline the importance of data-driven approaches in urban planning and traffic management, paving the way for smarter and more efficient cities.
              </p>
        </div>
      </div>
				
        <ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
  )
}

export default TimeSeriesForecasting