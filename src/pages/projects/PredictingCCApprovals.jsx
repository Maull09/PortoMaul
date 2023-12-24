import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/credit_card.jpg'

const PredictingCCApprovals = () => {
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
          Predicting Credit Card Approvals  
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
                  style={{ maxHeight: '3500px', width: '100%', height: 'auto' }}
                  alt="PredictingCCapproval"
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
          Predicting Credit Card Approvals    
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In this project, we delve into the domain of financial credit, focusing on the prediction of credit card approvals. Our aim is to leverage machine learning techniques to provide an automated solution that efficiently evaluates and predicts whether a credit card application should be approved or not. This system is designed to assist financial institutions in making informed decisions, thereby reducing the risk of credit defaults while making the process quicker and more reliable for potential customers.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The project begins with a comprehensive analysis of the dataset, which comprises various applicant details deemed relevant for credit approval decisions. We meticulously handle missing values, ensure data consistency, and perform exploratory data analysis (EDA) to uncover hidden patterns and relationships. The preprocessing phase also includes feature scaling and encoding, preparing our dataset for the application of machine learning algorithms.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              A critical part of our project is the development of a machine learning model that can accurately predict credit card approval decisions. We employ logistic regression, a widely-used algorithm for classification problems, owing to its efficiency and effectiveness in binary decision scenarios. The model is trained and tested on our dataset, ensuring it learns to distinguish between the characteristics of approved and denied credit card applications.
              </p>
              
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              To enhance the model's performance, we utilize techniques such as GridSearchCV for hyperparameter tuning, ensuring that our logistic regression model is optimized for the best possible outcome. The model's accuracy and reliability are rigorously tested using cross-validation methods, providing confidence in its predictive capabilities.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project successfully demonstrates how machine learning can transform the credit card approval process. By implementing our logistic regression model, financial institutions can now predict approval decisions with higher accuracy, speed, and efficiency. This not only streamlines the approval process but also helps in minimizing financial risks. The blend of data science and machine learning stands as a testament to the potential for technology to revolutionize traditional business processes.
              </p>
        </div>
      </div>
				
				
			</SingleProjectProvider>
		</motion.div>
  )
}

export default PredictingCCApprovals