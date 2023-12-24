import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/Statistik Lengkap UTBK STEI-K22.png'


const UtbkScoreAnalysis = () => {
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
          UTBK Score Analysis  
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
                  alt="UtbkScoreAnalysis"
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
          UTBK Score Analysis  
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This comprehensive statistical report, titled "Complete Statistics of UTBK STEI-K'22," focuses on surveying the University Entrance Test scores (UTBK) for the students of STEI-K in 2022. The aim was to analyze and provide a detailed breakdown of the scores across various subtests, offering insights into academic performance and trends.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The report was compiled from survey responses of 78 participants, covering scores from both the Science and Math (Saintek) and Social Studies (Soshum) streams. The data encompasses a range of scores, including individual subtest scores and overall averages, providing a comprehensive view of the academic prowess of the candidates.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              Through detailed data processing and analysis, the report highlights key findings such as the distribution of scores across different subtests, extremes and average scores. It also delves into the correlation between UTBK scores and independent (Mandiri) track admission rates, presenting a holistic view of student performance and selection criteria.
              </p>
              
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The significance of this report lies in its potential to guide future applicants and educational institutions. It serves as a valuable resource for understanding the competitive landscape of university admissions and for students to benchmark their preparation against established standards.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In conclusion, the "Statistik Lengkap UTBK STEI-K'22" report stands as an essential tool for educational analysis and planning. It not only provides a snapshot of the current academic environment but also sets a precedent for data-driven approaches in educational assessment and research.
              </p>
        </div>
      </div>
				
				
			</SingleProjectProvider>
		</motion.div>
  )
}

export default UtbkScoreAnalysis