import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';

import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/airbnb.jpg'

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
            Airbnb Analysis
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
                  style={{ maxHeight: '5000px', width: '100%', height: 'auto' }}
                  alt="Airbnb Analysis"
                />
              </div>
        </div>

        {/* PROJECT INFO */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 text"
          >
          Airbnb Analysis
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project involved a comprehensive analysis of the AirBnB dataset for Seattle in 2016. Utilizing Tableau, a powerful data visualization tool, the aim was to uncover trends, patterns, and insights into the AirBnB market in Seattle. This analysis was geared towards understanding pricing dynamics, occupancy rates, and geographical distribution of properties.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The project harnessed Tableau's capabilities to manipulate and explore the dataset, which included information like property types, locations, prices, and reviews. The initial phase focused on cleaning and preparing the data for analysis, ensuring accuracy and relevancy for the insights to be derived.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In-depth analysis revealed significant trends in pricing and occupancy rates throughout the year. The project also identified popular neighborhoods and property types, offering insights into the most profitable and sought-after rental properties in Seattle. Additionally, the analysis provided an understanding of customer preferences and behaviors based on reviews and ratings.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The use of Tableau enabled the creation of interactive dashboards and visualizations that made the data easily comprehensible and engaging. These visualizations highlighted key aspects of the Seattle AirBnB market, allowing for intuitive interpretation of complex data patterns.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The project's findings are invaluable for property owners, investors, and market analysts in the AirBnB sector. By elucidating the dynamics of the Seattle AirBnB market, the analysis provides actionable insights for strategic decision-making in property investment and management. This study exemplifies the power of data visualization in transforming raw data into meaningful business intelligence.
              </p>

        </div>
      </div>
				
				
			</SingleProjectProvider>
		</motion.div>
  )
}

export default AirbnbAnalysis