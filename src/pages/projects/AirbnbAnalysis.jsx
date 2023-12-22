import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';

import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/ui-project-1.jpg'

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
                  style={{ maxHeight: '350px', width: '100%', height: 'auto' }}
                  alt="Airbnb Analysis"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, aut maxime? Nam debitis nesciunt dolore ullam ipsam voluptatibus. Esse ipsa sint doloribus dolores perferendis tempora quas molestiae in rem nisi.
              </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, aut maxime? Nam debitis nesciunt dolore ullam ipsam voluptatibus. Esse ipsa sint doloribus dolores perferendis tempora quas molestiae in rem nisi.
              </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, aut maxime? Nam debitis nesciunt dolore ullam ipsam voluptatibus. Esse ipsa sint doloribus dolores perferendis tempora quas molestiae in rem nisi.
              </p>
        </div>
      </div>
				
				
			</SingleProjectProvider>
		</motion.div>
  )
}

export default AirbnbAnalysis