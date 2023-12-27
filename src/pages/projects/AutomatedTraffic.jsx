import React from 'react'
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock} from 'react-icons/fi';
import ImagePlaceholder from '../../images/Cover (3)2.png'
import {
  FiArrowDownCircle
} from 'react-icons/fi';

const AutomatedTraffic = () => {
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
          Automated Traffic Condition Monitoring for Accident Detection Using YOLOv8 
          </p>
          <div className="flex">
            <div className="flex items-center mr-10">
              <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                11 Agustus 2023
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
                  alt="AutomatedTraffic"
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
              href= "https://drive.google.com/file/d/1g4wsAlxogP8_6GhH7dyrhFp4PVjyAeAd/view?usp=sharing"
              target="__blank"
              aria-label="Share Project"
              className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            >
              <span className="text-lg lg:text-2xl">
                <FiArrowDownCircle/>
              </span>
            </a>
          </div>
        </div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Automated Traffic Condition Monitoring for Accident Detection Using YOLOv8
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project is dedicated to developing an automated traffic monitoring system that detects road accidents using the YOLOv8 algorithm. Given the high rate of traffic accidents in Indonesia, this system aims to enhance road safety by providing timely and accurate accident detection. This innovation is crucial for rapid emergency response and reducing the overall impact of road accidents.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              We employed the YOLOv8 algorithm, the latest in object detection technology, to analyze traffic surveillance footage. The system is designed to identify anomalies indicative of accidents in real-time traffic scenarios. Data from CCTV footage is processed, with each frame being analyzed to detect potential accidents. This setup ensures continuous monitoring and immediate detection of any unusual events on the roads.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The model was trained and validated on a comprehensive dataset, which included various traffic conditions and accident scenarios. The system not only detects accidents but also provides detailed information such as the location, time, and visual documentation of the incident. This information is crucial for authorities to initiate appropriate and swift action.
              </p>
              
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              Our results demonstrated high accuracy in accident detection, with the model achieving a significant mean average precision score. The success of this project lies in its ability to provide a fast and reliable means of accident detection, thereby enabling quicker response times from emergency services and potentially saving lives. Additionally, this system can serve as a valuable tool for traffic analysis and city planning.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In conclusion, the project represents a significant advancement in traffic monitoring and accident detection technology. By integrating advanced machine learning algorithms with real-time data analysis, we provide an innovative solution to a pressing societal issue. This system has the potential to revolutionize traffic safety measures and serve as a model for other urban areas facing similar challenges.
              </p>
        </div>
      </div>
				
        <ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
  )
}

export default AutomatedTraffic